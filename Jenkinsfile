pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				sh 'docker-compose –f docker-compose-utf-8.yml rm -f'
				sh 'docker-compose –f docker-compose-utf-8.yml build'
            }
        }
		stage('test') {
			steps {
				sh 'docker-compose –f docker-compose-utf-8.yml run -–rm'
			}
		}
		stage('deploy') {
      		steps {
				  sh 'docker-compose –f docker-compose-utf-8.yml run'
			}
		}
    }
}