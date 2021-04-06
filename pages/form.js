import FormField from '../Components/FormField'
import { Formik } from 'formik';

const Form = () => {
    return ( 
        <div>
             <header>
                <title>Form Required</title>
               <h1>
                please fill in same data <b style={{color:'blue'}}> about your self</b>
               </h1>
               <Formik 
               onSubmit={() => {}}
                initialValues={{
                email:'' ,
                firstName: '',
                lastName: '',
                password: '',
               }} >
                   
               </Formik>
            </header>
        </div>
    );
}
export default Form;