package main

import (
	"log"
	"net/http"
	"services/mongodbTest/router"
)

func main() {
	log.Print("Starting mongodbTest service ...")

	router := router.SetupRouters()

	log.Print("mongodbTest service is listening on port 8888")
	log.Fatal(http.ListenAndServe(":8888", router))
}
