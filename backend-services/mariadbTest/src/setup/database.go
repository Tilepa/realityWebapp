package setup

import (
	"database/sql"
	_ "github.com/go-sql-driver/mysql"
	"log"
)

const driver = "mysql"
const databaseConnection = "root:root@tcp(localhost:3306)/" // format: username:password@tcp(url:port)/
const database = "mariadbTest"

var lastConnection *sql.DB = nil

func GetDatabaseConnection() *sql.DB {
	if lastConnection != nil {
		return lastConnection
	} else {
		// get connection to database
		db, err := sql.Open(driver, databaseConnection + database)

		if err != nil {
			panic(err.Error())
		}

		return db
	}
}

func InitializeDatabase() {
	createDatabase()
	createTables()
}

func createDatabase() {
	log.Print("Create database if not exists")
	db, err := sql.Open(driver, databaseConnection)

	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	query, err := db.Query("CREATE database IF NOT EXISTS " + database + " DEFAULT CHARACTER SET utf8;")

	if err != nil {
		panic(err.Error())
	}
	defer query.Close()
}

func createTables() {
	// get connection to database
	db, err := sql.Open(driver, databaseConnection + database)

	if err != nil {
		panic(err.Error())
	}
	defer db.Close()

	createNewsTable(db)
}

func createNewsTable(db *sql.DB) {
	log.Print("Create mariadbTest table if not exists ...")

	query, err := db.Query("CREATE TABLE IF NOT EXISTS news(id int NOT NULL AUTO_INCREMENT, title varchar(50), content varchar(50),  PRIMARY KEY(id));")

	if err != nil {
		panic(err)
	}
	defer query.Close()

	log.Print("Finished creation of mariadbTest table.")
}