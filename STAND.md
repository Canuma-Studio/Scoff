# Scoff – Stand

> Diese Datei ist die Übergabe zwischen den Arbeitssitzungen.
> Neuer Chat? Zuerst diese Datei lesen, dann weitermachen.
> Claude aktualisiert sie am Ende jeder Sitzung.

**Letzte Aktualisierung:** 12.09.2026

---

## Wo wir stehen

Die Startseite steht und ist online. Alle Texte sind noch Platzhalter.

- **Live:** https://canuma36.github.io/Scoff/
- **Repo:** https://github.com/Canuma36/Scoff (Branch `main`)
- **Lokal:** `/Users/canuma/Projekt/Webseiten/scoff`

---

## Erledigt

- [x] Projektordner angelegt, Git-Repo initialisiert
- [x] VS Code eingerichtet: Ordner getrustet, Live Server installiert, `.vscode/settings.json` im Projekt
- [x] Zwei Designentwürfe gebaut und verglichen → **Variante B** (modern/markant) gewählt
- [x] Startseite gebaut: `index.html`, `styles.css` (zentrale Variablen), `script.js` (Burger-Menü, Jahreszahl)
- [x] Auf GitHub hochgeladen, GitHub Pages eingeschaltet → Seite ist live

## Als Nächstes

- [ ] **Impressum-Seite** (`impressum.html`) – der Footer-Link zeigt aktuell ins Leere. In der Schweiz für eine Firmenseite Pflicht.
- [ ] **Kontaktformular scharf schalten** über Formspree – aktuell verschickt es nichts
- [ ] **Echte Inhalte** einbauen, sobald der Kollege geliefert hat (alle Stellen im Code mit `PLATZHALTER` markiert)
- [ ] Fotos in `images/` einbauen, die grauen Platzhalterflächen ersetzen
- [ ] Später: eigene Domain, Englisch als zweite Sprache

## Warten auf den Kollegen

- Vollständiger Firmenname mit Rechtsform, Adresse, Telefon, E-Mail, ggf. UID-Nummer
- Genaue Leistungen und Länder
- Über-uns-Text in seinen eigenen Worten (3–5 Sätze)
- Fotos und Logo
- Öffnungszeiten
- Ziel-E-Mail-Adresse für die Formularanfragen

---

## Ablauf beim Arbeiten

```
tippen + Cmd+S   →  Live Server zeigt es sofort (nur lokal)
git commit       →  Stand gesichert (nur auf dem Mac)
git push         →  Live-Seite aktualisiert sich (1–2 Minuten)
```

Hochladen:

```bash
git add -A && git commit -m "was geändert wurde" && git push
```

## Bekannte Stolpersteine

- **`fatal: Unable to create .git/index.lock: File exists`** – entsteht, wenn Claude von aussen in das Repo geschaut hat. Lösung: `rm -f .git/index.lock` vor den Commit-Befehl setzen.
- Beim Einfügen ins Terminal kann `[200~` vor dem Befehl landen (`zsh: bad pattern`). Einfach nochmal einfügen.
