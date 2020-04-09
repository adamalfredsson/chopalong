import axios from 'axios';

const { GOOGLE_SCRIPT_URL, SLACK_WEBHOOK_URL } = process.env;

export const handler = async (event: any, context: any) => {
  if (event.httpMethod === 'OPTIONS') {
    const headers = {
      'Access-Control-Allow-Origin': 'https://chopalong.se',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
      'Access-Control-Allow-Methods': 'POST',
      'Content-Type': 'application/json',
    };
    return { statusCode: 200, headers, body: 'OK' };
  }
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const body = JSON.parse(event.body);
  console.log(body);

  const email = body.email;

  await saveInGoogleSheets(email);
  await sendSlackMessage(email);

  return {
    statusCode: 200,
    body: `Thank you! 👋`,
  };
};

const saveInGoogleSheets = async (email: string): Promise<void> => {
  await axios.post(GOOGLE_SCRIPT_URL!, { email });
};

const sendSlackMessage = async (email: string): Promise<void> => {
  await axios.post(SLACK_WEBHOOK_URL!, {
    text: `${email} says hello! 👋`,
  });
};
