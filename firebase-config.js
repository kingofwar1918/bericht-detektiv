/* ==========================================================================
   Bericht-Detektiv: Konfiguration (PLATZHALTER)

   Diese Datei liegt neben index.html. Solange hier «DEIN-PROJEKT» steht,
   läuft die App nur im Einzelmodus «Allein üben» (ohne Raum, ohne LP-Ansicht).

   So füllst du sie aus (Einzelheiten in README_LP.md, Schritt 2-4):
   1. Firebase-Konsole → Projekteinstellungen → Allgemein → «Meine Apps»
      → Web-App hinzufügen → den Wert «databaseURL» kopieren.
   2. Unten bei «datenbank» einsetzen.
   3. «lpPin» ändern (4-8 Ziffern). Der PIN schützt nur die Oberfläche
      der LP-Ansicht, nicht die Daten (siehe README_LP.md, Datenschutz).

   Ein apiKey wird NICHT gebraucht: Die App nutzt die Realtime Database
   über die REST-Schnittstelle ohne Anmeldung (Stufe 1).
   ========================================================================== */

window.BD_KONFIG = {
  // Beispiel: "https://bericht-detektiv-1a2b3-default-rtdb.europe-west1.firebasedatabase.app"
  datenbank: "https://bericht-detektiv-kk9-default-rtdb.europe-west1.firebasedatabase.app",

  // Oberster Pfad in der Datenbank. Muss zu database.rules.json passen.
  projekt: "bericht-detektiv",

  // PIN für die LP-Ansicht. VOR DER LEKTION ÄNDERN.
  lpPin: "1918",

  // Abgleichtakt in Millisekunden (4000 = alle 4 Sekunden). Nicht kürzer stellen.
  taktMs: 4000,

  // Rangliste (Top 3 nach Punkten) in der LP-Ansicht anbieten? false = nur «Klassenziel»
  // (ohne Namen und Plätze). Erst auf true stellen, wenn die LP eine Rangliste ausdrücklich will.
  ranglisteZeigen: false
};
