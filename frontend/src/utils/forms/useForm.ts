import { useState, ChangeEvent, FormEvent } from 'react';

export const useForm = <T extends Record<string, any>>(initialValues: T, submitFn: (values: T) => Promise<void>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [error, setError] = useState<Error | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((state) => ({ ...state, [event.target.name]: event.target.value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      await submitFn(values);
      setSuccess(true);
    } catch (e) {
      setError(e);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return { values, loading, error, success, handleSubmit, handleInputChange };
};
