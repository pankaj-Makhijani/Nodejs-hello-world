pipeline {
    agent any
    tools (nodejs 'nodejs')
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
        stage('Start Application'){
            steps {
                sh 'pm2 startOrRestart pm2.config.json'
            }
        }
    }
}