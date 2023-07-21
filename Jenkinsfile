pipeline {
    agent any
    tools (nodejs 'NODE')
    stages {
        stage('Clone Repository'){
            steps {
                git branch: 'main', url: 'https://github.com/pankaj-Makhijani/Nodejs-hello-world.git'
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'npm install && npm install -g pm2'
            }
        }
        stage('Perform API testing'){
            steps {
                sh 'npm test'
            }
        }
        stage('Start Application'){
            input {
                message "Should we continue?"
                ok "Yes, we should."
                submitter "Pankaj"
            }
            steps {
                sh 'pm2 startOrRestart pm2.config.json'
            }
        }
    }
}