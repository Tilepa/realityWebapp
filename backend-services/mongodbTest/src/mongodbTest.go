package main

import (
	"backend-services/mongodbTest/src/config"
	"backend-services/mongodbTest/src/router"
	"log"
	"net/http"
)

func main() {
	log.Print("Starting mongodbTest service ...")

	config.RegisterServiceWithConsul()

	routeHandler := router.SetupRouters()

	log.Print("mongodbTest service is listening on port 8080")
	log.Fatal(http.ListenAndServe(":8080", routeHandler))
}
