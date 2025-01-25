import { useSelector } from 'react-redux';
import { selectToken } from '@/store/auth/authSlice';

export default function Home() {
    const token = useSelector(selectToken);
}

