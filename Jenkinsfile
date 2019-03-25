pipeline {
    agent any
    stages {
        stage('build') {
            steps {
				sh 'ls -nal'
				sh 'docker-compose -f docker-compose.yml build'
            }
        }
    }
}