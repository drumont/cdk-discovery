import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apiGateway from 'aws-cdk-lib/aws-apigateway';


// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkDiscoveryStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const helloLambda = new lambda.Function(this, 'HelloLambda', {
      runtime: lambda.Runtime.NODEJS_20_X,
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler'
    })

    const gateway = new apiGateway.LambdaRestApi(this, 'hello-api', {
      handler: helloLambda,
      proxy: false
    })

    const helloResource = gateway.root.addResource('hello')
    helloResource.addMethod('GET')
  }
}
