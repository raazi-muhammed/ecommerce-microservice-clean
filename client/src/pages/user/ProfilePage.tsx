import { useEffect, useState } from "react";
import API from "../../lib/client";
import { UserType } from "../../types/databaseTypes";
import { Avatar } from "@nextui-org/react";

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
        <div>
            <p>ProfilePage</p>
            {user ? (
                <section>
                    <Avatar
                        isBordered
                        showFallback
                        src="https://i.pravatar.cc/150?u=a04258114e29026708"
                        className="w-20 h-20 text-large"
                    />
                    <p>{user.username}</p>
                    <p>{user.email}</p>
                </section>
            ) : (
                <p>No data</p>
            )}
        </div>
    );
}
