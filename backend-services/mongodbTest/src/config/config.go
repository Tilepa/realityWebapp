package config

type Configuration struct {
	Mongo  *MongoConfig  `json:"mongo"`
	Server *ServerConfig `json:"server"`
}

type MongoConfig struct {
	Ip 		string 	`json:"ip"`
	DbName 	string 	`json:"dbName"`
	Port 	int 	`json:"port"`
}

type ServerConfig struct {
	Port 	int 	`json:"port"`
}