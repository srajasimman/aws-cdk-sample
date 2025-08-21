# AWS CDK Sample Project

This project is a sample AWS CDK application that demonstrates how to create a simple serverless application using TypeScript.

## Project Overview

The application consists of the following components:

*   **API Gateway**: Exposes a public endpoint that can be accessed via a URL.
*   **Lambda Function**: A simple Node.js function that is triggered by the API Gateway.
*   **DynamoDB Table**: A NoSQL database that is used to store data.
*   **HitCounter**: A custom construct that counts the number of times the Lambda function is invoked.

## Getting Started

### Prerequisites

*   Node.js and npm
*   AWS CDK Toolkit (`npm install -g aws-cdk`)
*   AWS credentials configured in your environment

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/srajasimman/aws-cdk-sample.git
    ```

2.  Install the dependencies:

    ```bash
    cd aws-cdk-sample/cdk-workshop
    npm install
    ```

### Deployment

To deploy the application to your AWS account, run the following command:

```bash
npm run cdk deploy
```

This will create a CloudFormation stack and deploy the resources to your account.

## Usage

Once the application is deployed, you can access the API Gateway endpoint to trigger the Lambda function. The endpoint URL will be displayed in the output of the `cdk deploy` command.

## Useful Commands

*   `npm run build`: Compile TypeScript to JavaScript.
*   `npm run watch`: Watch for changes and compile.
*   `npm run test`: Run unit tests.
*   `npx cdk diff`: Compare the deployed stack with the current state.
*   `npx cdk synth`: Emits the synthesized CloudFormation template.
