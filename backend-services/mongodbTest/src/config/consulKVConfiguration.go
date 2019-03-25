package config

import (
	"encoding/json"
	"log"
	"time"

	consulapi "github.com/hashicorp/consul/api"
)

type configuration struct {
	Mongo  *MongoConfig  `json:"mongo,omitempty"`
	Server *ServerConfig `json:"server,omitempty"`
}

type MongoConfig struct {
	Ip     string `json:"ip,omitempty"`
	DbName string `json:"dbName,omitempty"`
	Port   int64  `json:"port,omitempty"`
}

type ServerConfig struct {
	Port int64 `json:"port,omitempty"`
}

var configInstance *configuration

func UpdateConfiguration() {
	for {
		configuration := loadConfigFromConsul()
		if configuration != nil {
			configInstance = configuration
		}
		time.Sleep(time.Second * 10)
	}
}

func GetConfiguration() *configuration {
	if configInstance == nil {
		configInstance = loadConfigFromConsul()
	}
	return configInstance
}

func loadConfigFromConsul() *configuration {
	config := consulapi.DefaultConfig()
	consul, err := consulapi.NewClient(config)
	if err != nil {
		log.Fatal(err)
		return nil
	}
	kvPair, _, err := consul.KV().Get(ConsulConfigurationKey(), nil)
	if err != nil {
		log.Fatal(err)
		return nil
	}
	if kvPair == nil || kvPair.Value == nil {
		log.Printf("Configuration empty")
		return nil
	}
	val := string(kvPair.Value)

	var configurationStruct *configuration
	err1 := json.Unmarshal(kvPair.Value, &configurationStruct)

	if err1 != nil {
		log.Fatal(err1)
		return nil
	}

	log.Printf("Updated configuration from consul: \n %s", val)

	return configurationStruct
}
