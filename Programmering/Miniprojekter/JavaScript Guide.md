## 1. Variabler og konstant

```javascript
// Konstant
const pi = 3.14;

// Variabel der kan ændres
let navn = "Peter";
navn = "Anna";
```

---

## 2. Datatyper

```javascript
let number = 10;      // Number
let text = "Hej";     // String
let flag = true;      // Boolean
let nothing = null;   // Null
let unknown;          // Undefined
```

---

## 3. Konsol og Debug

```javascript
console.log("Hej verden!");
console.error("Der skete en fejl!");
console.warn("Advarsel!");
```

---

## 4. Operatorer

```javascript
// Arithmetic
let sum = 5 + 3;
let diff = 5 - 3;
let prod = 5 * 3;
let div = 10 / 2;
let mod = 10 % 3;

// Comparison
console.log(5 === 5); // true
console.log(5 !== 3); // true
console.log(5 > 3);   // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false
```

---

## 5. If / Else / Switch

```javascript
let number = 7;

if(number > 5) {
  console.log("Større end 5");
} else {
  console.log("5 eller mindre");
}

switch(number) {
  case 1:
    console.log("En");
    break;
  case 2:
    console.log("To");
    break;
  default:
    console.log("Andet");
}
```

---

## 6. Loops

```javascript
// For loop
for(let i = 0; i < 5; i++) {
    console.log(i);
}

// While loop
let j = 0;
while(j < 5) {
    console.log(j);
    j++;
}

// For...of loop
const arr = [10, 20, 30];
for(const val of arr) {
    console.log(val);
}

// For...in loop (på objekter)
const obj = {a:1, b:2};
for(const key in obj) {
    console.log(key, obj[key]);
}
```

---

## 7. Funktioner

```javascript
// Simpel funktion
function hej(navn) {
    console.log("Hej " + navn);
}
hej("Peter");

// Arrow function
const hej2 = (navn) => console.log(`Hej ${navn}`);

// Function med return
function add(a, b) {
    return a + b;
}
let sum = add(3,4);

// Ternary operator
let age = 18;
let status = age >= 18 ? "Voksen" : "Barn";
```

---

## 8. DOM-manipulation

```javascript
// Find elementer
const inp = document.querySelector(".inpColor");
const pbCol = document.querySelector(".pbSetColor");
const bdy = document.querySelector("body");

// Ændre indhold og styling
pbCol.textContent = "Tryk mig for set color";
bdy.style.backgroundColor = "pink";

// Oprette nye elementer
const el = document.createElement("p");
el.textContent = "Hej fra JS";
document.body.appendChild(el);

// Manipulere flere elementer
const pTags = Array.from(document.getElementsByTagName('p'));
pTags.forEach(p => p.style.fontSize = "20px");
```

---

## 9. Events

```javascript
// Click event
pbCol.addEventListener("click", () => {
    bdy.style.backgroundColor = inp.value;
});

// Keyboard events
document.addEventListener('keyup', () => {
    console.log("Tast sluppet");
});

// Input event
const inpColorPicker = document.getElementById("inpColorPicker");
inpColorPicker.addEventListener("input", () => {
    bdy.style.backgroundColor = inpColorPicker.value;
});

// Event delegation / bubbling
document.body.addEventListener("click", (e) => {
    console.log("Clicked:", e.target);
});
```

---

## 10. Arrays og objekter

```javascript
// Simple array
const colArray = ["red", "green", "blue"];
colArray.forEach(col => console.log(col));

// 2D array
const colArray2 = [["red","#ff0000"], ["green","#00ff00"]];
colArray2.forEach(item => console.log(item[0], item[1]));

// Objects
const person = {name:"Peter", age:25};
console.log(person.name);

// Array af objekter
const colorObjects = [
    {name:"red", hex:"#ff0000", id:1},
    {name:"green", hex:"#00ff00", id:2}
];
colorObjects.forEach(obj => console.log(obj.name, obj.hex));
```

---

## 11. Simple spil og random tal

```javascript
// Hemmeligt nummer mellem 1 og 20
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// Eksempel på gæt
function testNumber(guess) {
    if(!guess) {
        console.log("Ingen nummer");
    } else if(guess === secretNumber) {
        console.log("🎉 Du har gættet!");
        document.body.style.backgroundColor = "green";
    } else {
        console.log(guess > secretNumber ? "Too high" : "Too low");
        score--;
        console.log("Score:", score);
    }
}
```

---

## 12. Styling via className / classList

```javascript
const inpElement = document.getElementById("elementName");
const inpStyleName = document.getElementById("styleName");
const pbSetStyle = document.getElementById("pbSetStyle");

// Overskriv class
pbSetStyle.addEventListener("click", () => {
    const elm = document.querySelector(`.${inpElement.value}`);
    elm.className = inpStyleName.value;
});

// Tilføj uden at overskrive
pbSetStyle.addEventListener("click", () => {
    const elm = document.querySelector(`.${inpElement.value}`);
    elm.classList.add(inpStyleName.value);
});

// Tilføj til alle elementer af en type
pbSetStyle.addEventListener("click", () => {
    const tagName = inpElement.value;
    const styleName = inpStyleName.value;
    const elements = document.getElementsByTagName(tagName);
    Array.from(elements).forEach(el => el.classList.add(styleName));
});
```

---

## 13. Error handling

```javascript
try {
    riskyFunction();
} catch(error) {
    console.error("Fejl:", error);
}
```
