Software Configuration Management (SCM) er kunsten at **identificere, organisere og kontrollere ændringer** i software, så man minimerer fejl og maksimerer produktiviteten i et udviklingsteam.

---

## Udfordringer i softwareudvikling

Uden SCM kan følgende problemer opstå:

- Fejl vender tilbage, selv efter de er rettet.
    
- Funktionalitet forsvinder mellem versioner.
    
- Svært at finde den korrekte version til kunden.
    
- Forskellige versioner mellem fejlrapporten og den version, man undersøger.
    

**Løsning:** Indfør SCM for at styre ændringer systematisk.

---

## Ændringer og deres konsekvenser

![[image-2 1.png|700x534]]

### 1. Ændringer i forretningskrav

- Fx nye GDPR-regler → ændring af design eller funktionalitet.
    
- Personlige oplysninger skal håndteres anderledes → kodeændringer for at stoppe lagring.
    

### 2. Ændringer i tekniske krav

- Fx skifte database fra MySQL til MySQL + Oracle → ændring af kode til at understøtte Oracle.
    

### 3. Ændringer i brugerkrav

- Fx Finance ønsker anden funktionalitet end Production → forskellige versioner af programmet kører samtidigt.
    

---

## Software Configuration Items (SCIs)
![[image-3 1.png|700x457]]

SCIs er **navngivne informationsenheder** i projektet:

- UML-diagrammer, kravmodeller, kildekode, testplaner, dokumentation, risikovurdering osv.
    
- En **Baseline** er en formelt godkendt version af en SCI, som kun kan ændres gennem formelle procedurer.
    
![[image-4 1.png|700x464]]

**Eksempel:**

`Conf1: File1 -> v1.3 File2 -> v1.0 File3 -> v1.7 File4 -> v1.4`

---

# Software Configuration Management (SCM) – Proces

SCM-processen sikrer, at ændringer i software styres kontrolleret, så fejl minimeres og versioner holdes konsistente.

---

## 1. Identification (Identifikation)

- Identificér alle **Software Configuration Items (SCIs)**:
    
    - Kildekode, UML-diagrammer, kravmodeller, testplaner, dokumentation, estimater osv.
        
- Hvert SCI får et navn og en baseline, som kun kan ændres gennem formelle procedurer.
    

---

## 2. Change Control (Ændringskontrol)

- Det er **ikke tilladt at ændre baselined SCIs direkte**.
    
- Ændringer skal styres via en **formel procedure**.
    
- Typiske organer:
    
    - **CAB** = Change Advisory Board
        
    - **CCB** = Change Control Board
        

---

## 3. Change Control Process – Step 1

- Opret **Change Request** (ændringsanmodning).
    
- Godkend eller afvis ændringsanmodningen.
    

---

## 4. Change Control Process – Step 2

- Implementér ændringen på SCI’en.
    
- Etabler en **ny baseline**, der dokumenterer ændringen.
    

---

## 5. Change Control Process – Step 3

- Godkend den faktiske ændring og den nye baseline.
    
- Dokumentér, at ændringen er korrekt udført og godkendt.
    

---

## 6. Version Control

- Brug **versionsstyringssystemer** (fx Git, Subversion) til at spore ændringer.
    
- Processen for udviklere:
    
    - **Check-out** → hent den aktuelle version.
        
    - **Work** → udfør ændringer på lokal kopi.
        
    - **Check-in** → gem ændringer i master-set.
        
- Versionskontrol sikrer, at flere udviklere kan arbejde parallelt uden konflikt.
    

---

## 7. Auditing

- Revisionskontrol af, at SCM-procedurer følges korrekt.
    
- Kontrol af, at alle baselines og ændringer stemmer overens.

---

## Værktøjer til SCM

- **Udviklingsværktøjer**: IntelliJ, Visual Studio.
    
- **Browsere og editors** for konsistens i output.
    
- **Versioneringsværktøjer**: Git, Subversion, Mercurial.
    

---

## Opsummering

SCM hjælper med at:

- Minimere fejl og tab af funktionalitet.
    
- Styre ændringer kontrolleret og dokumenteret.
    
- Sørge for, at teamet arbejder på korrekte versioner af software og dokumentation.
