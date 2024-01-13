import { ReactNode } from "react";

interface Props{
    children: ReactNode
}
const Container = ({children} : Props) => {
    return (
        <div className="my-[50px] mx-[55px]">
           {children} 
        </div>
    );
};

export default Container;