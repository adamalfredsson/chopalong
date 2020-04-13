import { useForm } from './useForm';
import axios from 'axios';

type LoginInput = { email: string };

export const useSignupForm = (initialValues: LoginInput = { email: '' }) => {
  const endpoint = process.env.REACT_APP_API_URL! + '/signup';

  return useForm<LoginInput>(initialValues, async (values) => {
    await axios.post(endpoint, { email: values.email });
  });
};
