## a. IaaS, PaaS og DBaaS

- **IaaS (Infrastructure as a Service)**
    
    - Leverer virtuelle maskiner, storage og netværk.
        
    - Brugeren styrer OS, runtime og apps.
        
    - Eksempel: Azure Virtual Machines
        
    - **Brugt:** Eksperimenter med virtuelle maskiner til test.
        
- **PaaS (Platform as a Service)**
    
    - Platform til at udvikle og deploye apps uden at håndtere servere.
        
    - Eksempel: Azure App Service
        
    - **Brugt:** Deploy af Spring Boot webapplikationer.
        
- **DBaaS (Database as a Service)**
    
    - Managed database, hvor backup, skalering og sikkerhed håndteres af Azure.
        
    - Eksempel: Azure SQL Database
        
    - **Brugt:** Lagring af data til projekter.
        

![[image-1 2.png]]
---

## b. Fordele og ulemper

|Strategi|Fordele|Ulemper|
|---|---|---|
|**IaaS**|Fuld kontrol, fleksibel|Mere administration og vedligehold|
|**PaaS**|Hurtig deployment, autoscaling, mindre administration|Mindre kontrol, afhængig af platformen|
|**DBaaS**|Backup, skalering, høj tilgængelighed|Begrænset kontrol, kan være dyrere|

**Refleksion:**

- Til studieprojekter er **PaaS og DBaaS mest praktisk**, da man kan fokusere på kode fremfor infrastruktur.
    

---

## c. Azure-produkter anvendt

- **Azure App Service** → Deploy webapps (Spring Boot)
    
- **Azure SQL Database** → Database til opgaver
    
- **Azure Storage** → Gemme filer/data
    
- **Azure Virtual Machines** → Eksperimenter og tests
    
- **Azure Functions** → Små serverless services
    g

---

## d. Deploy af Spring-projekt på Azure

1. **Forberedelse**: Build Spring Boot-projekt til `.jar`
    
2. **Opret App Service**: Gratis tier, vælg Java runtime
    
3. **Deploy**: Upload `.jar` via Azure Portal eller CLI, evt. CI/CD fra GitHub
    
4. **Konfiguration**: Miljøvariabler, databaseforbindelse
    
5. **Test**: Åbn URL, tjek API’er/front-end
    
6. **Overvågning**: Application Insights, luk ubrugte tjenester for at spare kredit
