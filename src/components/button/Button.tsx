import { Button as BtsButton, ButtonProps } from "react-bootstrap";

interface ButtonPropsI extends ButtonProps {
    children: any;
}

const Button = ({ children, ...props }: ButtonPropsI) => {
    return (
        <BtsButton {...props}>{children}</BtsButton>
    )
}
export default Button;