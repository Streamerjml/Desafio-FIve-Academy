# Desafio do Docker
Criar uma comunicação entre um backend e um frontend usado 2 containers.

### Frontend
- node http-server
- Port: 8080
- ao clicar no botão seguir vc e direcionado para *localhost:4040* (Backend)

### Backend
- node express
- Port: 4040
- onde *localhost:4040* (Backend) é chamado, e redireciona para *localhost:8080* (Frontend)
  
### Docker
1. Created Dockerfile for each structure in each folder
2. Created docker-compose at source project

To build and create containers:
> docker-compose build 

To run:
> docker-compose up -d backend && docker-compose up -d frontend