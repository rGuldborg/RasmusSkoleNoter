---
tagstags: 
---
Vi laver en simpel GUI med ét inputfelt, én knap og én funktion, der ændrer baggrundsfarven.

---

## 1. Opret projekt i IntelliJ

- Nyt JavaScript-projekt, navngiv med små bogstaver
    
- Slet `package.json` (Azure kan brokke sig)
    
- Projektet skal indeholde: `index.html` og en `js` folder til JavaScript-filer
    

---

## 2. HTML: index.html

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
 <meta charset="UTF-8">
 <title>Set background color</title>
</head>
<body>
<h1>Ready for JavaScript</h1>
<input type="text" class="inpColor" />
<button class="pbSetColor">Push Me</button>
<script src="js/setbackground.js"></script>
</body>
</html>
```


**Forklaring:**

- `input` → skriver farve
    
- `button` → trigger funktionen
    
- `script src="js/setbackground.js"` → linker JavaScript-filen
    

---

## 3. JavaScript: find elementer

```JavaScript
let inp = document.querySelector(".inpColor");
console.log(inp);

let pbCol = document.querySelector(".pbSetColor");
console.log(pbCol);
pbCol.textContent = "Tryk mig for set color";

let bdy = document.querySelector("body");
console.log(bdy);
```


**Forklaring:**

- `document.querySelector` finder HTML-elementer
    
- `textContent` ændrer knap-tekst
    
- `console.log` til debug
    

---

## 4. Funktion til at ændre baggrundsfarve

```JavaScript
function setBackgroundColor() {
    let col = inp.value;
    console.log(col);
    bdy.style.backgroundColor = col;
}
```


**Forklaring:**

- Henter input-værdi
    
- Ændrer `body` baggrundsfarve
    

---

## 5. Tilknyt funktion til knappen

```JavaScript
pbCol.addEventListener('click', setBackgroundColor);
```


**Forklaring:**

- Event listener på knappen
    
- Event: `click` → kører `setBackgroundColor`
    

---

## 6. CSS: style.css

```CSS
h1 {
    background-color: red;
}
```


**Forklaring:**

- Ændrer midlertidigt baggrundsfarve på overskrift
    
- Kan bruges til at teste farver før JavaScript
    

---

## 7. Event listener på tastatur

```JavaScript
document.addEventListener('keyup', setBackgroundColor);
```


**Forklaring:**

- Hver gang en tast slippes, opdateres baggrundsfarven
    
- Event `keyup` vs `keydown` (forskellen kan testes)
    

---

## 8. Tilføj inputfelt til at vise valgt farve

```HTML
<br>
<input type="text" class="inpColorValue" />
```


```JavaScript
let inpColorValue = document.querySelector(".inpColorValue");

function setBackgroundColor() {
    let col = inp.value;
    bdy.style.backgroundColor = col;
    inpColorValue.value = bdy.style.backgroundColor;
}
```


**Forklaring:**

- Viser farven, som er valgt, i et separat inputfelt
    

---

## 9. Tilføj color picker

```HTML
<br>
<input type="color" id="inpColorPicker" />
```


```JavaScript
const inpColorPicker = document.getElementById("inpColorPicker");

function useColorPicker() {
    let col = inpColorPicker.value;
    bdy.style.backgroundColor = col;
}
inpColorPicker.addEventListener("input", useColorPicker);
```


**Forklaring:**

- `input type="color"` giver farvevælger
    
- Event listener: `input` → kører `useColorPicker` når farve ændres
    

---

## 10. Manipulér p-tags

```HTML
<p>Sæt noget tekst her</p>
<p>Sæt mere tekst her</p>
```


```JavaScript
const pTags = Array.from(document.getElementsByTagName('p'));

function increaseFont(element) {
    element.style.fontSize = 10 + 'px';
    console.log(element.style.fontSize);
}

pTags.forEach(increaseFont);
```


**Forklaring:**

- `HTMLCollection` konverteres til Array
    
- Forøger font-size på alle p-tags
    
- Kan tilføje knapper til + / − font-size
