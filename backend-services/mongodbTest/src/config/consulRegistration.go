package config

import (
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"

	consulapi "github.com/hashicorp/consul/api"
)

func RegisterServiceWithConsul() {
	config := consulapi.DefaultConfig()
	consul, err := consulapi.NewClient(config)
	if err != nil {
		log.Fatalln(err)
	}
	registration := new(consulapi.AgentServiceRegistration)
	registration.ID = "mongodbTest-service"   //replace with service id
	registration.Name = "mongodbTest-service" //replace with service name
	address := hostname()
	registration.Address = address
	port, err := strconv.Atoi(port()[1:len(port())])
	if err != nil {
		log.Fatalln(err)
	}
	registration.Port = port
	registration.Check = new(consulapi.AgentServiceCheck)
	registration.Check.HTTP = fmt.Sprintf("http://%s:%v/healthcheck",
		address, port)
	registration.Check.Interval = "5s"
	registration.Check.Timeout = "3s"
	_ = consul.Agent().ServiceRegister(registration)
	log.Print("Successfully registered at consul")
}

func port() string {
	return fmt.Sprintf(":%s", ServerPort())
}

func hostname() string {
	hn, err := os.Hostname()
	if err != nil {
		log.Fatalln(err)
	}
	return hn
}

func ConsulHealthCheck(w http.ResponseWriter, r *http.Request) {
	log.Print(fmt.Fprintf(w, `mongodbTest service is good`))
}
