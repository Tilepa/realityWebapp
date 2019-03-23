package utils

import (
	"fmt"
	"net/http"
)

func HttpErrorBadRequest(w http.ResponseWriter, message string) {
	w.WriteHeader(http.StatusBadRequest)
	_, _ = fmt.Fprintf(w, "%s", message)
}
