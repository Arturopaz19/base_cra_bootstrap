import { Form, FormControlProps } from "react-bootstrap";

interface InputPassPropsI extends FormControlProps {
    label?: any;
    labelClassName?: string;
    groupClassName?: string;
    text?: any;
}

const Input = ({ groupClassName, label, labelClassName, text, ...props}:InputPassPropsI) => {
    return (
        <Form.Group className={groupClassName}>
            <Form.Label className={labelClassName}>{label}</Form.Label>
            <Form.Control type="password" {...props}/>
            {text && <Form.Text>{text}</Form.Text>}
        </Form.Group>
    )
}
export default Input;