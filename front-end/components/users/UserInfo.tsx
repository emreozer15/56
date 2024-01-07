import { UserInput } from "@/types";


type Props = {
    user: UserInput
}


const UserInfo: React.FC<Props> = ({user}: Props) => {
    return (
        <>
            {user && (
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>{user.password}</p>
                </div>
            )}
        </>
    )

}

export default UserInfo;