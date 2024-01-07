import React from "react";
import { UserInput } from "@/types";
import { table } from "console";

type Props = {
    users: Array<UserInput>
}

const UsersOverviewTable: React.FC<Props> = ({users}: Props) => {
    return (
        <>
        {(
            <table>
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                        </tr>
                    ))}
                </tbody>
                </table>
        )}
        </>
    )
}


export default UsersOverviewTable;
