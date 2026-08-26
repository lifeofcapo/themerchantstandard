export async function createDiscordInvite(): Promise<string> {
  const channelId = process.env.DISCORD_INVITE_CHANNEL_ID;
  const botToken = process.env.DISCORD_BOT_TOKEN;

  if (!channelId || !botToken) {
    throw new Error("Discord invite channel/token is not configured");
  }

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