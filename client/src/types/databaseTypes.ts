export type UserType = {
    _id: string;
    email: string;
    username: string;
    createdAt: string;
    isBlocked: boolean;
};

export type ProductType = {
    _id: string;
    title: string;
    description: string;
    price: number;
    createdAt: string;
    images: [{ url: string }];
};
