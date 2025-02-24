'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRegisterMutation } from '@/store/auth/authApi';
import { yupResolver } from '@hookform/resolvers/yup';
import { ValidateSchemaSignUp } from './ValidateSchemaSignUp';
import { Input } from '../Input/Input';
import { Loader } from '../Loader/Loader';

import styles from './SignUpForm.module.css';

export type SignUpFormType = {
    username: string;
    // role?: 'client' | 'business';
    email: string;
    password: string;
    confirmPassword: string;
};

export const SignUpForm = () => {
    const [role, setRole] = useState('client');
    const [registerUser, { isLoading }] = useRegisterMutation();
    const navigation = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<SignUpFormType>({
        mode: 'onSubmit',
        resolver: yupResolver(ValidateSchemaSignUp)
    });

    const onSubmit: SubmitHandler<SignUpFormType> = async ({ email, username, password }) => {
        try {
            await registerUser({ email, username, password, role });

            navigation.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    if (isLoading) return <Loader />;

    console.log(role);

    return (
        <div className={styles.signUpContainer}>
            <div className={styles.secondSignUpContainer}>
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
                            placeholder='Enter password'
                            label='Password'
                            id='password'
                            register={register('password')}
                            error={errors.password?.message}
                        />
                        <Input
                            type='password'
                            placeholder='Confirm password'
                            label='Confirm password'
                            id='confirmPassword'
                            register={register('confirmPassword')}
                            error={errors.password?.message}
                        />
                    </div>
                    <button className={styles.signUpSubmitButton} type='submit'>
                        Register
                    </button>
                </form>
                <div className={styles.loginNav}>
                    <p className={styles.loginNavText}>Already have an account?</p>
                    <Link className={styles.loginNavLink} href='/signin'>
                        Log in
                    </Link>
                </div>
            </div>
        </div>
    );
};
