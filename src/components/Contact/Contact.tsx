import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '~/src/utils/validation-schema/contact-form';
import Input from '@components/Input/Input';
import Textarea from '@components/Textarea/Textarea';
import styles from './Contact.module.scss';

type FormFields = { name: string; email: string; message: string };

const Contact = () => {
  const [showSuccessMsg, setShowSuccessMsg] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormFields>({
    resolver: yupResolver(contactFormSchema)
  });

  const handleFormSubmit = (data: FormFields) => {
    // eslint-disable-next-line no-console
    console.log(data);

    reset();

    setShowSuccessMsg(true);
    setTimeout(() => {
      setShowSuccessMsg(false);
    }, 3000);
  };

  return (
    <section className={styles.container}>
      <div>
        <h2 className={styles.title}>QUESTION? WE ARE HERE TO HELP!</h2>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
            <div className={styles.formControl}>
              <Input type="text" label="name" {...register('name')} error={errors.name?.message} />
              <Input
                type="email"
                label="email"
                {...register('email')}
                error={errors.email?.message}
              />
              <Textarea label="message" {...register('message')} error={errors.message?.message} />
            </div>
            <input type="submit" value="SEND" />
          </form>
          {showSuccessMsg && (
            <span className={styles.submitMessage}>
              Thanks for getting in touch, we'll get back to you as soon as possible
            </span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
