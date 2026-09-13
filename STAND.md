# Scoff – Stand

> Diese Datei ist die Übergabe zwischen den Arbeitssitzungen.
> Neuer Chat? Zuerst diese Datei lesen, dann weitermachen.
> Claude aktualisiert sie am Ende jeder Sitzung.

**Letzte Aktualisierung:** 13.09.2026

---

## Wo wir stehen

Die Seite ist inhaltlich fertig gebaut. Es fehlen nur noch echte Daten –
die kommen am Montag vom Kollegen. Die Checkliste dafür ist `PLATZHALTER.md`.

- **Live:** https://canuma-studio.github.io/Scoff/
- **Repo:** https://github.com/Canuma-Studio/Scoff (Branch `main`)
- **Lokal (MacBook):** `/Users/canuma/Projekt/Webseiten/scoff`
- **Lokal (Windows-PC):** `C:\Projekt\Webseiten\scoff`

Philipp hat seinen GitHub-Benutzernamen am 13.09.2026 von `Canuma36` auf
`Canuma-Studio` geändert. Die alten Adressen leiten weiter, sind aber überall
nachzuziehen – am MacBook steht der Git-Remote noch auf dem alten Namen.

Die Seite ist gepusht und live. Am Computer gefällt sie Philipp so;
das Handy-Layout ist ebenfalls durchgearbeitet.

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
- [x] Handy-Layout überarbeitet: Kopfzeile geht in den Hero über (grosses
      Logo links, Menüzeichen rechts, kein Balken), Logo schrumpft beim
      Scrollen gleitend auf 44 px; Hero-Knöpfe auf dem Handy ausgeblendet,
      Anfrage-Knopf sitzt stattdessen im aufgeklappten Menü
- [x] Versionsnummer an `styles.css` und `script.js` gegen den Zwischenspeicher
- [x] Windows-PC eingerichtet: Repo nach `C:\Projekt\Webseiten\scoff` geklont,
      VS Code mit Live Server, Git-Identität gesetzt

## Als Nächstes

1. [ ] **Echte Daten einsetzen** – `PLATZHALTER.md` abarbeiten
2. [ ] **Formspree** – Konto anlegen, Form-ID in `index.html` eintragen,
       Testanfrage senden
3. [ ] **Preisliste als PDF** vom Kollegen, Download-Knopf einbauen
4. [ ] **Produktnamen bestätigen lassen** – „Urbano", „Lacrima di Morro
       d'Alba", „Essenza Visciola" sind von den Etiketten abgelesen
5. [ ] **Portraits der zwei Personen** einsetzen
6. [ ] `git push` – dann geht alles live
7. [ ] **Git-Remote am MacBook** auf den neuen Namen umstellen:
       `git remote set-url origin https://github.com/Canuma-Studio/Scoff.git`
8. [ ] Später: eigene Domain, Englisch als zweite Sprache

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

## Zwei Geräte – MacBook und Windows-PC

Seit dem 13.09.2026 liegt das Projekt auf beiden Geräten. GitHub ist die
Brücke dazwischen. Eiserne Regel, sonst laufen die Stände auseinander:

```
vor dem Arbeiten:    git pull
nach dem Arbeiten:   git push
```

Nie an beiden Geräten gleichzeitig arbeiten, ohne dazwischen zu pushen.

**Unterschied beim Arbeiten:**

| | MacBook | Windows-PC |
|---|---|---|
| Ordner | `/Users/canuma/Projekt/Webseiten/scoff` | `C:\Projekt\Webseiten\scoff` |
| Claude ändert Dateien | ja | ja |
| Claude führt Befehle aus | ja | **nein** |
| Git-Befehle tippt | Claude (Commit), Philipp (Push) | Philipp, Claude gibt sie vor |

Auf dem PC startet der Linux-Workspace der Cowork-Verbindung nicht
(Windows-Update vom 08.09.2026). Claude kann dort Dateien lesen und schreiben,
aber keine Befehle ausführen. Alle Terminal-Befehle bekommt Philipp fertig zum
Kopieren und führt sie selbst im VS-Code-Terminal aus.

## Zu Beginn jeder neuen Sitzung

**Am MacBook:**

1. Ordnerzugriff auf `/Users/canuma/Projekt` anfragen
   (`device_request_folder_access`) – der Ordner ist nicht dauerhaft verbunden.
2. Löschrechte für **`/Users/canuma/Projekt`** anfragen
   (`device_request_delete_permission`). Die Freigabe gilt nur für die
   laufende Sitzung. Ohne sie kann Git seine Sperrdateien nicht aufräumen
   und Commits scheitern mit `Unable to create .git/index.lock`.

Wichtig: beides für `/Users/canuma/Projekt`, nicht für den Unterordner
`scoff` – auf der tieferen Ebene greift es nicht.

**Am Windows-PC:**

1. Ordnerzugriff auf `C:\Projekt` anfragen (`device_request_folder_access`).
2. Löschrechte braucht es dort nicht – Git läuft ja über Philipps eigenes
   Terminal.
3. Philipp mit `git pull` starten lassen, bevor irgendetwas geändert wird.

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
