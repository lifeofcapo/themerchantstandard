async function createDiscordInvite(): Promise<string> {
  const channelId = process.env.DISCORD_INVITE_CHANNEL_ID;
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!channelId || !botToken) {
    throw new Error(
      "Missing env vars. Set DISCORD_BOT_TOKEN and DISCORD_INVITE_CHANNEL_ID before running."
    );
  }

  console.log(`Creating invite for channel: ${channelId}`);

  const res = await fetch(
    `https://discord.com/api/v10/channels/${channelId}/invites`,
    {
      method: "POST",
      headers: {
        Authorization: `Bot ${botToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        max_uses: 1,
        max_age: 0, 
        unique: true,
      }),
    }
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Discord invite creation failed: ${res.status} ${text}`);
  }

  const data = await res.json();
  return `https://discord.gg/${data.code}`;
}

async function main() {
  try {
    const inviteUrl = await createDiscordInvite();
    console.log("\n✅ Invite created successfully!");
    console.log(`Invite URL: ${inviteUrl}`);
  } catch (err) {
    console.error("\n❌ Failed to create invite:");
    console.error(err instanceof Error ? err.message : err);
    process.exit(1);
  }
}

main();