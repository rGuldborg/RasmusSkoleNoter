**Overloading** betyder, at man kan have flere metoder med **samme navn**, men med **forskellige parametre**. Java vælger den metode, som bedst matcher **argumenternes type og antal**.

---

## 1. Simple `out`-metoder

```Java
public static void out(String s) {
    System.out.println(s);
}

public static void main(String[] args) {
    out("Hej verden!");
}
```


---

### Overload med `int`

```Java
public static void out(int n) {
    System.out.println(n);
}

public static void main(String[] args) {
    out(5); // Kalder out(int)
}
```


---

### Overload med `Integer`

```Java
public static void out(Integer n) {
    System.out.println(n);
}

public static void main(String[] args) {
    out(10); // Kalder out(int)
    out(Integer.valueOf(10)); // Kalder out(Integer)
}
```


---

## 2. Konvertering mellem `String` og `Integer`

```Java
String s = "42";

// Primitive int
int n = Integer.parseInt(s);
out(n); // Kalder out(int)

// Wrapper Integer
Integer obj = Integer.valueOf(s);
out(obj); // Kalder out(Integer)
```


```Java
var x = Integer.parseInt("10");
var y = Integer.valueOf("20");
```


---

## 3. Bit-gymnastik

```Java
int n = 15;
out(Integer.toBinaryString(n)); // "1111"
```


---

## 4. Overload med `char` og `Class`

### Char

```Java
public static void out(char c) {
    System.out.println(c);
}

public static void main(String[] args) {
    out('a');         // Udskriver 'a'
    out((char) 97);   // Udskriver 'a'
}
```


### Class

```Java
public static void out(Class<?> cls) {
    System.out.println(cls.getName());
}

public static void main(String[] args) {
    out(Integer.class); // Udskriver "java.lang.Integer"
}
```


---

## 5. Loops og Unicode

```Java
for (int i = 0x4E00; i < 0x4E0A; i++) {
    out((char) i);
}
```


---

## 6. Checked vs Unchecked Exceptions

```Java
// Checked: skal håndteres med try/catch, fx IOException
// Unchecked: Runtime exceptions, fx NullPointerException
```


---

## 7. Tips fra IntelliJ

```Java
// Ctrl+Click på Integer åbner koden i JDK (java.lang)
// Alt+F1 -> Select In -> Project View -> se hvor klassen ligger under External Libraries
// Brug Inlay Hints – Types for at se variabeltyper til venstre
```


---

## 8. Opsummering

- Overloading gør koden mere fleksibel
    
- Java vælger metoden baseret på argumentets type
    
- Wrapper-klasser og primitive typer kan håndteres med separate overloads
    
- Introspektion med `Class`, konvertering med `parseInt/valueOf` og binærrepræsentation udvider mulighederne
