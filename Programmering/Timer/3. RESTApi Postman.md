Vi gennemgår først installation af Postman og derefter eksempler på brug til REST-webservices.

---

## 1. Installation

1. Gå til: [https://www.postman.com/downloads/](https://www.postman.com/downloads/)
    
2. Vælg den rigtige version (Windows/Mac).
    
3. Download f.eks. `Postman-win64-Setup.exe`.
    
4. Kør setup-fil og installer Postman.
    

---

## 2. Første webservice-kald

- Postman kan udføre HTTP-verber: `GET`, `POST`, `PUT`, `DELETE`.
    
- Vi vil teste med vores `students` webservice.
    

### Opret Collection

1. Tryk `+` øverst til venstre → "New Collection"
    
2. Navngiv den f.eks. `Student22`
    
3. Tryk på **Add a request** under Collection → navngiv f.eks. `GetStudent`
    
4. Tryk **Send** → JSON-respons vises nederst
    

---

## 3. POST – indsæt en ny Student

1. Opret `POST` endpoint i `StudentRestController`:
    

```Java
@PostMapping("/student")
public Student postStudent(@RequestBody Student student) {
    return studentRepository.save(student);
}
```


2. I Postman:
    
    - Vælg HTTP-verbum **POST**
        
    - URL: `http://localhost:8080/student`
        
    - Under **Body** → vælg **raw** → JSON
        
    - Indsæt JSON fra GET-request, fjern `"id"`
        
    - Tilpas `"name"` eller andre felter
        
    - Tryk **Send** → ny række indsættes
        

---

## 4. PUT – opdater eksisterende Student

1. PUT endpoint kan laves lig POST, men standard praksis:
    

```Java
@PutMapping("/student")
public ResponseEntity<Student> putStudent(@RequestBody Student student) {
    if (!studentRepository.existsById(student.getId())) {
        return ResponseEntity.notFound().build();
    }
    Student updated = studentRepository.save(student);
    return ResponseEntity.ok(updated);
}
```


2. I Postman:
    
    - Vælg **PUT**
        
    - URL: `http://localhost:8080/student`
        
    - Body → raw → JSON fra POST
        
    - Ændr `"id"` til eksisterende student → tryk **Send**
        
    - Hvis ID findes → opdatering, status 200 OK
        
    - Hvis ID ikke findes → status 404 Not Found
        

---

## 5. GET med parametre

- Eksempel: hent student med `id`:
    

```Java
@GetMapping("/student/{id}")
public ResponseEntity<Student> getStudentById(@PathVariable int id) {
    return studentRepository.findById(id)
             .map(ResponseEntity::ok)
             .orElse(ResponseEntity.notFound().build());
}
```


- Kan også lave GET med `name` som parameter
    

---

## 6. DELETE – slet student

```Java
@DeleteMapping("/student/{id}")
public ResponseEntity<Void> deleteStudent(@PathVariable int id) {
    if (!studentRepository.existsById(id)) {
        return ResponseEntity.notFound().build();
    }
    studentRepository.deleteById(id);
    return ResponseEntity.ok().build();
}
```


- Sletter rækken hvis ID findes, ellers returneres 404
    

---

## 7. Tips til Postman-brug

- **Save As** → gem request i en Collection
    
- **Body → raw → JSON** → indsæt objekt
    
- Postman viser HTTP-verbum først, hvilket hjælper med at undgå fejl
    
- Brug samme JSON-struktur til både POST og PUT
    

---

## 8. Specialtilfælde – UserEmployee

- Indsæt ny `User` først (uden fremmednøgle)
    
- Derefter indsæt `Employee` med korrekt `userID`
    
- Forsøg med eksisterende `userID` → `Duplicate entry` (database håndterer constraint)
