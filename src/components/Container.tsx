import { ReactNode } from "react";

interface Props{
    children: ReactNode
}
const Container = ({children} : Props) => {
    return (
        <div className="py-[50px] px-[55px]">
           {children} 
        </div>
    );
};

export default Container;