pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				sh 'docker-compose -f docker-compose.yml build'
            }
        }
		stage('test') {
			steps {
				sh 'echo "Currently there is no testing"'
			}
		}
		stage('deploy') {
      		steps {
				  sh 'docker-compose -f docker-compose.yml up -d'
			}
		}
    }
}