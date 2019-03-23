package news

import (
	"encoding/json"
	"github.com/gorilla/mux"
	"io/ioutil"
	"mongodbTest/src/utils"
	"net/http"
)

func GetNews(w http.ResponseWriter, r *http.Request) {
	news, err := GetNewsService().GetNews()

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
		return
	}

	data, err := json.Marshal(news)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
		return
	}

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(data)
}

func GetNewsById(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	if id == "" {
		utils.HttpErrorBadRequest(w, "There must be an id given.")
		return
	}

	news, err := GetNewsService().GetNewsById(id)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
		return
	}

	data, err := json.Marshal(news)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
		return
	}

	w.Header().Set("Content-Type", "application/json; charset=UTF-8")
	w.WriteHeader(http.StatusOK)
	_, _ = w.Write(data)
}

func CreateNews(w http.ResponseWriter, r *http.Request) {
	news, err := parseBody(r)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
	}

	err = GetNewsService().CreateNews(news)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
	}

	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte("Successfully persisted the news object."))
}

func UpdateNews(w http.ResponseWriter, r *http.Request) {
	news, err := parseBody(r)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
	}

	if news.ID == "" {
		//news object does not exist
		err = GetNewsService().CreateNews(news)

		if err != nil {
			utils.HttpErrorBadRequest(w, err.Error())
			return
		}
		w.WriteHeader(http.StatusCreated)
		_, _ = w.Write([]byte("Successfully persisted the news object."))
		return
	}

	// news object already exist
	err = GetNewsService().UpdateNews(news)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte("Successfully updated the news object."))
}

func DeleteNews(w http.ResponseWriter, r *http.Request) {
	id := mux.Vars(r)["id"]
	if id == "" {
		utils.HttpErrorBadRequest(w, "There must be an id given.")
		return
	}

	err := GetNewsService().DeleteNewsById(id)

	if err != nil {
		utils.HttpErrorBadRequest(w, err.Error())
		return
	}

	w.WriteHeader(http.StatusOK)
	_, _ = w.Write([]byte("Successfully deleted the news object."))
}

func parseBody(r *http.Request) (*News, error) {
	body, err := ioutil.ReadAll(r.Body)

	if err != nil {
		return nil, err
	}

	var news News
	err = json.Unmarshal(body, &news)

	if err != nil {
		return nil, err
	}

	return &news, nil
}