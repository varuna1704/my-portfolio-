/**
 * Feature 12: CLI Easter Egg
 * Prints a styled welcome message to the browser console for curious devs.
 */
export function useConsoleEasterEgg() {
  if (typeof window === "undefined") return;

  const art = [
    "  __   ___  _ ____  _   _ _   _    _    ",
    "  \\ \\ / / || |  _ \\| | | | \\ | |  / \\   ",
    "   \\ V /| || | |_) | | | |  \\| | / _ \\  ",
    "    | | |__   _|  _ <| |_| | |\\  |/ ___ \\ ",
    "    |_|    |_| |_| \\_\\\\___/|_| \\_/_/   \\_\\",
  ].join("\n");

  console.log(
    `%c\n${art}\n`,
    "color:#ff6b35;font-family:'JetBrains Mono',monospace;font-size:11px;line-height:1.4"
  );
  console.log(
    "%c👋 Hey, curious developer!",
    "color:#00d4aa;font-family:'Syne',sans-serif;font-size:16px;font-weight:800"
  );
  console.log(
    "%cVaruna Nikam — Shopify & Frontend Developer\nBuilt with React + Vite + Framer Motion",
    "color:#94a3b8;font-family:'JetBrains Mono',monospace;font-size:12px"
  );
  console.log(
    "%c📬 nikamvaruna@gmail.com\n💼 linkedin.com/in/varunanikam-200255255\n🐙 github.com/varuna1704",
    "color:#e2e8f0;font-family:'JetBrains Mono',monospace;font-size:12px"
  );
  console.log(
    "%c✨ Like what you see? Let's build something together!",
    "color:#f59e0b;font-family:'Syne',sans-serif;font-size:13px;font-weight:700"
  );
}
