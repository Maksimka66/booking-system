import { useDispatch, useSelector } from 'react-redux';
import { clearReducer, selectUsername } from '@/store/auth/authSlice';

import styles from './ClientHeader.module.css';
import Link from 'next/link';

export const ClientHeader = () => {
    const dispatch = useDispatch();

    const username = useSelector(selectUsername);

    const handleLogout = () => {
        dispatch(clearReducer());
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h2 className={styles.headerUsername}>Hello, {username}</h2>

                <Link href='/change-user'>Change your info</Link>

                <button className={styles.logoutBtn} onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </header>
    );
};
