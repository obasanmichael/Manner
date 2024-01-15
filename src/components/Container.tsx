import { ReactNode } from "react";

interface Props{
    children: ReactNode
    backgroundColor: string;
}
const Container = ({children, backgroundColor} : Props) => {
    return <div className={`py-[50px] px-[55px] ${backgroundColor}`}>{children}</div>;
};

export default Container;