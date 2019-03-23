package router

import (
	"backend-services/mongodbTest/src/config"
	"backend-services/mongodbTest/src/news"
	"github.com/gorilla/mux"
)
func SetupRouters() *mux.Router {
	router := mux.NewRouter()

	router.HandleFunc("/healthcheck", config.ConsulHealthCheck)

	setupNewsRouters(router)

	return router
}

func setupNewsRouters(router *mux.Router) {
	router.HandleFunc("/api/", news.GetNews).Methods("GET")
	router.HandleFunc("/api/{id}", news.GetNewsById).Methods("GET")
	router.HandleFunc("/api/", news.CreateNews).Methods("POST")
	router.HandleFunc("/api/", news.UpdateNews).Methods("PUT")
	router.HandleFunc("/api/{id}", news.DeleteNews).Methods("DELETE")
}