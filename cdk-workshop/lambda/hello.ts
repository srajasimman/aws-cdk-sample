export async function handler(event: any) {
  console.log('request:', JSON.stringify(event, undefined, 2));
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'application/json' },
    body: `Hello, CDK! You've hit ${event.path}\n`
  };
};
