## a. Logge ind på en Azure VM fra lokal terminal

- Forudsætning: Du har en **public IP** og SSH-adgang til VM.
    
- Kommando:
    

```bash
ssh <brugernavn>@<IP-adresse>
```


- Hvis privat nøgle bruges:
    

```bash
ssh -i <private-key.pem> <brugernavn>@<IP-adresse>
```


- Efter login har du shell-adgang til den virtuelle maskine.
    

---

## b. Navigering i Linux shell

### i. Liste alle filer (inkl. skjulte)

```bash
ls -a
```


### ii. Liste detaljer om filer/folders inkl. rettigheder

```bash
ls -l
```


- Viser permissions, ejer, gruppe, størrelse og sidste ændring
    

### iii. Oprette/åbne/redigere filer

- Brug **nano**:
    

```bash
nano filnavn.txt
```


- Gem: `Ctrl+O`, luk: `Ctrl+X`
    
- Alternativ: `vi` eller `vim`
    

### iv. Oprette, flytte og slette filer/directories

```bash
# Opret fil
touch fil.txt

# Opret mappe
mkdir mappe

# Flyt fil/mappen
mv fil.txt mappe/

# Kopier fil
cp fil.txt mappe/

# Slet fil
rm fil.txt

# Slet mappe
rm -r mappe
```


### v. Start/stop/restart service (Docker eksempel)

```bash
sudo systemctl start docker
sudo systemctl stop docker
sudo systemctl restart docker
sudo systemctl status docker
```


### vi. Kør kommandoer med administratorrettigheder

```bash
sudo <kommando>
```

Eksempel
```bash
sudo apt update
```
    

### vii. Eksekvere filer og ændre rettigheder

```bash
# Gør script eksekverbart
chmod +x script.sh

# Kør script
./script.sh
```


---

## c. Installere nye pakker (fx Docker)

- Opdater pakkeliste:
    

```bash
sudo apt update
```


- Installer Docker:
    

```bash
sudo apt install docker.io
```


- Aktivér Docker og start ved boot:
    

```bash
sudo systemctl enable docker
sudo systemctl start docker
```


- Test installation:
    

```bash
docker --version
docker run hello-world
```

