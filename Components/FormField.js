import styleForm from '../styles/Form.module.css' 
import styleInput from '../styles/Form.module.css'
const FormField = ({...args}) => {
    return (
        <div className={styleForm}>
            <il>
            <p>{args.qus}</p>
            <label>{args.label}</label>
            <input className={styleInput} type={args.type} id={args.id} placeholder={args.name} name={args.name} value={args.value} required={args.required}></input>
            <label for={args.id}> {args.id}</label>
            </il>
        </div>
    );
}

export default FormField;