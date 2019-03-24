package main

import (
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

	log.Print("mongodbTest service is listening on port 8080")
	log.Fatal(http.ListenAndServe(":8080", routeHandler))
}
