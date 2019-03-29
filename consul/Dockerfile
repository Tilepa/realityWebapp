FROM consul:latest

WORKDIR /setup/

COPY ./initializeServer.sh ./initializeServer.sh
COPY ./config ./config

RUN chmod +x ./initializeServer.sh

EXPOSE 8300 8301/udp 8302 8302/udp 8400 8500 8600 8600/udp
ENTRYPOINT ./initializeServer.sh