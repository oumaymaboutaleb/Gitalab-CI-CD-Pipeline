# Node.js CRUD API with GitLab CI/CD Pipeline

This repository contains a simple CRUD implementation of a REST API using Node.js, Express, Sequelize, and MySQL. It also includes test cases executed using Mocha and Chai, with code coverage tracked by NYC. The GitLab CI/CD pipeline is set up with stages for optimization, security scanning, testing, building, and deployment.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [GitLab Pipeline](#gitlab-pipeline)
- [Usage](#usage)

## Prerequisites

- Node.js and npm
- MySQL server
- GitLab account and project repository

## Getting Started

1. Clone this repository:

   ```bash
   git clone https://github.com/yourusername/your-nodejs-crud-api.git
   cd your-nodejs-crud-api
2. Install dependencies :
    ```bash
    npm install
## Gitlab Pipeline 
The GitLab CI/CD pipeline is defined in **.gitlab-ci.yml** and includes the following stages:

* Optimization: Optimize Docker image .
* Security Scanning: Check for sensitive data in the repository using tools like GitGuardian.
* Testing: Execute Mocha and Chai test cases and generate code coverage reports using NYC.
* Build: Build the Docker image for the application.
* Deploy: Deploy the Docker image to your chosen hosting platform.
Adjust the pipeline stages and configurations according to your requirements.
## Usage
* Set up your GitLab repository and add the necessary environment variables for your deployment.
* Configure your deployment settings in .gitlab-ci.yml.
* Push your changes to the GitLab repository. The pipeline will automatically trigger.
