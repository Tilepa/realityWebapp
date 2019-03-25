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
				sh 'docker-compose -f docker-compose.yml run --rm'
			}
		}
		stage('deploy') {
      		steps {
				  sh 'docker-compose -f docker-compose.yml run'
			}
		}
    }
}