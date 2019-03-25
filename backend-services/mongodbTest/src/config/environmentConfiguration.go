package config

import "os"

func ServerPort() string {
	return getEnvOrElse("SERVER_PORT", "8080")
}

func ConsulConfigurationKey() string {
	return getEnvOrElse("CONSUL_CONFIG_KEY", "dev/mongodbTest")
}

func getEnvOrElse(envKey string, defaultVal string) string {
	env := os.Getenv(envKey)
	if env == "" {
		env = defaultVal
	}
	return env
}
