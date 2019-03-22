package router

import (
	"github.com/gorilla/mux"
	"services/mongodbTest/news"
)
func SetupRouters() *mux.Router {
	router := mux.NewRouter()

	setupNewsRouters(router)

	return router
}

func setupNewsRouters(router *mux.Router) {
	router.HandleFunc("/", news.GetNews).Methods("GET")
	router.HandleFunc("/{id}", news.GetNewsById).Methods("GET")
	router.HandleFunc("/", news.CreateNews).Methods("POST")
	router.HandleFunc("/", news.UpdateNews).Methods("PUT")
	router.HandleFunc("/{id}", news.DeleteNews).Methods("DELETE")
}