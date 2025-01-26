'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';

import { useLoginMutation } from '@/store/auth/authApi';
import { Input } from '../Input/Input';
import { ValidateSchemaSignIn } from './ValidateSchemaSignIn';
import { Loader } from '../Loader/Loader';

import styles from './SignInForm.module.css';

export type SignInFormType = {
    email: string;
    username: string;
    password: string;
    role?: string;
};

export const SignInForm = () => {
    const [role, setRole] = useState('client');
    const [loginUser, { isLoading }] = useLoginMutation();
    const navigation = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignInFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignIn)
    });

    const onSubmit: SubmitHandler<SignInFormType> = async ({ email, password, username }) => {
        try {
            await loginUser({ username, email, password, role });

            navigation.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Loader />;

    return (
        <>
            <div className={styles.mainSignInContainer}>
                <div className={styles.signInContainer}>
                    <div className={styles.secondSignInContainer}>
                        <form className={styles.signInForm} onSubmit={handleSubmit(onSubmit)}>
                            <div className={styles.formSignInContainer}>
                                <Input
                                    type='text'
                                    placeholder='Enter name'
                                    label='Name'
                                    error={errors.username?.message}
                                    register={register('username')}
                                    id='name'
                                />
                                <select onChange={(e) => setRole(e.target.value)}>
                                    <option value='client'>Client</option>
                                    <option value='business'>Business</option>
                                </select>
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
                                    placeholder='Password'
                                    label='Password'
                                    id='password'
                                    register={register('password')}
                                    error={errors.password?.message}
                                />
                            </div>
                            <button className={styles.signInSubmitButton} type='submit'>
                                Login
                            </button>
                        </form>
                        <div className={styles.registrationNav}>
                            <Link className={styles.registrationNavLink} href='/signup'>
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
