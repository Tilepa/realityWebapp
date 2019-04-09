pipeline {
    agent any
    stages {
		stage('clean') {
            steps {
				sh 'docker-compose -f docker-compose.yml down --remove-orphans'
				sh 'docker stop $(docker ps -a -q)'
				sh 'docker rm $(docker ps -a -q)'
            }
        }
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