
pipeline {
    agent any

    environment {
        BASE_URL = 'https://www.saucedemo.com'
        CI = 'true'
    }

    options {
        timestamps()
        timeout(time: 60, unit: 'MINUTES')
    }

    stages {

        stage('Checkout') {
            steps {
                echo 'Checking out GitHub repository'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
            }
        }

        stage('Install Playwright Browsers') {
            steps {
                bat 'npx playwright install'
            }
        }

        stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test'
            }
        }

        stage('Generate Allure Report') {
            steps {
                bat 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**, test-results/**, allure-results/**, allure-report/**',
                allowEmptyArchive: true

            allure([
                includeProperties: false,
                results: [[path: 'allure-results']]
            ])
        }

        success {
            echo 'Playwright execution successful!'
        }

        failure {
            echo 'Playwright execution failed. Check reports and logs.'
        }
    }
}
