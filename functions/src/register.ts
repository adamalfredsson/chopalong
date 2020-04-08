import querystring from 'querystring';
import axios from 'axios';

const { GOOGLE_SCRIPT_URL, SLACK_WEBHOOK_URL } = process.env;

export const handler = async (event: any, context: any) => {
  console.log({ event, context });

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  const params = querystring.parse(event.body);
  console.log({ params });

  const email = params.email.toString();

  await saveInGoogleSheets(email);
  await sendSlackMessage(email);

  return {
    statusCode: 200,
    body: `Hello, ${name}! Your greeting has been sent to Slack 👋`,
  };
};

const saveInGoogleSheets = async (email: string): Promise<void> => {
  await axios.post(GOOGLE_SCRIPT_URL!, { email });
};

const sendSlackMessage = async (email: string): Promise<void> => {
  await axios.post(SLACK_WEBHOOK_URL!, {
    text: `${email} says hello!`,
  });
};
