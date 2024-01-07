import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useState } from 'react';
import { UserInput } from '@/types';
import UsersOverviewTable from '@/components/users/UsersOverviewTable';
import { types } from 'util';
import UserService from '@/services/UserService';
import Header from '@/components/Header';


const Users: React.FC = () => {
    const [users, setUsers] = useState<Array<UserInput>>();

    const getUsers = async () => {
        const response = await UserService.getAllUsers();
        const userss = await response.json()
        setUsers(userss)
    }

    useEffect(() => {
        getUsers()
        },
        []  //[] na de eerste render word op stop gezet
    ) 



    return (
        <>
        <Head>
            <title>Users</title>
        </Head>
        <Header></Header>

        <main className={styles.main}>        

        <h1>Users</h1>
        <section>
            {users && (
                <UsersOverviewTable users={users}/>
            )}

        </section>
        </main>

        </>
        
    );
};

export default Users;


