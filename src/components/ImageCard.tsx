import { Link } from "react-router-dom";

interface Props{
    img_url: string;
    path: string;
    label: string;
}


const ImageCard = ({img_url, path, label}: Props) => {
    return (
        <div className="relative max-w-[350px] max-h-[350px] overflow-hidden rounded-xl">
            <Link className=" w-full h-full" to={path}>
                <img className="brightness-50 w-full h-full object-cover" src={img_url} alt="" />
                <p className="absolute text-5xl inset-0 flex items-center justify-center text-white text-center">{label}</p>
            </Link>
        </div>
    );
};

export default ImageCard;