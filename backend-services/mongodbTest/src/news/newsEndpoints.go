package news

import (
	"fmt"
	"net/http"
)

func GetNews(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "Get news!")
}

func GetNewsById(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "get news by id!")
}

func CreateNews(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "create news!")
}

func UpdateNews(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "update news!")
}

func DeleteNews(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "delete news!")
}