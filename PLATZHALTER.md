# Was am Montag noch eingesetzt werden muss

Die Website ist fertig gebaut. Es fehlen nur noch echte Daten.
Diese Liste abarbeiten, dann ist die Seite fertig.

---

## 1. Vom Kollegen holen

- [ ] **Firmenname mit Rechtsform** – exakt wie im Handelsregister, z.B. „Scoff GmbH"
- [ ] **Adresse** – Strasse, Nummer, PLZ, Ort (kein Postfach)
- [ ] **Telefonnummer**
- [ ] **E-Mail-Adresse** – öffentlich auf der Seite
- [ ] **Ziel-E-Mail für Formularanfragen** – kann dieselbe sein
- [ ] **UID-Nummer** (CHE-xxx.xxx.xxx) – nur falls im Handelsregister eingetragen,
      sonst die Zeile ersatzlos löschen
- [ ] **Öffnungszeiten**
- [ ] **Gründungsjahr und Anzahl Produzenten** – für die Zeile unter dem Hero
- [ ] **Sortiment** – welche Produkte, welche Produzenten, welche Regionen
- [ ] **Produktnamen bestätigen** – „Urbano", „Lacrima di Morro d'Alba" und
      „Essenza Visciola" sind von den Etiketten der Fotos abgelesen
- [ ] **Beschreibungstexte** – ein bis zwei Sätze pro Produkt
- [ ] **Preisliste als PDF** – für den Download-Knopf
- [ ] **Über-uns-Text** – 3 bis 5 Sätze in seinen eigenen Worten
- [ ] **Weitere Fotos** – Logo und drei Produktfotos sind da; es fehlen ein
      Bild für den Über-uns-Bereich und die zwei Portraits
- [ ] **Die zwei Personen** – Vorname, Nachname, Funktion, je ein Satz,
      je ein Portraitfoto (möglichst quadratisch, wird rund beschnitten)

## 2. Formspree einrichten

- [ ] Konto auf formspree.io anlegen (kostenloser Plan: 50 Anfragen pro Monat)
- [ ] Neues Formular erstellen, Ziel-E-Mail hinterlegen
- [ ] Die Form-ID (z.B. `xayzbwqr`) kopieren
- [ ] In `index.html` `DEINE_FORM_ID` durch die echte ID ersetzen
- [ ] Testanfrage über die Live-Seite senden und prüfen, ob die Mail ankommt
- [ ] Prüfen, ob die Weiterleitung auf `danke.html` funktioniert

---

## Stellen im Code

Alle Fundstellen finden mit:

```bash
grep -rn "PLATZHALTER" .
```

| Datei | Was |
|---|---|
| `index.html` | Meta-Beschreibung, Hero-Texte, Zeile „Seit JAHR · über X Länder", Leistungen, Über-uns-Text, Fotos, Team (2 Personen), Formspree-ID, Footer |
| `impressum.html` | Firmenangaben, UID-Zeile, Hinweiskasten löschen |
| `datenschutz.html` | Firmenangaben, Hinweiskasten löschen |
| `danke.html` | Footer |

Die orangen Hinweiskästen (`class="platzhalter"`) auf Impressum und Datenschutz
sind für Besucher sichtbar. Sie müssen gelöscht werden, sobald die echten
Angaben drin sind.

## Bilder

Fotos kommen in den Ordner `images/`. Die grauen Flächen im Code sehen so aus:

```html
<div class="placeholder">Foto folgt</div>
```

und werden ersetzt durch:

```html
<img src="images/team.jpg" alt="Kurze Beschreibung des Bildes">
```

Die Portraits im Team-Abschnitt sind eigene Platzhalter:

```html
<div class="person-foto person-foto--leer" aria-hidden="true">Foto folgt</div>
```

werden ersetzt durch:

```html
<img class="person-foto" src="images/person-1.jpg" alt="Portrait von Vorname Nachname">
```

Jedes `<img>` braucht einen `alt`-Text – eine kurze Beschreibung des Bildes.
Den liest ein Screenreader vor, und er erscheint, wenn das Bild nicht laedt.
