package config

import (
	"fmt"
	consulapi "github.com/hashicorp/consul/api"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
)

func RegisterServiceWithConsul() {
	config := consulapi.DefaultConfig()
	consul, err := consulapi.NewClient(config)
	if err != nil {
		log.Fatalln(err)
	}
	registration := new(consulapi.AgentServiceRegistration)
	registration.ID = "mongodbTest-service" //replace with service id
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
	p := os.Getenv("PRODUCT_SERVICE_PORT")
	if len(strings.TrimSpace(p)) == 0 {
		return ":8080"
	}
	return fmt.Sprintf(":%s", p)
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