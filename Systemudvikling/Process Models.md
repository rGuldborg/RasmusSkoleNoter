# Procesmodeller i Systemudvikling

En **procesmodel** beskriver rækkefølgen af aktiviteter i et softwareprojekt, og hvordan de bør udføres. Den giver en ramme for:

- Hvad skal gøres
    
- I hvilken rækkefølge
    
- Hvordan arbejdet organiseres

---

## Framework-aktiviteter

Alle projekter – store som små – består af 5 generelle aktiviteter:

1. **Kommunikation** – afklaring af interessenter, krav og forventninger.
    
2. **Planlægning** – styring af tid, ressourcer og opgaver.
    
3. **Modellering** – analyse og design af krav og systemarkitektur.
    
4. **Konstruktion** – kodning og test af funktionalitet.
    
5. **Udrulning (Deployment)** – levering til brugere (enten samlet eller løbende).
    
![[framework_aktiviteter 1.png|700x213]]

---

## Umbrella-aktiviteter

Disse foregår parallelt gennem hele projektet, fx:

- Projektstyring
    
- Kvalitetssikring og tekniske reviews
    
- Konfigurationsstyring
    
- Dokumentation
    
- Måling og risikostyring

---

## Procesflows

Der findes forskellige måder at organisere framework-aktiviteterne på:

- **Lineært flow** – én aktivitet afsluttes helt, før næste starter.
    
- **Iterativt flow** – gentagelse og gradvis forbedring af artefakter.
    
- **Evolutionært flow** – funktionalitet tilføjes trin for trin.
    
- **Parallelt flow** – flere personer arbejder på forskellige dele samtidigt.
    
![[process_flows.png|700x203]]

---

## Udviklingsmodeller

Ved at kombinere flows og aktiviteter får vi konkrete **udviklingsmodeller**:

### Vandfaldsmodellen

Lineært forløb med klare faser: krav → design → kode → test → levering.  
**Ulempe:** fejl i tidlige faser opdages ofte først sent.  

![[Pasted image 20250916104424.png|700x169]]
### V-modellen

En udvidelse af vandfald, hvor hver udviklingsfase kobles til en testfase. Formålet er at finde fejl tidligere.  

![[Pasted image 20250916104441.png|700x685]]
### Inkrementel model

Leverer små, brugbare dele af systemet løbende. Fejl påvirker kun små dele, og brugerne får tidlig værdi.

![[Pasted image 20250916104453.png|700x457]]
### Prototyping

Bruges til at afklare krav eller afprøve tekniske idéer. Kan være mockups eller "proof of concept".

![[Pasted image 20250916104718.png|700x700]]
### Spiralmodellen

En kombination af iteration, evolution og inkrementelle leverancer. Hvert loop fungerer som et lille projekt.  
**Ulempe:** svært at vide, hvornår projektet er "færdigt".  

![[Pasted image 20250916104508.png|700x522]]

---

## Opsummering

Procesmodeller hjælper med at strukturere softwareudvikling. Valget afhænger af projektets krav, usikkerhed og behov for fleksibilitet. Vandfald er bedst ved stabile krav, mens iterative og inkrementelle modeller giver mere tilpasning undervejs.
