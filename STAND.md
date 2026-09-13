# Scoff – Stand

> Diese Datei ist die Übergabe zwischen den Arbeitssitzungen.
> Neuer Chat? Zuerst diese Datei lesen, dann weitermachen.
> Claude aktualisiert sie am Ende jeder Sitzung.

**Letzte Aktualisierung:** 12.09.2026

---

## Wo wir stehen

Die Seite ist inhaltlich fertig gebaut. Es fehlen nur noch echte Daten –
die kommen am Montag vom Kollegen. Die Checkliste dafür ist `PLATZHALTER.md`.

- **Live:** https://canuma36.github.io/Scoff/
- **Repo:** https://github.com/Canuma36/Scoff (Branch `main`)
- **Lokal:** `/Users/canuma/Projekt/Webseiten/scoff`

**Achtung – noch nicht gepusht.** Die Arbeit vom 12.09. liegt als Commits
lokal. Der nächste `git push` bringt alles auf einmal live.

---

## Wichtige Korrektur vom 12.09.2026

Die Seite erzählte ursprünglich, Scoff sei ein reiner Verzollungs- und
Speditionsdienstleister, der nicht mit eigener Ware handelt. Das stimmt nicht.

**Scoff importiert italienische Weine und Spezialitäten und verkauft sie in
der Schweiz.** Aufgefallen ist es am Logo („SCOFF – ITALY – SWITZERLAND",
Messer und Gabel über italienischer und Schweizer Flagge) und an den
Produktfotos. Import und Verzollung macht die Firma selbst – das steht jetzt
als Verkaufsargument auf der Seite („Preis inklusive Zoll, kein
Zwischenhändler"), nicht mehr als Dienstleistungsangebot.

Entschieden dazu:

- Kundschaft: Gastronomie/Handel und Privatpersonen etwa gleich gewichtet
- Kein Shop. Bestellweg ist Anfrage über das Formular, dazu eine Preisliste
  als PDF (die PDF fehlt noch)
- Sortiment noch nicht abschliessend geklärt – im Slider ist Platz für
  weitere Kategorien gelassen

---

## Erledigt

- [x] Projektordner, Git-Repo, VS Code mit Live Server
- [x] Design **Variante B** gewählt und gebaut
- [x] GitHub Pages eingeschaltet, Seite ist live
- [x] `impressum.html` – Pflichtangaben nach UWG Art. 3 Abs. 1 lit. s
- [x] `datenschutz.html` – eigene Erklärung nach DSG, Formspree und GitHub
      Pages namentlich genannt
- [x] `danke.html` – Bestätigungsseite nach dem Absenden
- [x] Kontaktformular auf Formspree umgestellt, mit Spamfalle und
      Weiterleitung auf die Danke-Seite (**Form-ID fehlt noch**)
- [x] Startseite auf Handel umgebaut: Hero, Sortiment, „Warum über uns",
      „Für wen", Ablauf
- [x] Team-Abschnitt für zwei Personen
- [x] Logo rund freigestellt; Kopfzeile trägt nur das Emblem, das
      vollständige Logo steht gross im Hero
- [x] Favicons aus dem Emblem
- [x] Produktfotos aufbereitet: Weissabgleich auf reines Weiss, eng
      zugeschnitten, von je 3–5 MB auf je rund 60 KB
- [x] Sortiment als Slider: wischen auf dem Handy, Pfeile am Computer
- [x] `PLATZHALTER.md` als Checkliste für Montag

## Als Nächstes

1. [ ] **Echte Daten einsetzen** – `PLATZHALTER.md` abarbeiten
2. [ ] **Formspree** – Konto anlegen, Form-ID in `index.html` eintragen,
       Testanfrage senden
3. [ ] **Preisliste als PDF** vom Kollegen, Download-Knopf einbauen
4. [ ] **Produktnamen bestätigen lassen** – „Urbano", „Lacrima di Morro
       d'Alba", „Essenza Visciola" sind von den Etiketten abgelesen
5. [ ] **Portraits der zwei Personen** einsetzen
6. [ ] `git push` – dann geht alles live
7. [ ] Später: eigene Domain, Englisch als zweite Sprache

## Warten auf den Kollegen

Siehe `PLATZHALTER.md` – dort steht die vollständige Liste.

---

## Dateien

```
scoff/
├── index.html          Startseite
├── impressum.html      Pflichtangaben
├── datenschutz.html    Datenschutzerklärung
├── danke.html          nach dem Absenden des Formulars
├── styles.css          gesamtes Aussehen, Variablen ganz oben
├── script.js           Burger-Menü, Jahreszahl, Slider
├── STAND.md            diese Datei
├── PLATZHALTER.md      Checkliste der fehlenden Daten
├── entwurf/            die zwei ursprünglichen Designentwürfe (Archiv)
└── images/
    ├── scoff-logo.png       vollständiges Logo, rund freigestellt
    ├── scoff-emblem.png     nur der innere Kreis, für die Kopfzeile
    ├── favicon-*.png        Browser-Tab
    ├── wein-*.jpg           Produktfotos
    └── original/            Kameradateien, per .gitignore ausgeschlossen
```

---

## Ablauf beim Arbeiten

```
Claude ändert die Dateien
Philipp schaut im Live Server        (Rechtsklick → Open with Live Server)
Claude commitet, wenn der Diff passt
Philipp pusht                        → Live-Seite aktualisiert sich (1–2 Min)
```

Philipps Befehl ist damit meist nur noch:

```bash
git push
```

## Zu Beginn jeder neuen Sitzung

1. Ordnerzugriff auf `/Users/canuma/Projekt` anfragen
   (`device_request_folder_access`) – der Ordner ist nicht dauerhaft verbunden.
2. Löschrechte für **`/Users/canuma/Projekt`** anfragen
   (`device_request_delete_permission`). Die Freigabe gilt nur für die
   laufende Sitzung. Ohne sie kann Git seine Sperrdateien nicht aufräumen
   und Commits scheitern mit `Unable to create .git/index.lock`.

Wichtig: beides für `/Users/canuma/Projekt`, nicht für den Unterordner
`scoff` – auf der tieferen Ebene greift es nicht.

## Bekannte Stolpersteine

- **`fatal: Unable to create .git/index.lock: File exists`** – Löschrechte
  fehlen (siehe oben). Sofortlösung: `rm -f .git/index.lock` vor den Befehl.
- Beim Einfügen ins Terminal kann `[200~` vor dem Befehl landen
  (`zsh: bad pattern`). Einfach nochmal einfügen.
- **Handy zeigt die alte Fassung.** Safari behält `styles.css` und `script.js`
  hartnäckig im Zwischenspeicher. Ein `?v=` an der Seitenadresse hilft dabei
  **nicht** – das erneuert nur die HTML-Datei. Richtig ist: in allen vier
  HTML-Dateien die Versionsnummer hinter `styles.css?v=` und `script.js?v=`
  hochzählen. Das gehört nach jeder Änderung an diesen beiden Dateien gemacht.
- Kamerafotos sind 3–5 MB gross und müssen vor dem Einbauen verkleinert
  werden, sonst lädt die Seite auf dem Handy ewig. Zielgrösse rund 60 KB.
