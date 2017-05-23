# Browser Technologies Grilled Cheese Sandwich shoppinglist

## Introduction

Tijdens de Minor Web Development van de Hva kreeg ik het vak Browser Technologies. In dit vak heb ik uitleg gekregen over het bouwen van goede en toegankelijke websites. Dit doen we door middel van Progressive Enhancement, Feature Detection en het gebruik van fallbacks.

### Progressive Enhancement
Progressive Enhancement is het opbouwen van je website door middel van het gebruik van lagen. Je kijkt eerst wat de gebruiker echt nodig heeft om de applicatie of website te kunnen ontwerpen. Voorheen dacht ik altijd dat dit alleen uit puur Html bestond, maar dat hoeft niet persé het geval te zijn. Door iedere keer een laag toe te voegen verbeter je de gebruikerservaring door het toevoegen van nieuwe en praktische functionaliteiten. 

### Feature Detection
Feature Detection gaat over de beschikbare elementen die hebt per browser en apparaat. Met feature detection kun je nieuwe functies goed gebruiken in de browsers die het ondersteuenen, maar het is wel van belang dat mensen die via een browser kijken die het niet ondersteund er een goed alternatief is. Dit wil niet zeggen dat het precies hetzelfde moet doen, maar de ervaring moet er niet minder door worden.  

### Fallback
Fallback is een soort vangnet als een browser of apparaat een bepaalde functie niet ondersteund. Zo kunnen mensen met opzet hun Javascript hebben uitgezet en als jouw applicatie of website daardoor bepaalde functionaliteiten niet kan uitvoeren, dan moet je daar een Fallback voor hebben. Een fallback zorgt er dus voor dat als de webdeveloper niet dezelfde functionaliteit kan bieden in de gebruiker zijn browser dat hij daar een alternatief voor maakt. Het web is tenslotte voor iedereen en zo zouden we ook moeten bouwen.

### Opdracht
Maak een demo op basis van een use case. Zorg dat alle gebruikers, met alle browsers, in iedere context minimaal de core functionaliteit te zien/horen/voelen krijgen. Bouw je demo in 3 lagen, volgens het principe van Progressive Enhancement. Gebruik als enhanced feature een (hippe, innovatieve, vooruitstrevende) Browser Technologie die je gaat onderzoeken op functionaliteit, toegankelijkheid en (browser) ondersteuning.

### User Case
De gebruiker wil een boodschappenlijstje kunnen samenstellen om een tosti te kunnen maken.

### Drag and drop support
[drag and drop](https://github.com/rvdpas/browser-technologies/blob/master/final/public/images/drag-and-drop-support.png "drag and drop")

### usage of HTML5 elements
Older browsers don't know how to handle these elements, so with a small bit of code we can give them a good direction of what we expect.
```
header, section, footer, aside, nav, main, article, figure {
    display: block; 
}
```

The earlier version of Internet Explorer don't support the usage of html5 elements. There are three options i'm going to suggest. The first one is the use of div's instead of html5 elements. The second one is creating them with Javascript. This only works for ie 8 and above.
```
<script type="text/javascript">
    document.createElement('header');
    document.createElement('nav');
    document.createElement('menu');
    document.createElement('section');
    document.createElement('article');
    document.createElement('aside');
    document.createElement('footer');
</script>
```

And the last one is the use of the librairy HTML5 Shiv. This librairy is placed in the head after all the stylesheets and makes sure that you can use the html5 elements in IE version 6-9.

```
<!--[if lt IE 9]>
    <script src="bower_components/html5shiv/dist/html5shiv.js"></script>
<![endif]-->
```

sources: 
* [stackoverflow](https://stackoverflow.com/questions/289225/does-internet-explorer-8-support-html-5)
* [w3schools](https://www.w3schools.com/html/html5_browsers.asp)


### SVG problem
Internet Explorer 9 and lower don't support svg's. I've changed the original images with png's. A second solution could have been the implementation a fallback image. It would have looked something like this:
```
 <!--[if lte IE 8]><img src="image.png"><![endif]-->
 ```

### e.preventdefault
Internet explorer doesn't support the preventDefault function. Instead you can use:
```
event.returnValue = false;
```
This will still give an error, so if we check first if it exists and then use the above fallback it works:

```
event.preventDefault ? event.preventDefault() : (event.returnValue = false);
```

source: [preventDefault](https://stackoverflow.com/questions/1000597/event-preventdefault-function-not-working-in-ie)

### forEach
ForEach doens't work for internet explorer and needs to fallback on a normal for loop.

### Disabled Javascript
The events to add to the shopping list is build server side. So if the javascript is disabled, the application is still useful.

### Offline page
The service worker caches the page and the styles of the application. 

### wishlist
* Een winkelmandje(icoon) maken, zodat de gebruiker z'n boodschappen er in kan slepen door middel van drag & drop.
* Add a real shopping api, so the user can relate to the list in his local supermarket and have the same price range. 
* Individual removal of items.
* Give user the choice to pick own item by searching for them.

## Live version
[Live version](https://rvdpas.github.io/minor/browser-technologies/final/index.html)
