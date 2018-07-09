# User Guide für das eBay OAuth2 account management Plugin

<div class="container-toc"></div>

## Konten freischalten und bearbeiten

Im Menü **System » Märkte » eBay » OAuth2** schalten Sie neue Konten für eBay frei. Dafür benötigen Sie die Zugangsdaten bestehend aus Nutzername und Passwort. Wenn Sie Ihre eBay-Zugangsdaten ändern, müssen Sie das Konto aktualisieren und synchronisieren. Sie können mit plentymarkets mehrere eBay-Konten verwalten. Um ein oder mehrere Konten hinzuzufügen, gehen Sie folgendermaßen vor:

##### Neues Konto freischalten:

 1. Öffnen Sie das Menü **System » Märkte » eBay » OAuth2**.
 2. Wählen Sie **Production-Konto hinzufügen** für die Umgebung, wenn das neue Konto kein Testumgebungskonto sein soll. <br>
 → Sie werden zu eBay weitergeleitet und müssen dort Ihre Daten authentifizieren. <br>
 → Das Konto wird im Menü **OAuth2** angezeigt.
 
 Um ein Testumgebungskonto freizuschalten, wählen Sie **Sanbox-Koto hinzufügen**.
    
Bei der Freischaltung oder Aktualisierung eines Kontos wird ein Token erzeugt, der 18 Monate gültig ist. Nach Ablauf der Gültigkeit erfolgt keine automatische Warnung. Der Schlüssel verliert zudem seine Gültigkeit, wenn Sie Ihre Zugangsdaten bei eBay ändern.

Im Menü **System » Märkte » eBay » OAuth2** haben Sie die Möglichkeit Konten umzubenennen, zu aktualisieren oder zu löschen. Sie müssen z.B. das Konto in plentymarkets umbenennen, wenn Sie bei eBay Ihren Mitgliedsnamen geändert haben.


## Erforderliche Berechtigungen für das eBay OAuth2-Plugin

Damit Benutzer der Benutzerklasse **Variabel** das **eBay OAuth2-Plugin** nutzen können, sind Menüberechtigungen und REST-API Berechtigungen erforderlich.

Berechtigungen werden im Menü **System » Einstellungen » Benutzer » Konten » Benutzerkonto » Tab: Berechtigung** zugewiesen.

→ **Tipp**: Nutzen Sie die Filterfunktion, um nach Benutzern der Benutzerklasse **Variabel** zu suchen. Wählen Sie dazu im **Tab: Filter** in der Dropdown-Liste **Klasse** den Filter **Variabel** aus. Klicken Sie auf **Suchen**.

#### Erforderliche Berechtigungen für das eBay OAuth2-Plugin

Die folgenden Menüberechtigungen und REST-API Berechtigungen sind für variable Benutzerklassen erforderlich:

#### **Erforderliche Menüberechtigungen:**
- Einstellungen » Märkte » eBay »**OAuth2**

#### Menüberechtigungen zuweisen:

1. Öffnen Sie das Menü **System » Einstellungen » Benutzer » Konten**.
2. Klicken Sie auf den **Benutzer**, dem sie Berechtigungen zuweisen wollen.
3. Wechseln Sie zu **Tab: Berechtigung » Tab: Menü**.
4. Setzen Sie ein Häkchen neben den benötigten Berechtigungen.
5. **Speichern** Sie die Einstellungen.

#### **Erforderliche REST-API Berechtigungen:**
- Märkte » **Zugangsdaten** und alle untergeordneten Berechtigungen
- Märkte » eBay » **Marktplatz** » **Marktplatz anzeigen**

#### REST-API Berechtigungen zuweisen:

1. Öffnen Sie das Menü **System » Einstellungen » Benutzer » Konten**.
2. Klicken Sie auf den **Benutzer**, dem sie Berechtigungen zuweisen wollen.
3. Wechseln Sie zu **Tab: Berechtigung » Tab: REST-API**.
4. Setzen Sie ein Häkchen neben den benötigten Berechtigungen.
5. **Speichern** Sie die Einstellungen.    


## Lizenz

Das gesamte Projekt unterliegt der GNU AFFERO GENERAL PUBLIC LICENSE – weitere Informationen finden Sie in der [LICENSE.md](https://github.com/plentymarkets/plugin-etsy/blob/master/LICENSE.md).
