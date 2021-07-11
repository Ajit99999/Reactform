import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



class FormValidation extends React.Component {

    var1 = false;
    constructor() {
        super();
        this.state = {
            firstname: "",
            lastname: '',
            cpassword: '',
            doj: '',
            email: '',
            password: '',
            message: '',
            textStyle: ''
        }

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            message: ''
        })
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const validateEmail = (email) => {
            var re = /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i;
            return re.test(email);
        }
        const validatePassword = (password)=>{
            var pa = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,10}$/;
            return pa.test(password);
        }

        const validatename = (name)=>{
            var tempname = /^[A-Za-z]{4}$/;
            return tempname.test(name);
        }
        if (this.state.email === '' || this.state.password === '' || this.state.firstname === '' || this.state.lastname === '') {
            this.var1 = false;
            this.setState({ message: "All fields are mandatory", textStyle: "danger" })
        }
        else {


            if (validateEmail(this.state.email)) {
                this.var1 = true;
            }
            else {
                this.var1 = false;
                this.setState({
                    message: "Please enter a valid email id",
                    textStyle: "danger"
                })
            }
            if (this.state.password !== this.state.cpassword) {
                this.var1 = false;
                this.setState({
                    message: "Password should not be different",
                    textStyle: "danger"
                })
            }
            if(validatePassword(this.state.password) )
                {
                    this.var1 = true;
                }
                else{
                    this.var1 = false;
                    this.setState({message:"Password Should 6 to 10 Characters & it contain one Alpha,small,one numeric character,one Special charater",
                    textStyle:"danger"
                })
                }
            if(validatename(this.state.firstname) && validatename(this.state.lastname)){
                this.var1 = true;
            }     
            else
            {
                this.var1 = false;
                this.setState({message:"Name Should not Contain any numeric character and it should be minimum 4 characters",
                textStyle:"danger"
            })
            }

        }
        
        if (this.var1 === true) {
            const res = await fetch('/signin', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    firstname: this.state.firstname,
                    lastname: this.state.lastname,
                    password: this.state.password,
                    doj: this.state.doj,
                    email: this.state.email
                })
            });
            console.log(res);


            if (res.status === 404) {


                this.setState({
                    message: "User Already Existed",
                    textStyle: "danger"
                })


            }
            else {

                alert("valid registraion");

            }


        }


    }


    render() {
        return (
            <React.Fragment>
                <br />

                <div className="row">
                    <div className=" col px-md-5 col-md-8" style={{ marginLeft: '30%', marginTop: "2%" }}>
                        <form method='POST' onSubmit={this.handleSubmit}>
                            <h3 style={{ marginLeft: '15%' }}>Registration Page</h3>
                            <div className="form-group">
                                <label>FirstName</label>
                                <input style={{ width: '50%' }} className="form-control" name="firstname" type="text" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>LastName:</label>
                                <input style={{ width: '50%' }} className="form-control" name="lastname" type="text" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Date of Birth:</label>
                                <input style={{ width: '50%' }} className="form-control" name="doj" type="Date" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Email:</label>
                                <input style={{ width: '50%' }} className="form-control" name="email" type="text" onChange={this.handleChange} />
                            </div>

                            <div className="form-group">
                                <label>Password:</label>
                                <input style={{ width: '50%' }} className="form-control" name="cpassword" type="password" onChange={this.handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Confirm Password:</label>
                                <input style={{ width: '50%' }} className="form-control" name="password" type="password" onChange={this.handleChange} />
                            </div>
                            {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}<br />
                            <button style={{ marginLeft: '10%' }} className="btn btn-primary btn-success" onClick={this.handleSubmit}>Register</button>
                            <button style={{ marginLeft: '10%' }} className='btn btn-primary btn-danger'
                            onClick={()=>{
                                
                             
                                window.location.href='/login';
                            }
                               
                            }
                            >  Cancel</button>
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default FormValidation;
