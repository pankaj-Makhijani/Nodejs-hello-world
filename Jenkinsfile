pipeline {
    agent any
    // tools (nodejs "nodejs")
    stages {
        stage('Clone Repository'){
            steps {
                git branch: 'main', url: 'https://github.com/pankaj-Makhijani/Nodejs-hello-world.git'
            }
        }
        stage('Install Dependencies'){
            steps {
                sh 'npm install'
                // sh 'npm install -g pm2'
            }
        }
        stage('Start Application'){
            steps {
                sh 'npm start'
                // sh 'pm2 startOrRestart pm2.config.json'
                // sh 'pm2 list'
                // sh 'pm2 describe MyApp'
                // sh 'ifconfig -a'
            }
        }
    }
}
