import { Form, FormControlProps } from "react-bootstrap";

interface InputPropsI extends FormControlProps {
    label?: any;
    labelClassName?: string;
    groupClassName?: string;
    text?: any;
}

const Input = ({ groupClassName, label, labelClassName, text, ...props}:InputPropsI) => {
    return (
        <Form.Group className={groupClassName}>
            <Form.Label className={labelClassName}>{label}</Form.Label>
            <Form.Control {...props}/>
            {text && <Form.Text>{text}</Form.Text>}
        </Form.Group>
    )
}
export default Input;