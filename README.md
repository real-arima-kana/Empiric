# EMPIRIC

A minimalist 30-day habit pyramid PWA.

## Deploy to GitHub Pages

1. Create a public GitHub repository (e.g. `empiric`).
2. Upload all five files from this folder to the repository root.
3. In **Settings → Pages**, select **Deploy from a branch**, choose `main` and `/ (root)`, and save.
4. Open `https://YOUR-USERNAME.github.io/empiric/` on your phone. Add it to your home screen from the browser's share/menu controls.

## Rules

The challenge starts with two habits: Habit 1 is answered on Day 1, and Habit 2 becomes active on Day 2. Each following day adds one new habit for the next day. Unanswered check-ins are recorded as No at the next 4 AM local-time boundary. Past days cannot be edited. The 30-day pyramid contains 465 blocks.

## Storage

All data is stored in browser localStorage, not synced between devices. Settings provides JSON export/import. Keep regular backups. The 4 AM boundary is calculated when the app is opened or resumed, rather than requiring background execution.

## Preview

The home page has a preview mode showing all 30 rows. It does not change challenge progress.

## Version 1.1

Refined forest-green palette, SOLO LEVELING branding, animated interactions, and a mobile keyboard fix (the app no longer re-renders on viewport resize).

## Version 1.2

Home fits the viewport, pending check-in badge, selectable list/swipe check-in, optional bottom-up pyramid build, cascaded screen entrances, and isolated demo presets with next-day simulation. Debug data uses a separate localStorage key.
