import React from 'react';
import Input from '../UI/Input';
import Title from '../Layout/Title';
import { useForm } from 'react-hook-form';
import Button from '../UI/Button';
import FlexContainer from '../UI/FlexContainer';
import Message from '../UI/Message';

const Form = ({ info }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      login: '',
      password: '',
      confirmPassword: '',
    },
  });
  const submitHandler = (data, e) => {
    e.preventDefault();
    info(isValid, login);
    reset();
  };
  const currentPassword = watch('password');
  const login = watch('login');
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FlexContainer direction={'column'} gap={'15px'}>
          <Title text="Log In Page" />
          <Input
            placeholder="Login"
            {...register('login', {
              required: 'Login is required',
              minLength: {
                value: 5,
                message: 'Login must be atleast 5 chars',
              },
            })}
          />
          {errors?.login?.message && <Message>{errors.login.message}</Message>}
          <Input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: 'Password must be atleast 8 chars',
              },
            })}
          />
          {errors?.password?.message && (
            <Message>{errors.password.message}</Message>
          )}
          <Input
            type="password"
            placeholder="Confirm password"
            {...register('confirmPassword', {
              required: 'Confirm your password',
              minLength: {
                value: 8,
                message: 'Password must be atleast 8 chars',
              },
              validate: (value) =>
                value === currentPassword ||
                'Password and current password are not the same',
            })}
          />
          {errors?.confirmPassword?.message && (
            <Message>{errors.confirmPassword.message}</Message>
          )}
          <Button type="submit" disabled={!isValid}>
            Log In
          </Button>
        </FlexContainer>
      </form>
    </>
  );
};

export default Form;
