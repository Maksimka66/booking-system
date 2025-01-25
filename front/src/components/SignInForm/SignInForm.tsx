'use client';

import Link from 'next/link';
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
    password: string;
};

export const SignInForm = () => {
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

    const onSubmit: SubmitHandler<SignInFormType> = async ({ email, password }) => {
        try {
            await loginUser({ email, password });

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
