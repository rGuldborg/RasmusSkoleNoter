## 1. Oprettelse
Før oprettelse af Javascript filen skal der laves en index.html fil
```Html
<!DOCTYPE html>  
<html lang="en">  
<head>  
    <meta charset="UTF-8">  
    <title>Title</title>  
</head>  
<body>  
<h1>Click Game</h1>  
<div id="score">Score: 0</div>  
<button id="start-btn">Start</button>  
<div id="game-container"></div>  
  
<script src="clickgame.js"></script>  
</body>  
</html>
```
	
Filen indeholder
	Div med id score
	Knap med id start-btn
	Div med id game-container
Derudover henter vi scriptet fra javascript filen vha.
	script med source fra clickgame.js

---
## 2. Import
For at importere disse funktioner fra html, opretter vi konstanter i scriptet
```Javascript
const gameContainer = document.getElementById("game-container");  
const scoreElement = document.getElementById("score");  
const startButton = document.getElementById("start-btn");
```

---
## 3. Spilvindue
Spilvinduet bliver defineret ved hjælp af stylingfunktioner fra css bilbiotek
```Javascript
gameContainer.style.width = "97vw";  
gameContainer.style.height = "90vh";  
gameContainer.style.position = "relative";  
gameContainer.style.border = "10px solid black";
```
	
Højde og bredde er sat til næsten at fylde hele sidens indhold

---
## 4. Variabler
For at holde overblik over spillets længde og funktioner oprettes der variabler på score, spawn af kasser og en konstant der fortæller os hvor mange kasser der kan være i det hele
```Javascript
let score = 0;  
let spawnCount = 0;  
const maxBoxes = 30;  
let intervalId;
```

---
## 5. Opdatering af score
Vi tilføjer en funktioner der opdaterer den grafiske visning af den nuværende score
```Javascript
function updateScore(points) {  
    score += points;  
    scoreElement.innerHTML = score;  
}
```
	
Senere bliver tilføjelsen af pointsystemet beskrevet. Score som grafisk bliver vist på skærmen ved hjælp af innerHTML opdateres efter points

---
## 6. Opret en kasse
Den nok vigtigste funktion i spillet er at oprette en kasse
```Javascript
function createBox() {  
    if (spawnCount >= maxBoxes) {  
        clearInterval(intervalId);  
        alert(`Spillet er slut, du ramte ${score}/${maxBoxes} boxe!`);  
        return;  
    }  
  
    spawnCount++;
```
	
Først laves der en if metode der fortæller scriptet at når alle kasser har været på skærmen, stoppes spillet. Den ved hvornår vi skal stoppe fra const Maxboxes = 30
	
```Javascript
const square = document.createElement("div");  
square.style.backgroundColor = "red";  
square.style.width = "100px";  
square.style.height = "100px";  
square.style.position = "absolute";  
square.style.top = Math.random() * (gameContainer.offsetHeight - 100) + "px";  
square.style.left = Math.random() * (gameContainer.offsetWidth - 100) + "px";
```
	
Vi definerer en konstant "square", vores kasse, ved at oprette vores div element fra HTML siden. Derefter bruger vi CSS styling til at definere kassens størrelse, farve, position og begrænse området den kan spawne i
	
```javascript
gameContainer.appendChild(square);  
square.addEventListener("click", function() {  
    square.remove();  
    updateScore(1);  
});
```
	
Vi tilføjer vores kasse (square) som et barn af gameContainter. Ved at bruge appendChild(Square) fortæller vi vores DOM at square, vores ene element, kan blive synligt i browseren inde i gameContainer, vores andeelement. Uden denne ville kasserne ikke dukker op på skærmen
	
Vi tilføjer et event "click", der fjerner kassen og giver +1 til score når de bliver trykket på
	
```Javascript
    setTimeout(() => {  
        square.remove();  
    }, 1000);  
}
```
	
Til sidst opretter vi en timeout for spawns af kassen. Efter et sekund fjernes kassen af sig selv.

---
## 7. Start spillet
Vi opretter en funktion der starter spillet
```Javascript
function startGame() {  
    startButton.remove();  
    createBox();  
    intervalId = setInterval(createBox, 1000);  
}
```
	
Når vi bruger funktioner fjerner den startknappen, opretter første kasse og laver en ny kasse hvert sekund. Her kalder vi  variablen intervalId. Den bruges i createBox funktionen før til at slutte spillet. Vi clearer altså spawns af kasse hvert sekund efter 30 af dem har været på skærmen
	
```Javascript
startButton.addEventListener("click", startGame);
```
	
Til sidst opretter vi et event for vores HTML knap, fortæller den at når den bliver trykket på, skal startGame funktionen gå igang.
