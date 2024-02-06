import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@nextui-org/react";

type Props = {};

export default function AdminUsersPage({}: Props) {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:4001/api/user/all-users").then((res) => {
            console.log(res);
            setUserList(res.data.users);
        });
    }, []);
    return (
        <div>
            <section className="flex gap-4 flex-wrap">
                {userList.map((user) => (
                    <Card className="p-4" isPressable={true}>
                        <p>{user?.email}</p>
                        <p>{user?.username}</p>
                    </Card>
                ))}
            </section>
        </div>
    );
}
