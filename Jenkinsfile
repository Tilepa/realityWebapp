pipeline {
    agent {
        docker { image 'consul' }
    }
    stages {
        stage('build') {
            steps {
				sh 'docker-compose –f docker-compose.yml build –rm'
            }
        }
		stage('test') {
			steps {
				sh 'docker-compose –f docker-compose.yml run –rm'
			}
		}
		stage('deploy') {
      		steps {
				  sh 'docker-compose –f docker-compose.yml run'
			}
		}
    }
}