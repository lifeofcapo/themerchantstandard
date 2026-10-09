"use client";

import * as React from "react";
import { X } from "lucide-react";

const EVENTS = [
  { name: "Liam", country: "United Kingdom", flag: "🇬🇧" },
  { name: "Noah", country: "United States", flag: "🇺🇸" },
  { name: "Mateo", country: "Spain", flag: "🇪🇸" },
  { name: "Yuki", country: "Japan", flag: "🇯🇵" },
  { name: "Amara", country: "Nigeria", flag: "🇳🇬" },
  { name: "Lucas", country: "Brazil", flag: "🇧🇷" },
  { name: "Emma", country: "Germany", flag: "🇩🇪" },
  { name: "Ivan", country: "Poland", flag: "🇵🇱" },
  { name: "Olivia", country: "Canada", flag: "🇨🇦" },
  { name: "Oliver", country: "Australia", flag: "🇦🇺" },
  { name: "Sofia", country: "Italy", flag: "🇮🇹" },
  { name: "Ethan", country: "France", flag: "🇫🇷" },
  { name: "Mia", country: "Sweden", flag: "🇸🇪" },
  { name: "Aarav", country: "India", flag: "🇮🇳" },
  { name: "Hana", country: "South Korea", flag: "🇰🇷" },
  { name: "Leo", country: "Netherlands", flag: "🇳🇱" },
  { name: "Isabella", country: "Mexico", flag: "🇲🇽" },
  { name: "Mohammed", country: "United Arab Emirates", flag: "🇦🇪" },
  { name: "Freya", country: "Norway", flag: "🇳🇴" },
  { name: "Alexander", country: "Switzerland", flag: "🇨🇭" },
  { name: "Chloe", country: "New Zealand", flag: "🇳🇿" },
  { name: "Daniel", country: "Portugal", flag: "🇵🇹" },
  { name: "Layla", country: "Egypt", flag: "🇪🇬" },
  { name: "Gabriel", country: "Argentina", flag: "🇦🇷" },
  { name: "Zara", country: "Pakistan", flag: "🇵🇰" },
  { name: "Finn", country: "Finland", flag: "🇫🇮" },
  { name: "Nina", country: "Austria", flag: "🇦🇹" },
  { name: "Rafael", country: "Colombia", flag: "🇨🇴" },
  { name: "Aisha", country: "Saudi Arabia", flag: "🇸🇦" },
  { name: "Jakub", country: "Czech Republic", flag: "🇨🇿" },
  { name: "Ella", country: "Denmark", flag: "🇩🇰" },
  { name: "Arjun", country: "Singapore", flag: "🇸🇬" },
  { name: "Luna", country: "Belgium", flag: "🇧🇪" },
  { name: "Diego", country: "Chile", flag: "🇨🇱" },
  { name: "Mila", country: "Croatia", flag: "🇭🇷" },
    { name: "Theo", country: "Greece", flag: "🇬🇷" },
  { name: "Ananya", country: "Bangladesh", flag: "🇧🇩" },
  { name: "Hugo", country: "Ireland", flag: "🇮🇪" },
  { name: "Leila", country: "Morocco", flag: "🇲🇦" },
  { name: "Maksym", country: "Ukraine", flag: "🇺🇦" },
  { name: "Sara", country: "Romania", flag: "🇷🇴" },
  { name: "Emil", country: "Iceland", flag: "🇮🇸" },
  { name: "Camila", country: "Peru", flag: "🇵🇪" },
  { name: "Yusuf", country: "Turkey", flag: "🇹🇷" },
  { name: "Katarina", country: "Slovakia", flag: "🇸🇰" },
  { name: "Andrei", country: "Bulgaria", flag: "🇧🇬" },
  { name: "Zoe", country: "South Africa", flag: "🇿🇦" },
  { name: "Dmitri", country: "Estonia", flag: "🇪🇪" },
  { name: "Alina", country: "Latvia", flag: "🇱🇻" },
  { name: "Nikolai", country: "Lithuania", flag: "🇱🇹" },
  { name: "Mei", country: "China", flag: "🇨🇳" },
  { name: "Riku", country: "Japan", flag: "🇯🇵" },
  { name: "Priya", country: "India", flag: "🇮🇳" },
  { name: "Amir", country: "Malaysia", flag: "🇲🇾" },
  { name: "Siti", country: "Indonesia", flag: "🇮🇩" },
  { name: "Minh", country: "Vietnam", flag: "🇻🇳" },
  { name: "Niran", country: "Thailand", flag: "🇹🇭" },
  { name: "Maria", country: "Philippines", flag: "🇵🇭" },
  { name: "Omar", country: "Jordan", flag: "🇯🇴" },
  { name: "Noor", country: "Qatar", flag: "🇶🇦" },
  { name: "Reza", country: "Iran", flag: "🇮🇷" },
  { name: "Daria", country: "Georgia", flag: "🇬🇪" },
  { name: "Narek", country: "Armenia", flag: "🇦🇲" },
  { name: "Pablo", country: "Uruguay", flag: "🇺🇾" },
  { name: "Valentina", country: "Venezuela", flag: "🇻🇪" },
  { name: "Thiago", country: "Brazil", flag: "🇧🇷" },
  { name: "Lucia", country: "Ecuador", flag: "🇪🇨" },
  { name: "Andres", country: "Costa Rica", flag: "🇨🇷" },
  { name: "Santiago", country: "Panama", flag: "🇵🇦" },
  { name: "Elena", country: "Dominican Republic", flag: "🇩🇴" },
    { name: "Kwame", country: "Ghana", flag: "🇬🇭" },
  { name: "Fatima", country: "Kenya", flag: "🇰🇪" },
  { name: "Tunde", country: "Nigeria", flag: "🇳🇬" },
  { name: "Zanele", country: "South Africa", flag: "🇿🇦" },
  { name: "Abdi", country: "Somalia", flag: "🇸🇴" },
  { name: "Mariam", country: "Tunisia", flag: "🇹🇳" },
  { name: "Yara", country: "Lebanon", flag: "🇱🇧" },
  { name: "Ibrahim", country: "Kuwait", flag: "🇰🇼" },
  { name: "Sana", country: "Oman", flag: "🇴🇲" },
  { name: "Rohan", country: "Sri Lanka", flag: "🇱🇰" },
  { name: "Tenzin", country: "Bhutan", flag: "🇧🇹" },
  { name: "Amina", country: "Maldives", flag: "🇲🇻" },
  { name: "Park", country: "South Korea", flag: "🇰🇷" },
  { name: "Wei", country: "Taiwan", flag: "🇹🇼" },
  { name: "Carlos", country: "Spain", flag: "🇪🇸" },
  { name: "Antoine", country: "France", flag: "🇫🇷" },
  { name: "William", country: "United States", flag: "🇺🇸" },
  { name: "George", country: "United Kingdom", flag: "🇬🇧" },
  { name: "Edward", country: "Australia", flag: "🇦🇺" },
  { name: "Victor", country: "Canada", flag: "🇨🇦" },
  { name: "Sebastian", country: "Germany", flag: "🇩🇪" },
  { name: "Adrian", country: "Poland", flag: "🇵🇱" },
  { name: "Julian", country: "Netherlands", flag: "🇳🇱" },
  { name: "Thomas", country: "Switzerland", flag: "🇨🇭" },
  { name: "Max", country: "Austria", flag: "🇦🇹" },
  { name: "Oscar", country: "Sweden", flag: "🇸🇪" },
  { name: "Erik", country: "Norway", flag: "🇳🇴" },
  { name: "Axel", country: "Denmark", flag: "🇩🇰" },
  { name: "Mikko", country: "Finland", flag: "🇫🇮" },
  { name: "Luca", country: "Italy", flag: "🇮🇹" },
  { name: "Enzo", country: "Portugal", flag: "🇵🇹" },
  { name: "Alex", country: "Romania", flag: "🇷🇴" },
  { name: "Marek", country: "Czech Republic", flag: "🇨🇿" },
  { name: "Filip", country: "Slovenia", flag: "🇸🇮" },
  { name: "Nikola", country: "Serbia", flag: "🇷🇸" },
  { name: "Petra", country: "Hungary", flag: "🇭🇺" },
  { name: "Marta", country: "Slovakia", flag: "🇸🇰" },
  { name: "Ivo", country: "Bosnia and Herzegovina", flag: "🇧🇦" },
  { name: "Ana", country: "Montenegro", flag: "🇲🇪" },
  { name: "Diana", country: "Moldova", flag: "🇲🇩" },
  { name: "Oleh", country: "Ukraine", flag: "🇺🇦" },
  { name: "Maya", country: "Israel", flag: "🇮🇱" },
  { name: "Samir", country: "Algeria", flag: "🇩🇿" },
  { name: "Nadia", country: "Argentina", flag: "🇦🇷" },
  { name: "Ren", country: "Japan", flag: "🇯🇵" },
  { name: "Alexandre", country: "Brazil", flag: "🇧🇷" },
  { name: "Sophie", country: "Belgium", flag: "🇧🇪" },
  { name: "Eva", country: "Luxembourg", flag: "🇱🇺" },
  { name: "Adam", country: "Malta", flag: "🇲🇹" },
  { name: "Nora", country: "Cyprus", flag: "🇨🇾" },
];



export function JoinNotifications() {
  const [current, setCurrent] = React.useState<typeof EVENTS[number] | null>(null);
  const [dismissed, setDismissed] = React.useState(false);

  React.useEffect(() => {
    function showNext() {
      setCurrent(EVENTS[Math.floor(Math.random() * EVENTS.length)]);
      setDismissed(false);
    }

    const firstDelay = setTimeout(showNext, 10000);

    const interval = setInterval(showNext, 10 * 60 * 1000);

    return () => {
      clearTimeout(firstDelay);
      clearInterval(interval);
    };
  }, []);

  if (!current || dismissed) return null;

  return (
    <>
      <div className="header-glass fixed bottom-6 left-6 z-30 hidden max-w-xs items-center gap-3 rounded-full px-4 py-2.5 md:flex">
        <span className="text-xl">{current.flag}</span>

        <p className="text-sm text-parchment/85">
          <span className="font-semibold text-parchment">
            {current.name}
          </span>{" "}
          from {current.country} joined
        </p>

        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="ml-1 shrink-0 text-parchment/40 hover:text-parchment"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>

      <div
        className="fixed inset-x-0 z-30 px-3 md:hidden"
        style={{
          bottom: "calc(5.75rem + env(safe-area-inset-bottom, 0px))",
        }}
      >
        <div className="header-glass flex items-center justify-between gap-3 rounded-full px-4 py-2.5">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="shrink-0 text-lg">{current.flag}</span>

            <p className="min-w-0 truncate text-sm text-parchment/85">
              <span className="font-semibold text-parchment">
                {current.name}
              </span>{" "}
              from {current.country} joined
            </p>
          </div>

          <button
            onClick={() => setDismissed(true)}
            aria-label="Dismiss"
            className="shrink-0 text-parchment/40 hover:text-parchment"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </>
  );
}