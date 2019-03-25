pipeline {
    agent { docker { image 'golang' } }
    stages {
        stage('build') {
            steps {
                sh 'go version'
				sh 'ls -nal'
				sh 'docker-compose -f docker-compose.yml build'
            }
        }
    }
}