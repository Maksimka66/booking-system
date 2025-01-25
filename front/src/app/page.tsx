'use client';

import { useSelector } from 'react-redux';

import { selectToken } from '@/store/auth/authSlice';
import { Landing } from '@/components/Landing/Landing';
import { UserMainInfo } from '@/components/UserMainInfo/UserMainInfo';

import styles from './page.module.css';

export default function Home() {
    const token = useSelector(selectToken);

    return <main className={styles.mainPage}>{token ? <UserMainInfo /> : <Landing />}</main>;
}

