# Hellside Charts

Notowanie utworów z kanału YouTube **HELLSIDE RECORDS** – w stylu Billboard, aktualizowane co godzinę.

Strona: https://suly3738.github.io/hellsidecharts/ · Repozytorium: https://github.com/Suly3738/hellsidecharts

## Co jest na stronie

- **Na szczycie** – aktualny #1 z liczbą dni na szczycie.
- **Top 10** – wydania od utworu `nowStartVideoId` włącznie (wszystko nowsze), według wyświetleń.
- **Piekielne Certyfikaty** – progi wyświetleń z `config.tiers` (Żar 100 · Ogień 250 · Piekło 500 · Inferno 1000 · Czeluść 5000), data zdobycia z migawek, lista „najbliżej progu”.
- **O nas** – historia wytwórni (tekst w `template.html`).
- **Współpraca** – przycisk „Dołącz do nas!” → Discord (`config.discord`).
- **Odtwarzacz w stronie** – klik w winyl / „Odpal tutaj” ładuje iframe YouTube (nocookie).
- **Rosnące** – największe przyrosty wyświetleń tydzień do tygodnia (pojawia się po pierwszym tygodniu).
- **Artyści** – ranking wykonawców: suma wyświetleń, liczba utworów, udział, największy hit.
- **Nowości** – ostatnie wydania (`latestSize`), znacznik NEW w notowaniach.
- **Kronika** – historia miejsca #1 (kto, od kiedy, ile dni) i fakty o kanale.

## Jak używać

- **Otwórz lokalnie:** `index.html`. **Odśwież ręcznie:** `update.cmd` (log w `logs\last-run.log`).
- **Automat:** GitHub Actions (`.github/workflows/update.yml`) co godzinę pobiera dane przez YouTube Data API v3
  (sekret `YT_API_KEY`), zapisuje `history.json` i publikuje stronę na GitHub Pages.

## Konfiguracja (`config.json`)

| Klucz | Znaczenie |
|---|---|
| `channelUrl` | adres kanału |
| `nowStartVideoId` / `nowStartVideoTitle` | film, od którego liczy się „Top 10 Now” |
| `nowSize` / `allTimeSize` / `latestSize` / `risingSize` | rozmiary list |
| `excludeKeyword` | słowo w tytule wykluczające z notowań (puste = brak) |
| `excludeArtists` | wykonawcy spoza wytwórni do pominięcia |

Klucz API lokalnie: plik `.ytkey` (poza gitem) albo zmienna `YT_API_KEY`.
