# Project: AWS CDK Workshop

## Project Overview

This project is an AWS CDK application written in TypeScript. It defines a simple serverless application that consists of an API Gateway, a Lambda function, and a DynamoDB table. The application tracks the number of hits to a specific API endpoint. It also includes a custom `HitCounter` construct that encapsulates the logic for counting hits.

The project is structured as a standard CDK project with the following key components:

*   **`bin/cdk-workshop.ts`**: The entry point of the CDK application.
*   **`lib/cdk-workshop-stack.ts`**: Defines the main CDK stack, which includes the API Gateway, Lambda function, and the `HitCounter` construct.
*   **`lib/hitcounter.ts`**: A custom construct that creates a DynamoDB table and a Lambda function to count hits.
*   **`lambda/`**: Contains the source code for the Lambda functions.

## Building and Running

### Prerequisites

*   Node.js and npm
*   AWS CDK Toolkit (`npm install -g aws-cdk`)
*   AWS credentials configured in your environment

### Commands

*   **`npm install`**: Install project dependencies.
*   **`npm run build`**: Compile TypeScript to JavaScript.
*   **`npm run watch`**: Watch for changes and compile.
*   **`npm run test`**: Run unit tests using Jest.
*   **`npx cdk deploy`**: Deploy the stack to your default AWS account/region.
*   **`npx cdk diff`**: Compare the deployed stack with the current state.
*   **`npx cdk synth`**: Emits the synthesized CloudFormation template.

## Development Conventions

*   **Language**: TypeScript
*   **Framework**: AWS CDK
*   **Testing**: Jest
*   **Linting**: The project does not have a linter configured. You might consider adding one like ESLint.
*   **Code Style**: The code follows the standard TypeScript and CDK conventions.
