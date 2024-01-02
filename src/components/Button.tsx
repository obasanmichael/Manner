import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

interface Props{
    children: ReactNode;
    bgColor: string;
    textColor: string;
    path: string;
}

const Button = ({ children, bgColor, textColor, path }: Props) => {
    const navigate = useNavigate()
  return (
    <button
      onClick={() => navigate(path)}
      className={` hover:bg-[#353535] hover:text-white py-2 px-6 text-xs font-light ${textColor} ${bgColor} rounded-full`}
    >
      {children}
    </button>
  );
}

export default Button