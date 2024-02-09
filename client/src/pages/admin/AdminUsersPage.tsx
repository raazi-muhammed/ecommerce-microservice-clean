import { useEffect, useState } from "react";
import { Button, Card } from "@nextui-org/react";
import API from "../../lib/client";
import { UserType } from "../../types/databaseTypes";
import toast from "react-hot-toast";

type Props = {};

export default function AdminUsersPage({}: Props) {
    const [userList, setUserList] = useState<UserType[]>([]);
    const [refresh, setRefresh] = useState<boolean>(false);
    const refreshPage = () => setRefresh((r) => !r);
    useEffect(() => {
        const api = new API();
        api.user()
            .get("/all-users")
            .then((res) => {
                console.log(res);
                setUserList(res.data);
            })
            .catch((err) => console.log(err));
    }, [refresh]);

    function handleBlockUser(id: string) {
        const api = new API();
        api.user()
            .patch("/block-user", { data: { id } }, { toast })
            .then(() => {
                refreshPage();
            });
    }
    function handleUnBlockUser(id: string) {
        const api = new API();
        api.user()
            .patch("/un-block-user", { data: { id } }, { toast })
            .then(() => {
                refreshPage();
            });
    }
    return (
        <div>
            <section className="flex gap-4 flex-wrap mx-auto">
                {userList.map((user) => (
                    <Card className="p-4 space-y-4 w-52" isPressable={true}>
                        <div className="flex flex-col">
                            <small className="text-start text-default-500">
                                Email
                            </small>
                            <p>{user?.email}</p>
                        </div>
                        <div className="flex flex-col flex-start">
                            <small className="text-start text-default-500">
                                Username
                            </small>
                            <p className="w-fit">{user?.username}</p>
                        </div>
                        <div className="flex-grow">
                            {user.isBlocked ? (
                                <Button
                                    color="primary"
                                    variant="flat"
                                    onClick={() => handleUnBlockUser(user._id)}>
                                    Unblock
                                </Button>
                            ) : (
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onClick={() => handleBlockUser(user._id)}>
                                    Block
                                </Button>
                            )}
                        </div>
                    </Card>
                ))}
            </section>
        </div>
    );
}
