## Grundidé

I stedet for at udvikle hele applikationer til specifikke behov, bygger man **funktionalitet i komponenter**, som kan sættes sammen til at understøtte hele forretnings domænet.  
Når virksomheden får nye behov, sammensættes de nødvendige komponenter i stedet for at bygge et nyt system fra bunden.

Et velkendt eksempel er **SOA (Service Oriented Architecture)**, hvor systemer bygges op af selvstændige services, som kan genbruges og kombineres på tværs af projekter.

![[domain_components.png|700x504]]

---

## Domain Engineering

CBD baseres på en systematisk tilgang, hvor man arbejder med domænet frem for den enkelte applikation. Domain Engineering består typisk af tre faser:

1. **Domain Analysis**  
    – Hvad er de samlede behov på tværs af forretningsdomænet?
    
2. **Domain Design**  
    – Hvordan kan vi definere en komponentstruktur, der understøtter disse behov?
    
3. **Domain Implementation**  
    – Programmering af de konkrete komponenter.
    

En typisk arbejdsplan kan være:

- Definér domænet → Lav en **domænemodel**
    
- Kategorisér behov → Brug **Use Case-diagrammer**
    
- Udvælg repræsentative eksempler → Detaljerede **Use Cases**
    
- Analyser og definer klasser → **Sekvens- og klassediagrammer**
    
![[domain_flow.png|700x282]]

---

## Komponentkvalificering

Når en komponent udvikles, skal den vurderes og kvalificeres efter forskellige kriterier:

- **Performance** – Er den hurtig og effektiv?
    
- **Reliabilitet** – Er den stabil og fejltolerant?
    
- **Usabilitet** – Er den nem at anvende og integrere?
    

### Design by Contract

En vigtig tilgang i CBD er **Design by Contract**:

- **Preconditions** – hvad skal være sandt, før en operation kan udføres?
    
- **Postconditions** – hvad skal være sandt, efter operationen er udført?
    
- **Invariants** – regler, som altid skal være opfyldt (fx alternative flows i Use Cases).
    

### Økonomiske interfaces

Et princip er, at komponenter kun skal tilbyde **det mindste nødvendige interface** – altså et lille, veldefineret sæt af operationer. Det gør komponenterne nemmere at forstå, genbruge og vedligeholde.

![[component_contract.png|700x547]]

---

## Data Flow Diagrams (DFDs)

Et centralt værktøj i struktureret analyse og komponentbaseret udvikling er **Data Flow Diagrams (DFDs)**.  
De bruges til at repræsentere, hvordan data flyder igennem et system.

### Grundelementer

- **Ekstern entitet** – fx en bruger eller et andet system (svarer til aktører i Use Cases).
    
- **Proces** – modtager input-data, ændrer dem og producerer output-data.
    
- **Dataflow** – forbindelser mellem processer, datalagre og eksterne entiteter.
    
- **Datastore** – repræsenterer lagring, fx databaser eller filer.
    
![[Pasted image 20250916105145.png|700x658]]

---

## Hierarki i DFDs

- **Kontekstdiagram (niveau 0)**  
    Hele systemet vises som én proces (nummer 0) med eksterne entiteter.
    
- **Level 0-diagram**  
    Viser systemets overordnede processer (fx 1.0, 2.0 …).
    
- **Flere niveauer**  
    Hver proces kan opdeles i underprocesser (fx 1.0 → 1.1, 1.2, 1.3).  
    Nummereringen fortsætter hierarkisk (1.1.1, 1.1.2, …).
    
![[Pasted image 20250916105206.png|700x350]]
![[Pasted image 20250916105235.png]]
![[Pasted image 20250916105307.png]]

## Regler for processer

Når man tegner DFDs, skal man undgå følgende faldgruber:

- **Miracle** – en proces uden input (hvordan startede den?).
    
- **Black Hole** – en proces uden output (formålsløs).
    
- **Gray Hole** – en proces uden nok information til at kunne producere valid output.

---

## Ekstra bemærkninger

- **Styrker:** DFDs er gode til at identificere og beskrive processer i systemet.
    
- **Svagheder:** DFDs viser ikke logikken inde i processerne og kræver derfor yderligere specifikationer for de mest detaljerede dele.
