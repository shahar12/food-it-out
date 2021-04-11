import FormField from '../Components/FormField'


const Form = () => {
    return ( 
        <div>
             <header>
                <title>Form Required</title>
               <h1>
               please tell us more  <b style={{color:'blue'}}> about yourself</b>
               </h1>
               <form >
                <ul>
                    <FormField name="Enter your name" type="text" required="required"/>
                    <FormField name="Enter your id"  type="text" required="required"/>
                    <FormField name="Entar your Email" type="text" required="required"/>
                    <FormField name="Enter your birthday" type="date" required="required"/>
                    <FormField name="your age" type="number" required="required"/>
                    <FormField name="your corrunt adress" type="text" required="required"/>
                    <FormField label="number of people par House  " type="number" required="required"/>
                    <FormField type="radio" id="yas" value="yes" qus="do you like noa?"></FormField>
                    <FormField type="radio" id="no" value="no"></FormField>
                    <FormField type="radio" id="mybe" value="mybe"></FormField>
                    <FormField type="radio" id="not ok" value="not ok"></FormField>
                    <FormField type="radio" id="ok" value="ok"></FormField>
                    <br></br>
                    <button>Submit</button>
                </ul>               
               </form>
            </header>
        </div>
    );
}
export default Form;