/* ==========================================================================
   Scoff – Seitenskript
   Menü auf dem Handy, Jahreszahl, Sortiment-Slider, Kopfzeile, Formular.
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

/* --- Kontaktformular ------------------------------------------------------
   Im Gratis-Plan zeigt Formspree nach dem Absenden seine eigene Danke-Seite.
   Deshalb schickt dieses Stück das Formular im Hintergrund ab und leitet
   danach selbst auf unsere danke.html weiter. Ohne JavaScript funktioniert
   das Formular trotzdem – dann eben mit der Seite von Formspree.
   -------------------------------------------------------------------------- */
const formular = document.getElementById('anfrage-formular');

if (formular) {
  const fehler = document.getElementById('form-fehler');
  const knopf = formular.querySelector('button[type="submit"]');
  const knopfText = knopf ? knopf.textContent : '';

  formular.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (fehler) fehler.hidden = true;

    // Betreff der Mail aussagekräftig machen, z.B.
    // "Website-Anfrage: Preise anfragen – Maria Muster (Restaurant oder Bar)"
    const betreff = formular.querySelector('[name="_subject"]');
    const name = formular.querySelector('#name');
    const anliegen = formular.querySelector('#anliegen');
    const typ = formular.querySelector('#typ');
    if (betreff && name && anliegen && typ) {
      betreff.value = 'Website-Anfrage: ' + anliegen.value + ' – ' +
        name.value.trim() + ' (' + typ.value + ')';
    }
    if (knopf) {
      knopf.disabled = true;
      knopf.textContent = 'Wird gesendet …';
    }

    try {
      const antwort = await fetch(formular.action, {
        method: 'POST',
        body: new FormData(formular),
        headers: { Accept: 'application/json' },
      });
      if (!antwort.ok) throw new Error('Formspree: ' + antwort.status);
      window.location.href = 'danke.html';
    } catch (err) {
      if (fehler) fehler.hidden = false;
      if (knopf) {
        knopf.disabled = false;
        knopf.textContent = knopfText;
      }
    }
  });
}
