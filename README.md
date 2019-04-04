# realityWebapp

## Projektinstallation
Da das Projekt auf der Systemarchitektur von Microservices aufbaut und diese in Dockercontainern deployid werden sollen, muss auf dem Endgerät, auf dem das Projekt laufen soll, Docker vorinstalliert sein (Link: https://www.docker.com/community-edition#/download).

### Frontend
Angedacht ist, das das Frontend auf Basis von Angular entwickelt wird. Dabei soll das gesamte Frontend durch 1 Microservice repräsentiert werden. 

### Backend
Der Zugriff auf die Datenbank erfolgt mithilfe von kleineren Microservices, die jeweils auf ein Teil der relationalen Datenbank zugreifen (MySQL). Diese Microservices werden durch SpringBoot und Java realisiert.


## Starten der Infrastruktur

Die Services sind alle in dem docker-compose.yml File integriert. Um diese zu starten muss im Root-Verzeichnis '''docker-compose up -d''' ausgeführt werden.
Anschließend starten die Services und sind über Port 80 auf dem Rechner verfügbar.

URLs:
- Traefik: localhost/traefik
- Consul: localhost/consul
- GUI: localhost/app/ui
- Management-GUI: localhost/app/... (noch nicht integriert)
- mongodbtest: localhost/app/mongodbtest