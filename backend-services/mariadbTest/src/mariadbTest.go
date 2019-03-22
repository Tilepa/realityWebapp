package main

import (
	"backend-services/mariadbTest/src/setup"
	"log"
)

func main() {
	log.Print("Starting mariadbTest service ...")

	log.Print("Start initialization ...")
	setup.InitializeDatabase()
	log.Print("Finished initialization")

	log.Print("Start data initialization ...")
	setup.InitializeData()
	log.Print("Finished data initialization")
}
