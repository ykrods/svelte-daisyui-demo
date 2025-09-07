export function getMenu(root: HTMLElement): HTMLElement | null {
  return root.querySelector(`[role="menu"]`);
}

export function isMenuHidden(menu: HTMLElement): boolean {
  const display = window.getComputedStyle(menu).display;
  return display === "none";
}

export function getCandidates(root: HTMLElement): HTMLElement[] {
  const menu = getMenu(root);
  if (!menu) { return [] };

  return Array.from(menu.querySelectorAll("a, button"));
}
