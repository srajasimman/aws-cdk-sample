#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();

const environment = app.node.tryGetContext('environment') || 'dev';
const envConfig = app.node.tryGetContext('environments')[environment];

new CdkWorkshopStack(app, 'CdkWorkshopStack', {
  env: {
    account: envConfig.account,
    region: envConfig.region,
  },
  stackName: `CdkWorkshopStack-${environment}`,
  description: `CDK Workshop Stack for ${environment} environment`,
  environment: environment,
  tags: {
    Environment: environment,
    Project: 'CDK Workshop',
  }
});
