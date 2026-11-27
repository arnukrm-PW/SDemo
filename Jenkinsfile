
pipeline {
    agent any

    triggers {
        parameterizedCron('''
            0 9 * * 1-5 %TEST_SUITE=smoke;BROWSER=chromium
            0 22 * * 5 %TEST_SUITE=regression;BROWSER=all
        ''')
    }

    parameters {
        choice(
            name: 'TEST_SUITE',
            choices: ['smoke', 'sanity', 'regression', 'all'],
            description: 'Select the test suite to execute'
        )

        choice(
            name: 'BROWSER',
            choices: ['chromium', 'firefox', 'webkit', 'all'],
            description: 'Select the browser for execution'
        )
    }

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

        stage('Clean Previous Reports') {
            steps {
                bat '''
                    if exist allure-results rmdir /s /q allure-results
                    if exist allure-report rmdir /s /q allure-report
                    if exist playwright-report rmdir /s /q playwright-report
                    if exist test-results rmdir /s /q test-results
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                script {
                    def grepArg = params.TEST_SUITE == 'all'
                        ? ''
                        : "--grep \"@${params.TEST_SUITE}\""

                    def projectArg = params.BROWSER == 'all'
                        ? ''
                        : "--project=${params.BROWSER}"

                    def command = "npx playwright test ${grepArg} ${projectArg}"

                    echo "Selected Suite: ${params.TEST_SUITE}"
                    echo "Selected Browser: ${params.BROWSER}"
                    echo "Executing: ${command}"

                    bat command
                }
            }
        }
    }

    post {
        always {
            script {
                if (fileExists('allure-results')) {
                    catchError(buildResult: 'SUCCESS', stageResult: 'FAILURE') {
                        bat 'npx allure generate allure-results --clean -o allure-report'
                    }
                } else {
                    echo 'No Allure results directory found.'
                }
            }

            archiveArtifacts(
                artifacts: 'playwright-report/**, test-results/**, allure-results/**, allure-report/**',
                allowEmptyArchive: true
            )

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
