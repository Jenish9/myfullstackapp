** Capstone Project  – Docker, AWS & Real-World DevOps Deployment

** Project Overview
This capstone project demonstrates real-world DevOps practices by containerizing a full-stack application and deploying it on an AWS EC2 instance using Docker and Docker Compose.
The project focuses on: 
deployment
networking,
health checks
logging

similar to what DevOps engineers handle in production environments.

---

=> Tech Stack
- Frontend: React
- Backend: Node.js
- Database: PostgreSQL
- Containerization: Docker
- Orchestration: Docker Compose
- Cloud Platform: AWS EC2 (Ubuntu)

---

=> Architecture Overview

- React frontend communicates with Node.js backend
- Backend connects to PostgreSQL database
- Docker Compose manages service orchestration and networking
- PostgreSQL uses Docker volumes for data persistence
- Application deployed on AWS EC2 and exposed via public IP

---

=> 📁 Project Structure
myfullstackapp/
│
├── frontend/
│ ├── Dockerfile
│ └── src/
│
├── backend/
│ ├── Dockerfile
│ └── app/
│
├── docker-compose.yml
└── README.md


---

## ⚙️ Docker Services

| Service   | Port | Description |
|----------|------|------------|
| Frontend | 3000 | React user interface |
| Backend  | 5000 | Node.js REST API |
| Database | 5432 | PostgreSQL database |

---

## ☁️ AWS EC2 Deployment

- Instance OS: Ubuntu
- Docker & Docker Compose installed
- Security Group allows:
  - TCP 3000 (Frontend)
  - TCP 5000 (Backend)
  - TCP 22 (SSH)

## Application Access 
note: i used public ip in ec2 not elastic ip so ip chanegs every time restart the instance.
 http://<ec2 public ip>:3000

 
---

## 🚀 Deployment Steps

### step 1 Install Docker & Docker Compose
```bash
sudo apt update
sudo apt install -y docker.io docker-compose
sudo usermod -aG docker ubuntu
newgrp docker

## step 2 Clone Repository
-----------------------------

git clone https://github.com/Jenish9/myfullstackapp.git
cd myfullstackapp

## step 3 Build & Run Containers
------------------------------------------
docker compose up -d --build

##step 4 Health Checks
----------------------------------------------------------
--->Backend service includes health checks
--->Docker automatically monitors container health
----------------------------------------------------------
docker ps
docker inspect backend

## step 5 Logs & Observability
---------------------------------------------------------
docker compose logs
docker logs backend
## 📸 Screenshots

### Application Running on AWS EC2
screenshots/Capture14.PNG

### Docker Containers Running
screenshots/Capture31.PNG

### Key Learnings

* Dockerizing full-stack applications
* Docker Compose networking & service dependencies
* AWS EC2 deployment and security groups
* Persistent storage using Docker volumes
* Health checks and logging for observability
* Production-like DevOps workflow

Author

Jenish Bhagat
DevOps | Docker | AWS | Cloud Computing
 
