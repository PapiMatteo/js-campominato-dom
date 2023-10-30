## ESERCIZIO

**Consegna**
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

Generare una griglia di gioco quadrata in cui ogni cella contiene un numero compreso tra 1 e 100. 

Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe.

I numeri nella lista delle bombe non possono essere duplicati.
[23, 65, 1, 4,78,15,....];

In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina, altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.

La partita termina quando il giocatore clicca su una bomba o raggiunge il numero massimo possibile di numeri consentiti.
Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.


**Bonus**

1. Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
    - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
    - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
    - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;

2. quando si clicca su una bomba e finisce la partita, evitare che si possa cliccare su altre celle

3. quando si clicca su una bomba e finisce la partita, il software scopre tutte le bombe nascoste

### SOLUZIONE

#### Dati
1. Ottenere l'elemento HTML del bottone

#### Logica

1. Al click del bottone 
    - Prelevo dal select la difficolta' che definisce il numero di celle da creare
    - Genero le 16 bombe: creo array di 16 numeri casuali non duplicati nel range della difficolta' (100/81/49)
    - Definire numero massimo di tentativi : 100 / 81 / 49 - 16
    - Ripulire la griglia precedente
    - Mostrare la griglia
    - Creare le celle in base alla difficolta'
        - Imposto dimensioni celle in base alla difficolta'
        - Popolare cella con il numero
        - Aggiungere event listener al click della cella
        - Aggiungere la cella alla griglia
    

2. Al click della cella 

    - Leggo numero della cella cliccata
    - SE il numero cliccato e' nell'array delle bombe

            cella diventa rossa 
            termino partita e utente perde

        ALTRIMENTI 

            cella diventa azzurra 
            
            SE la cella non e' mai stata cliccata 

                aggiungo il numero all'array di numeri non bombe

            SE la lunghezza dell'array di numeri non bombe e' uguale al numero massimo di tentativi 

                fine gioco
        