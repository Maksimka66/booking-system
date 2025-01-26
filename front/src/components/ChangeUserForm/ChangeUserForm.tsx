'use client';

import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from '../Input/Input';
import { ValidateSchemaChangeUser } from './ValidateSchemaChangeUser';

import styles from './ChangeUserForm.module.css';
import { useChangeUserDataMutation } from '@/store/auth/authApi';
import { Loader } from '../Loader/Loader';

interface IChangeUser {
    username: string;
    email: string;
    password: string;
}

export const ChangeUserForm = () => {
    const [changeUser, { isLoading }] = useChangeUserDataMutation();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<IChangeUser>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaChangeUser)
    });

    const onSubmit: SubmitHandler<IChangeUser> = async ({ email, username, password }) => {
        try {
            await changeUser({ email, username, password });
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) {
        <Loader />;
    }

    return (
        <div className={styles.signUpContainer}>
            <form className={styles.signUpForm} onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.formSignUpContainer}>
                    <Input
                        type='text'
                        placeholder='Enter name'
                        label='Name'
                        error={errors.username?.message}
                        register={register('username')}
                        id='name'
                    />
                    <Input
                        type='email'
                        placeholder='your@email.com'
                        label='Email'
                        id='email'
                        register={register('email')}
                        error={errors.email?.message}
                    />
                    <Input
                        type='password'
                        placeholder='Enter password'
                        label='Password'
                        id='password'
                        register={register('password')}
                        error={errors.password?.message}
                    />
                </div>
                <button className={styles.signUpSubmitButton} type='submit'>
                    Change
                </button>
            </form>
        </div>
    );
};
