# HTML 5

## Intesazione pagina HTML iniziale

```HTML
<!DOCTYPE html> <!-- definisco HTML5 -->
<html lang="it"> <!-- definisco lingua -->
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <!-- adattabile in base alla misura del device -->
    <title>Nome file</title>
    <link rel="stylesheet" href="percorso file.css"> <!-- link con css -->
     <script src="file.js" defer ></script> <!-- includi file js nel head-->
    
  </head>
  <body>
    <header>
        <h1>Introduzione pagina</h1>
    </header>

    <main>
        <p>Corpo della pagina</p>
    </main>

    <footer>
        <p>Fine pagina</p>
    </footer>

    <script src="file.js"></script> <!-- includi file js -->
  </body>
</html>
```

### Struttura semantica ->

un oggeto / riferimento ha la spiegazione di cosa fa ->
elementi che riguardano quell'argomento

## tag introdotti con HTML 5

```HTML

<header> <!-- intestazione pagina o di una sezione -->
</header>

<footer> <!-- chiusura di una pagina o di una sezione -->
    <p>>&copy; 2023 il mio sito</p>
    <p>Benvenuto nel sito</p>
</footer>

<nav> <!--barra dei menu -->
    <ul> <!-- elenco puntato non ordinato -->
        <li> <!-- liste -->
            <a href="prenotazione-volo.html" class="button">Prenotazione Volo</a> <!-- esempio di link -->
			<a href="prenotazione-treno.html" class="button">Prenotazione Treno</a>
			<a href="prenotazione-crociera.html" class="button">Prenotazione Crociera</a>
			</div>
        </li>
    </ul>
</nav>

<section> <!--sezioni-->
    <h2>Intestazione </h2>
    <p>Testo</p>
    <img src="percorso immagine">
</section>

<article>
</article>

<video>
</video>

<ol> <!-- lista ordinata -->
    <!-- elementi della lista -->
    <li>primo elelemnto </li>
    <li>secondo elemento</li>
</ol>

<ul> <!-- lista non ordinata -->
    <!-- elementi della lista -->
    <li>primo elelemnto </li>
    <li>secondo elemento</li>
</ul>

<link rel="stylesheet" href="style.css"> <!-- link  collegamento CSS nel HTML -->
```

# CSS 

Esempio di un Foglio di stile di base 

```CSS
.intestazione {
  color: darkblue; /* colore o nome o esadecimale o Rgb */
  font-size: 24px; /* misura in em o px 
  px statica e em si adatta in base al device*/
}

#testo {
  font-size: 16px;
  color: grey;
}

.sezione {
  background-color: lightskyblue; /* colore sfondo */
  padding: 2em; /* spazio dalle righe */
  width: 80%; /* altezza */
  height: 90%; /* largezza */
  color: red; /* colore testo */
}

.sezione, /* entrambi una questi opzioni */
p {
  color: lightgrey; 
  font-size: 1.5em;
}
```