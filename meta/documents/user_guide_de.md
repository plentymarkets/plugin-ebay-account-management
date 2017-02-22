# User Guide für das eBay OAuth account management Plugin

<div class="container-toc"></div>

## Konten freischalten und bearbeiten

Im Menü **Einstellungen » Märkte » eBay » OAuth-Konten** schalten Sie neue Konten für eBay frei. Dafür benötigen Sie die Zugangsdaten bestehend aus Nutzername und Passwort. Wenn Sie Ihre eBay-Zugangsdaten ändern, müssen Sie das Konto aktualisieren und synchronisieren. Sie können mit plentymarkets mehrere eBay-Konten verwalten. Um ein oder mehrere Konten hinzuzufügen, gehen Sie folgendermaßen vor.

##### Neues Konto freischalten:

    1. Öffnen Sie das Menü **Einstellungen » Märkte » eBay » OAuth-Konten**.
    2. Wählen Sie ##Production## für die Umgebung, wenn das neue Konto kein Testumgebungskonto sein soll.
    3. Klicken Sie auf ##Neues Konto authentifizieren##.
    → Sie werden zu eBay weitergeleitet und müssen dort Ihre Daten authentifizieren.
    → Das Konto wird im Menü **OAuth-Konten** angezeigt.
    
Bei der Freischaltung oder Aktualisierung eines Kontos wird ein Token erzeugt, der 18 Monate gültig ist. Nach Ablauf der Gültigkeit erfolgt keine automatische Warnung. Der Schlüssel verliert zudem seine Gültigkeit, wenn Sie Ihre Zugangsdaten bei eBay ändern.

Im Menü **Einstellungen » Märkte » eBay » OAuth-Konten** haben Sie die Möglichkeit Konten umzubenennen oder zu löschen. Sie müssen z.B. das Konto in plentymarkets umbenennen, wenn Sie bei eBay Ihren Mitgliedsnamen geändert haben.    

## Lizenz

Das gesamte Projekt unterliegt der GNU AFFERO GENERAL PUBLIC LICENSE – weitere Informationen finden Sie in der [LICENSE.md](https://github.com/plentymarkets/plugin-etsy/blob/master/LICENSE.md).
