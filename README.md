# xG Lab

Interaktives Expected-Goals-Modell: Schüsse aufs Feld setzen, Torwahrscheinlichkeit live berechnen, verdientes Ergebnis ableiten.

**Live:** [xg-lab.websbybenny.de](https://xg-lab.websbybenny.de) · Teil meines Portfolios: [portfolio.websbybenny.de](https://portfolio.websbybenny.de/#projects)

## Funktionen

- Schüsse per Klick aufs Spielfeld setzen, für Heim oder Gast, mit Körperteil und Spielsituation
- Logistisches Modell auf Schusswinkel und Distanz zum Tor; die Koeffizienten sind von Hand auf realistische Werte gesetzt, nicht an echten Eventdaten trainiert
- Optional als xG-Heatmap über die ganze Spielfeldhälfte
- Sieg-, Remis- und Niederlagen-Wahrscheinlichkeit exakt über die Poisson-Binomial-Verteilung der Tore, dazu der xG-Verlauf über die Spielzeit
- Ein simuliertes Spiel auf Knopfdruck und Export der Schüsse als CSV

## Tech-Stack

React 19 · Vite · Tailwind CSS · SVG

## Lokal starten

```bash
npm install
npm run dev
```

Gebaut wird mit `npm run build` (Ausgabe in `dist/`), auf Vercel ohne weitere Konfiguration.
