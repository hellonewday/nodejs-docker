pipeline {
    agent {
        docker {
            image: "node:14-alpine"
        }
    }
    stages {
        stage("1. Build front-end"){
            steps{
                sh "cd client"
                sh "yarn install"
            }
        }

        stage("2. Build back-end"){
            steps{
                sh "cd server"
                sh "npm install"
            }
        }

        stage ("3. Test front-end"){
            steps{
                sh "cd client"
                sh "yarn run test"
            }
        }

        stage ("4. Test back-end"){
            steps {
                sh "cd server"
                sh "npm run test"
            }
        }
    }
}
