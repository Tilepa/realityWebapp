package utils

import (
	"fmt"
	"gopkg.in/mgo.v2"
	"mongodbTest/src/config"
)

func GetDatabaseClient() *mgo.Database {
	var configuration = config.GetConfiguration()

	session, err := mgo.Dial(fmt.Sprintf("%s:%d", configuration.Mongo.Ip, configuration.Mongo.Port))
	if err != nil {
		panic(err)
	}

	return session.DB(configuration.Mongo.DbName)
}