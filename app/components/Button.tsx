import { IconType } from "react-icons/lib";

interface ButtonProps {
    label : string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    disabled?: boolean;
    outline?: boolean;
    small?: boolean;
    icon?: IconType; 
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled,
    outline,
    small,
    icon
}) => {
    return (
        <button 
            className={`
                relative
                disabled:opactiy-70
                disabled:cursor-not-allowed
                rounded-lg
                hoverr:opacity-80
            `}
        >
            {label}
        </button>
    )
 }

 export default Button;