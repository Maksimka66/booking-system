import { SignUpForm } from '@/components/SignUpForm/SignUpForm';

import styles from './page.module.css';

export default function SignUp() {
    return (
        <main className={styles.container}>
            <SignUpForm />
        </main>
    );
}
