## a. Hvad er CI/CD?

- **CI (Continuous Integration)**:
    
    - Automatisk integration af kodeændringer fra flere udviklere.
        
    - Bygger, tester og validerer applikationen hver gang der pushes kode til repository.
        
    - Formål: Tidlig fejlopdagelse, konsistens, mindre konflikter.
        
- **CD (Continuous Deployment/Delivery)**:
    
    - Automatisk deploy af applikationen til test- eller produktionsmiljø.
        
    - Continuous Delivery = klar til deploy, men kræver manuel godkendelse.
        
    - Continuous Deployment = deploy sker automatisk efter tests passerer.
        

---

## b. Hvordan jeg har brugt Git

- Versioneringssystem til at styre kode.
    
- Workflow eksempel:
    
    1. Opret feature branch: `git checkout -b feature-x`
        
    2. Lav ændringer og commit: `git add .` + `git commit -m "besked"`
        
    3. Push branch til GitHub: `git push origin feature-x`
        
    4. Pull request til main branch → review → merge
        
- Hjalp med **samarbejde, historik og konfliktløsning** i projekter.
    

---

## c. Rolle af Maven

- **Maven** = build- og projektstyringsværktøj for Java.
    
- Funktioner:
    
    - Håndterer **dependencies** (biblioteker, plugins)
        
    - Build lifecycle: compile, test, package, deploy
        
    - Standardiserer projektstruktur
        
    - Eksempel: `mvn clean install` bygger og tester projektet
        

---

## d. Rolle af GitHub Actions

- CI/CD værktøj integreret med GitHub.
    
- Muliggør automatisering: build, test, deploy.
    
- Eksempel workflow for Java/Spring Boot:
    

```yaml
name: Java CI
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - name: Set up JDK
      uses: actions/setup-java@v3
      with:
        java-version: '17'
    - run: mvn clean install
```

- Fordele: Automatisk byg og test ved hver push, kan deploye til Azure/Heroku osv.
    

---

## e. Ideel CI/CD for full stack projekt

1. **Code repository:** GitHub/Bitbucket
    
2. **CI:**
    
    - Ved push → GitHub Actions bygger backend (Maven) og frontend (npm/yarn)
        
    - Kører tests og linting
        
3. **CD:**
    
    - Hvis tests passerer → deploy til staging (Azure App Service eller Docker container)
        
    - Automatiske integrationstests på staging
        
    - Manuel godkendelse → deploy til production
        
4. **Monitoring:**
    
    - Application Insights, logs, alerting
        
5. **Fordele:**
    
    - Hurtig feedback, færre fejl, konstant opdateret produktionsmiljø
