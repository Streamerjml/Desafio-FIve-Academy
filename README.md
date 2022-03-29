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
1. Criado Dockerfile em cada uma das pastas para as imagens
2. Criado docker-compose para subir as imagens juntas

criado um build de  containers:
> docker-compose build 

pra subir:
backend && frontend