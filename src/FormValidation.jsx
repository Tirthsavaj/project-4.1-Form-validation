import { useState } from "react";
import "./FormDesign.css";

const FormValidation = () => {
    const [input, setInput] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        password: '',
        cpassword: ''
    });

    const [formerror, setFormError] = useState({});

    const handleChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = () => {
        setFormError(validateForm(input));
    }

    const validateForm = (value) => {
        const err = {};
        if (!value.name) {
            err.name = "Name Is Required";
        }
        if (!value.email) {
            err.email = "Email Is Required";
        }
        if (!value.phone) {
            err.phone = "Phone Is Required";
        }
        if (!value.city) {
            err.city = "City Is Required";
        }
        if (!value.password) {
            err.password = "Password Is Required";
        }
        if (!value.cpassword) {
            err.cpassword = "C-password Is Required";
        }
        return err;
    }

    return (
        <div className="form-container">
            <div className="form-wrapper">
                <h1>Fill the Form</h1>
                <table className="form-table">
                    <tr>
                        <td className="label">Name:</td>
                        <td><input type="text" name="name" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="error">{formerror.name}</td>
                    </tr>
                    <tr>
                        <td className="label">Email:</td>
                        <td><input type="text" name="email" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="error">{formerror.email}</td>
                    </tr>
                    <tr>
                        <td className="label">Phone:</td>
                        <td><input type="text" name="phone" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="error">{formerror.phone}</td>
                    </tr>
                    <tr>
                        <td className="label">City:</td>
                        <td><input type="text" name="city" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="error">{formerror.city}</td>
                    </tr>
                    <tr>
                        <td className="label">Password:</td>
                        <td><input type="password" name="password" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="error">{formerror.password}</td>
                    </tr>
                    <tr>
                        <td className="label">C-Password:</td>
                        <td><input type="password" name="cpassword" onChange={handleChange} /></td>
                    </tr>
                    <tr>
                        <td colSpan="2" className="error">{formerror.cpassword}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><button className="submit-button" onClick={handleSubmit}>Submit</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default FormValidation;
