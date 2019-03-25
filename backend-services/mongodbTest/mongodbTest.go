package main

import (
	"fmt"
	"log"
	"mongodbTest/src/config"
	"mongodbTest/src/router"
	"net/http"
)

func main() {
	log.Print("Starting mongodbTest service ...")

	config.RegisterServiceWithConsul()
	go config.UpdateConfiguration()

	routeHandler := router.SetupRouters()

	port := config.ServerPort()
	port = fmt.Sprintf(":%v", port)

	log.Printf("mongodbTest service is listening on port %v", port)
	log.Fatal(http.ListenAndServe(port, routeHandler))
}
