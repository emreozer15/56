import Head from "next/head";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { UserInput } from "@/types";
import { useRouter } from "next/router";
import UserService from "@/services/UserService";
import { json } from "stream/consumers";
import UserInfo from "@/components/users/UserInfo";


const ReadUserById = () => {
    const [user, setUser] = useState<UserInput | null>(null);

    const router = useRouter()
    const {userId} = router.query


const getUserById = async () => {
        const [userResponse] = await Promise.all([UserService.getUserById(userId as string)])
        const [userr] = await Promise.all([userResponse.json()])
        setUser(userr);
}

useEffect(() => { //continu word gerendert
    if (userId)
    getUserById()
})

return (
    <>
    <Head>
        <title>User info</title>
    </Head>
    <Header/>
    <main>
        <h1>Info of {user && user.name}</h1>
        {!userId && <p>Loading</p>}

        <section>
        {user !== null && <UserInfo user={user} />}

        </section>
    </main>
    
    </>
)
}


export default ReadUserById
