Metrics er **numeriske målinger**, som gør det muligt at foretage **objektive evalueringer og sammenligninger** af software, processer og projekter.

---

## Hvorfor Metrics?

Metrics anvendes til at få indsigt i **effektivitet, kvalitet og fremskridt** på tre niveauer:

### 1. Process Metrics (Proces-metrics)

- Anvendes på **organisationsniveau**: krav, design, kode, test, implementering.
    
- Formål: evaluere effektiviteten af processer.
    
- Eksempel: Lean/BPR – arbejder vi på den mest effektive måde? Kan processer forbedres?
    

### 2. Project Metrics (Projekt-metrics)

- Anvendes på **projektniveau**: krav, design, kode, test, implementering.
    
- Formål: måle risiko, fremskridt og kvalitet i projektet.
    
- Eksempel: er projektet på sporet eller forsinket?
    

### 3. Product Metrics (Produkt-metrics)

- Anvendes på **produktniveau**: kode, kravspecifikation, produktionssoftware, design-dokumentation, risikovurdering.
    
- Formål: identificere fejl, mangler og vurdere designstrategier.
    
- Eksempel: fejl pr. KLOC, kompleksitet af moduler.
    

---

## Grundbegreber

- **Measure** → Hvad vil vi måle?
    
- **Metric** → Den konkrete værdi af målingen.
    
- **Indicator** → Kombination af metrics, som fortæller noget om produkt eller proces.
    

---

## Måleproces

1. Definér mål for målingen (**Goal-Oriented Software Measurement**).
    
2. Vælg passende metrics.
    
3. Indsaml data.
    
4. Evaluer resultater.
    
5. Brug informationen til at forbedre produkt, projekt eller proces.
    
![[image-8 1.png|700x895]]
### Kendetegn ved effektive metrics:

- Objektive
    
- Repeterbare
    
- Relevante for målet
    
- Let at forstå
![[image-7 1.png|700x696]]

---

## Product Metrics

### 1. Size Metrics

- **Function Points (FP)** → måler kompleksitet ud fra funktionalitet.
    
    - Subjektiv vurdering afhængig af erfaring.
        
- **KLOC (Kilo Lines of Code)** → tæller linjer kode uden kompleksitetsvurdering.
    
    - Objektivt, men sprogafhængigt.
        

**Typiske metrics:**

- Fejl pr. FP/KLOC
    
- Omkostninger pr. FP/KLOC
    
- Dokumentationssider pr. FP/KLOC
    
- FP/KLOC pr. personmåned
    

---

### 2. Complexity Metrics

- **Fan-In & Fan-Out** → måler hvor komplekst et modul er ift. input/output afhængigheder.
    ![[image-6 1.png|334x184]]

---

### 3. Class-Oriented Metrics

- **Weighted Methods per Class (WMC):** Summen af kompleksiteter for alle metoder i klassen.
    
    - Lavere værdi er bedre.
        
- **Depth of Inheritance Tree (DIT):** Længden fra klassen til roden af arvetræet.
    
    - Lavere værdi indikerer enklere design.

		![[image-5 1.png|246x252]]
- **Number of Children (NOC):** Antal direkte underklasser.
    
    - Moderat værdi indikerer god genbrug.
        
- **Coupling Between Object classes (CBO):** Hvor mange klasser denne klasse er koblet til.
    
    - Lav coupling ønskes → øger genbrug og reducerer fejl.
        
- **Response For Class (RFC):** Hvor mange metoder aktiveres, når et objekt modtager en besked.
    
    - Lavere værdi = lettere at debugge.
        

---

### 4. MOOD Metrics Suite (Metrics for Object-Oriented Design)

- **Method Inheritance Factor (MIF):** Mange metoder arvet fra parent = høj værdi.
    
- **Coupling Factor (CF):** Se GRASP.
    
- **Polymorphism Factor (PF):** Se GRASP.
    

### 5. Class Size (simpel metode)

- Antal attributter og operationer.
    
- Høj værdi kan indikere for meget ansvar (High Cohesion).
