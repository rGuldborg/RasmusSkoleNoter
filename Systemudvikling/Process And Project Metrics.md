Metrics er **numeriske målinger**, der giver mulighed for **objektiv evaluering og sammenligning**.

---

## Hvorfor Metrics?

Metrics anvendes både til **processer** og **projekter**, men med forskellige formål:

- **Process Metrics:** Forbedre, hvordan hele organisationen arbejder med softwareprojekter.
    
- **Project Metrics:** Holde styr på et specifikt projekt – fremskridt, risiko og kvalitet.

![[image-9 1.png|700x518]]

---

## 1. Process Metrics

- **Strategisk niveau:** Ser på processerne i hele organisationen: krav, design, kode, test, implementering.
    
- Giver indsigt i softwareprocessernes dynamik og effektivitet.
    
- Formål: **Software Process Improvement (SPI)**, fx Lean, BPR.
    
- Eksempelspørgsmål: Arbejder vi på den mest effektive måde? Kan processer optimeres?
    

### Software Process Improvement

- Identifikation af ineffektive processer.
    
- Implementering af forbedringer.
    
- Overvågning af effekten af ændringer gennem metrics.
    
![[image-10.png|700x465]]
### Process Metrics Kategorier

- **Effektivitet:** Tid brugt per aktivitet.
    
- **Kvalitet:** Antal fejl pr. procesfase.
    
- **Produktivitet:** Output per person/time.
    
- **Sammenhæng:** Hvor godt integreres processer med hinanden?
    

---

## 2. Project Metrics

- **Taktisk niveau:** Fokus på specifikt projekt.
    
- Hjælper projektledelsen med at måle:
    
    - Risiko
        
    - Fremskridt
        
    - Kvalitet
        
- Formål: Sikre, at projektet følger plan, budget og deadlines.
    

### Typiske Project Metrics

- **Function-Oriented Metrics:** KLOC, Function Points (måler kompleksitet og størrelsen af arbejdet).
    ![[image-11.png]]

- **Object-Oriented Metrics:** Måling af klasser, metoder, arv, coupling.
    
    - Bemærk: Use Cases kan variere i størrelse – nogle beskriver flere scenarier i ét Use Case, andre i flere.
        ![[image-12.png]]

---

## 3. Måling af Kvalitet

- **Correctness (Rigtighed):** Programmet fungerer efter specifikation → Defekter/KLOC.
    
- **Maintainability (Vedligeholdelighed):** Hvor nemt programmet kan ændres → MTTC (Mean-Time-to-Change), tid til analyse, design, implementering, test og distribution.
    
- **Integrity (Integritet):** Hvor sikkert programmet er mod eksterne angreb → Security metrics.
    
- **Usability (Brugervenlighed):** Hvor nemt programmet er at anvende → GUI, Gestalt-principper, intuitivitet.

![[image-13.png|700x486]]
