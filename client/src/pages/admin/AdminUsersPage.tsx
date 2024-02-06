import { useEffect, useState } from "react";
import { Card } from "@nextui-org/react";
import API from "../../lib/client";

type Props = {};

export default function AdminUsersPage({}: Props) {
    const [userList, setUserList] = useState([]);
    useEffect(() => {
        const api = new API();
        api.user()
            .get("/all-users")
            .then((res) => {
                console.log(res);
                setUserList(res.users);
            })
            .catch((err) => console.log(err));
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
