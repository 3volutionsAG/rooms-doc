---
title: "Fehlermeldung zur Synchronisation erstellen"
linkTitle: "Fehlermeldung zur Synchronisation erstellen"
weight: 100
description: 'Sollte die Synchronisation fehlschlagen, ist es hilfreich eine entsprechende Fehlermeldung zu erhalten.'
---
<p></br></p>

1. Öffnen Sie **3V ROOMS**.
2. Klicken Sie in der Menüzeile auf **Einstellungen**.
3. Wählen Sie im Sidepanel **Basisdaten für Ressourcen**.
4. Öffnen Sie das Subpanel **Standorte**.
5. Markieren Sie in der Standort-Hierachie den gewünschten **Standort**, es kann auch eine Obergruppe gewählt werden.
6. Klicken Sie auf den **Bleistift** rechts neben der Standortbezeichnung.
7. Wechseln Sie in den Reiter **Notifikationen**.
    {{< imgproc NotifikationErstellen Resize "960x" >}} {{< /imgproc >}}
8. Klicken Sie auf die Schaltfläche **Hinzufügen**. Es öffnet sich ein Eingabefenster.
9. Nehmen Sie folgende Einstellungen vor:
   1.  **Notifikationstyp**: Synchronisation - Fehlermeldung
   2.  **Titel**: ROOMS Synchronisation fehlgeschlagen
   3.  **Text**:</br>

        Die ROOMS Buchung konnte mit Outlook nicht richtig synchronisiert werden und wurde möglicherweise zurückgesetzt.

        [Reservation.Titel] </br>
        [ReservationVorlaufbeginnDatum], [Reservation.VorlaufbeginnZeit] - [Reservation.NachlaufendeZeit]

        Link zur ROOMS Buchung

        Informationen zur fehlgeschlagenen Synchronisation: </br>
        [SynchronisationValidierung] </br>
        [Validierungsfehler] </br>
        [/SynchronisationValildierung]

        {{< imgproc NotifikationErstellen_Text Resize "960x" >}} {{< /imgproc >}}

10. Klicken Sie auf **Speichern**
