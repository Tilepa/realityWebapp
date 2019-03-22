package setup

import "fmt"

const numberOfInitializationObjects = 20

func InitializeData() {
	var db = GetDatabaseConnection()

	for i := 0; i < numberOfInitializationObjects; i += 1 {
		var queryString = fmt.Sprintf("INSERT INTO news (title, content) VALUES ('%v', '%v')", randomString(i), randomString(i))
		_, err := db.Query(queryString)

		if err != nil {
			panic(err)
		}
	}

	defer db.Close()
}

func randomString(id int) string {
	return fmt.Sprintf("randomString %d", id)
}