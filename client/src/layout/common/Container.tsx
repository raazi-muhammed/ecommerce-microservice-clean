import { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Container({ children }: Props) {
    return <div className="max-w-[1024px] mx-auto">{children}</div>;
}
