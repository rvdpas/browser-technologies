# browser-technologies

## Review op Funda App

### Afbeeldingen
Bij het uitzetten van de afbeeldingen komt alleen de tekst van het object terug. Er missen alt tags, dus de gebruiker weet ook niet dat er een afbeelding stond. Door een goede omschrijving toe te voegen kun je toch beschrijven hoe een huis eruit ziet.

![Afbeeldingen](https://github.com/rvdpas/browser-technologies/blob/master/afbeeldingen.png)

### Custom fonts
Het font dat gebruikt wordt is een google font. Op het moment dat custom fonts worden uitgezet dan valt hij terug op een sans-serif font. Je kan meerdere fonts nog toevoegen die meer op het custom font lijkt.

![Custom fonts](https://github.com/rvdpas/browser-technologies/blob/master/font.png)

### Kleur
Qua kleur is de pagina nog goed bruikbaar. Op de hover styles zouden nog underlines kunnen worden toegevoegd, zodat de gebruiker niet van kleur afhankelijk is.

![Kleur](https://github.com/rvdpas/browser-technologies/blob/master/kleur.png)

### Javascript
Zonder Javascript werkt de app helemaal niet meer, aangezien hij op basis van Javascript de data ophaalt.

### Muis/trackpad
Op het moment dat iemand niet beschikt over het gebruik van een muis of trackpad is er door middel van tabjes door te pagina te navigeren. De focus staat is echter wel minimalistisch en mag er wat meer uitspringen, zodat de gebruiker duidelijker weet waar hij zit.

![Muis/trackpad](https://github.com/rvdpas/browser-technologies/blob/master/mousepad.png)

### Cookies, Localstorage
Er is geen gebruik gemaakt van deze functionaliteiten in deze app.

## Device lab
Ik heb de funda applicatie uitgebreid getest op het devicelab en onderstaande punten vielen mij op.

![device lab](https://github.com/rvdpas/browser-technologies/blob/master/device-lab.jpg)

![device lab](https://github.com/rvdpas/browser-technologies/blob/master/device-lab-left.jpg)

![device lab](https://github.com/rvdpas/browser-technologies/blob/master/device-lab-right.jpg)

Elk apparaat gaf dezelfde ervaring qua uiterlijk van de applicatie. Op IOS apparaten kregen de knoppen een iets andere vorm en de kleuren verschilde een beetje met het gemiddelde apparaat. Het enige echte probleem wat er verbeterd moet worden is het opvragen van de data van Funda. Dit gebeurd via een http request en dat werkt prima lokaal. Op het moment dat hij op een live link komt moet de verbinding een https zijn om verbinding te kunnen krijgen. Op de foto's is het een http verbinding en op 2 telefoons werkte deze connectie wel.

## Screen reader
De applicatie is door de screen reader ChromeVox gegaan. Dit is een chrome plugin die door je pagina loopt als een screen reader. De volgend punten vielen mij op
- Hij slaat de Kop over waardoor je gelijk bij de option velden komt. Hierdoor is het niet duidelijk waarvoor je de optie velden invoerd. Dit is eenvoudig op te lossen door een tabindex toe te voegen.
- Je kan niet door de huizen heen tabben. Dit komt omdat het momenteel allemaal losse artikelen zijn. Dit zouden a tags moeten worden zodat je ook naar de detailpagina kan gaan. Als het linkjes zijn geworden dan zijn ze wel beschikbaar voor de screen reader.
