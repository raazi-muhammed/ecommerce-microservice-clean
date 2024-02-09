import { useEffect, useState } from "react";
import API from "../../lib/client";
import { UserType } from "../../types/databaseTypes";
import { Avatar, Card } from "@nextui-org/react";

export default function ProfilePage() {
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        const api = new API();
        api.auth()
            .get("/current-user")
            .then((res) => {
                console.log(res);
                setUser(res.data as UserType);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    return (
        <div className="mt-8">
            {user ? (
                <section className="space-y-4 max-w-md mx-auto">
                    <Avatar
                        isBordered
                        showFallback
                        src="https://i.pravatar.cc/150?u=a04258114e29026708"
                        className="w-32 h-32 text-large mx-auto"
                    />
                    <Card className="p-4">
                        <small className="text-default-500">USERNAME</small>
                        <p className="text-lg">{user.username}</p>
                    </Card>
                    <Card className="p-4">
                        <small className="text-default-500">EMAIL</small>
                        <p className="text-lg">{user.email}</p>
                    </Card>
                </section>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}
