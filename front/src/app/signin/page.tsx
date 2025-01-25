import { SignInForm } from '@/components/SignInForm/SignInForm';

import styles from './page.module.css';

export default function SignIn() {
    return (
        <main className={styles.container}>
            <SignInForm />
        </main>
    );
}
