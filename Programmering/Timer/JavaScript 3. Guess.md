Vi skal kode et simpelt spil, hvor spilleren skal gætte et tal mellem 1 og 20.

---

## 1. Projektopsætning

- Opret nyt JavaScript-projekt i IntelliJ
    
- Hent `index.html` fra Fronter
    
- Tilføj `style.css` for at style spillet
    
- Tilføj `guessnumber.js` i en `js` folder
    

---

## 2. Få fat i HTML-elementer

```JavaScript
console.log("jeg er i guessnumber");

const lblMessage = document.querySelector(".message");
console.log(lblMessage);
console.log(lblMessage.textContent);

const lblNumber = document.querySelector(".number");
console.log(lblNumber);

const lblScore = document.querySelector(".score");
console.log(lblScore);
```


- Kontroller i browserens Console, at vi har fat i de rigtige elementer
    

---

## 3. Inputfelt til gæt

```JavaScript
const inpGuess = document.querySelector(".guess");
console.log(inpGuess);

// Eksempel på at sætte og læse værdi
inpGuess.value = 10;
let ii = inpGuess.value;
ii;

// Ændre fontSize
inpGuess.style.fontSize = '18px';
inpGuess.style.fontSize = '28px';

// Fjern style
inpGuess.className = '';
```


- Tryk F5 for at se at style kommer tilbage
    

---

## 4. Globalt hemmeligt tal

```JavaScript
// Hemmeligt nummer mellem 1 og 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;

// Test visning (fjern senere)
lblNumber.textContent = secretNumber;
```


- `Math.random()` giver et tal mellem 0 og 1
    
- `Math.trunc(Math.random() * 20) + 1` giver 1–20
    

---

## 5. Score

```JavaScript
let startScore = 20;
```


- Score tælles ned, hver gang spilleren gætter forkert
    

---

## 6. Test-funktion for gæt

```JavaScript
function testNumber() {
    console.log("testNumber");

    const guess = Number(inpGuess.value);
    console.log(guess);

    if (!guess) {
        lblMessage.textContent = "?? No Number";
    } else if (guess === secretNumber) {
        lblMessage.textContent = "🎉 Du har gættet tallet!";
        youWin();
    } else if (guess > secretNumber) {
        lblMessage.textContent = "Too high";
        startScore--;
        lblScore.textContent = startScore;
    } else if (guess < secretNumber) {
        lblMessage.textContent = "Too low";
        startScore--;
        lblScore.textContent = startScore;
    }
}
```


- `Number(inpGuess.value)` konverterer input fra string til tal
    
- `lblMessage.textContent` opdaterer besked til spilleren
    
- Score opdateres hver gang gættet er forkert
    

---

## 7. Knap til at tjekke gæt

```JavaScript
const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", testNumber);
```


- Knytter `testNumber`-funktionen til Check-knappen
    

---

## 8. Funktion ved gevinst

```JavaScript
function youWin() {
    document.body.style.backgroundColor = "green";
    lblNumber.textContent = secretNumber;
}
```


- Ændrer baggrund til grøn ved korrekt gæt
    
- Viser det hemmelige nummer
    

---

## 9. Opsummering

- HTML-elementer kan manipuleres direkte via `querySelector`
    
- Inputværdi læses via `.value` og konverteres med `Number()`
    
- Random tal genereres med `Math.random()`
    
- Overvåg spillet med score og beskeder
    
- EventListeners bruges til at knytte funktioner til knapper
