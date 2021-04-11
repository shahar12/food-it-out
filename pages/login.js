import FormField from '../Components/FormField'

const login = () => {
    return (
        <div>
            <header><title>Login Page</title></header>
            <h1>login</h1>
            <FormField name="user " type="text"></FormField>
            <FormField name="password" type="PassWord"></FormField>
            <br></br>
            <button>login</button>
        </div>
    );
}

export default login;