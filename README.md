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
