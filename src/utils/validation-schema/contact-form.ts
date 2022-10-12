import * as Yup from 'yup';

export const contactFormSchema = Yup.object().shape({
  name: Yup.string().required('Name field is required'),
  message: Yup.string()
    .required('This field is required')
    .min(6, 'Message must be at least 6 characters')
    .max(500, 'Message must not exceed 20 characters'),
  email: Yup.string().required('Email is required').email('Email is invalid')
});
