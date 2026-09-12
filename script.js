/* ==========================================================================
   Scoff – Seitenskript
   Aktuell zwei kleine Aufgaben: Menü auf dem Handy, Jahreszahl im Footer.
   ========================================================================== */

/* --- Burger-Menü auf schmalen Bildschirmen -------------------------------- */
const toggle = document.getElementById('nav-toggle');
const nav = document.getElementById('hauptnavigation');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const offen = nav.getAttribute('data-open') === 'true';
    nav.setAttribute('data-open', String(!offen));
    toggle.setAttribute('aria-expanded', String(!offen));
  });

  // Nach einem Klick auf einen Menüpunkt das Menü wieder schliessen
  nav.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      nav.setAttribute('data-open', 'false');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --- Jahreszahl im Footer automatisch aktuell halten ---------------------- */
const jahr = document.getElementById('jahr');
if (jahr) {
  jahr.textContent = new Date().getFullYear();
}
