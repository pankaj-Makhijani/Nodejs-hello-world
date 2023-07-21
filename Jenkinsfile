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
                submitter "pankaj"
            }
            steps {
                sh 'npm start'
            }
        }
    }
}
