import { useDispatch, useSelector } from 'react-redux';
import { reserveBusinessConsultant, selectAllConsultants } from '@/store/client/clientSlice';
import { useGetAllBusinessQuery } from '@/store/client/clientApi';
import { Loader } from '../Loader/Loader';

import styles from './UserMainInfo.module.css';

export interface IResponse {
    _id: string;
    username: string;
    email: string;
    role: 'client' | 'business';
    reserved?: boolean;
}

export const UserMainInfo = () => {
    const { data, isLoading } = useGetAllBusinessQuery({});
    const dispatch = useDispatch();
    const businessUsers = useSelector(selectAllConsultants);

    console.log('from store', businessUsers);

    if (isLoading) {
        return <Loader />;
    }

    const handleReserve = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const choosenConsultant = businessUsers.find((item) => item._id === id);

        dispatch(reserveBusinessConsultant({ ...choosenConsultant, reserved: e.target.checked }));
    };

    return (
        <section>
            <ul className={styles.businessUsersList}>
                {data &&
                    businessUsers.map(({ _id, username, email, role }: IResponse) => (
                        <li key={_id} className={styles.businessUsersListItem}>
                            <p className={styles.username}>Name: {username}</p>
                            <p className={styles.userInfo}>Email: {email}</p>
                            <p className={styles.userInfo}>Role: {role}</p>
                            <div className={styles.checkboxContainer}>
                                <label htmlFor={_id} className={styles.userLabel}>
                                    Choose this consultant
                                </label>
                                <input
                                    id={_id}
                                    type='checkbox'
                                    placeholder='Choose'
                                    onChange={(e) => handleReserve(_id, e)}
                                />
                            </div>
                        </li>
                    ))}
            </ul>
        </section>
    );
};
