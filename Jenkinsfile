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
            npm install && npm install -g pm2
        }
        stage('Start Application'){
            pm2 startOrRestart index.js
        }
    }
}