## a. Logge ind på en Azure VM fra lokal terminal

- Forudsætning: Du har en **public IP** og SSH-adgang til VM.
    
- Kommando:
    

`ssh <brugernavn>@<IP-adresse>`

- Hvis privat nøgle bruges:
    

`ssh -i <private-key.pem> <brugernavn>@<IP-adresse>`

- Efter login har du shell-adgang til den virtuelle maskine.
    

---

## b. Navigering i Linux shell

### i. Liste alle filer (inkl. skjulte)

`ls -a`

### ii. Liste detaljer om filer/folders inkl. rettigheder

`ls -l`

- Viser permissions, ejer, gruppe, størrelse og sidste ændring
    

### iii. Oprette/åbne/redigere filer

- Brug **nano**:
    

`nano filnavn.txt`

- Gem: `Ctrl+O`, luk: `Ctrl+X`
    
- Alternativ: `vi` eller `vim`
    

### iv. Oprette, flytte og slette filer/directories

`# Opret fil touch fil.txt # Opret mappe mkdir mappe # Flyt fil/mappen mv fil.txt mappe/ # Kopier fil cp fil.txt mappe/ # Slet fil rm fil.txt # Slet mappe rm -r mappe`

### v. Start/stop/restart service (Docker eksempel)

`sudo systemctl start docker sudo systemctl stop docker sudo systemctl restart docker sudo systemctl status docker`

### vi. Kør kommandoer med administratorrettigheder

`sudo <kommando>`

- Fx: `sudo apt update`
    

### vii. Eksekvere filer og ændre rettigheder

`# Gør script eksekverbart chmod +x script.sh # Kør script ./script.sh`

---

## c. Installere nye pakker (fx Docker)

- Opdater pakkeliste:
    

`sudo apt update`

- Installer Docker:
    

`sudo apt install docker.io`

- Aktivér Docker og start ved boot:
    

`sudo systemctl enable docker sudo systemctl start docker`

- Test installation:
    

`docker --version docker run hello-world`
