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

/* --- Slider fürs Sortiment ------------------------------------------------
   Die Spur lässt sich von Haus aus wischen. Dieses Stück fügt die beiden
   Pfeilknöpfe hinzu und schaltet sie aus, wenn es nichts mehr zu blättern gibt.
   -------------------------------------------------------------------------- */
const spur = document.getElementById('sortiment-spur');

if (spur) {
  const knoepfe = document.querySelectorAll('.slider-knopf');

  // Um wie viel wird geblättert? Um die Breite einer Karte plus Abstand.
  function schrittweite() {
    const karte = spur.querySelector('.produkt');
    if (!karte) return spur.clientWidth;
    const abstand = parseFloat(getComputedStyle(spur).columnGap) || 0;
    return karte.offsetWidth + abstand;
  }

  knoepfe.forEach((knopf) => {
    knopf.addEventListener('click', () => {
      const richtung = Number(knopf.dataset.richtung);
      spur.scrollBy({ left: richtung * schrittweite(), behavior: 'smooth' });
    });
  });

  // Knöpfe ausgrauen, wenn der Anfang oder das Ende erreicht ist
  function knoepfePruefen() {
    const maximum = spur.scrollWidth - spur.clientWidth;
    knoepfe.forEach((knopf) => {
      const richtung = Number(knopf.dataset.richtung);
      const amAnfang = spur.scrollLeft <= 1;
      const amEnde = spur.scrollLeft >= maximum - 1;
      knopf.disabled = richtung < 0 ? amAnfang : amEnde;
    });
  }

  spur.addEventListener('scroll', knoepfePruefen, { passive: true });
  window.addEventListener('resize', knoepfePruefen);
  knoepfePruefen();
}

/* --- Kopfzeile beim Scrollen ---------------------------------------------
   Auf dem Handy sitzt oben das grosse Symbol und die Kopfzeile hat denselben
   Farbton wie der Hero – sie wirkt dadurch wie ein Teil davon. Sobald der
   Besucher scrollt, bekommt sie eine Klasse: das Symbol schrumpft und ein
   Schatten kommt dazu. Am Computer ändert die Klasse nichts.
   -------------------------------------------------------------------------- */
const kopfzeile = document.querySelector('.site-header');

if (kopfzeile) {
  function kopfzeilePruefen() {
    kopfzeile.classList.toggle('site-header--gescrollt', window.scrollY > 30);
  }

  window.addEventListener('scroll', kopfzeilePruefen, { passive: true });
  kopfzeilePruefen();
}
