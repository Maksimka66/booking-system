import Link from 'next/link';
import { AppMainInfo } from '../AppMainInfo/AppMainInfo';

import styles from './Landing.module.css';

export const Landing = () => {
    return (
        <div className={styles.landingPageContainer}>
            <AppMainInfo />
            <div className={styles.routesContainer}>
                <Link className={styles.signInLink} href='/signin'>
                    Log in
                </Link>
                <Link className={styles.signUpLink} href='/signup'>
                    Register
                </Link>
            </div>
        </div>
    );
};
