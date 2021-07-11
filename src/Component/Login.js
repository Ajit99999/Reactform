import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';




class Login extends React.Component {
    var2 = false;
    constructor(props){
        super(props);
        this.state = { email: '', password: '' ,textStyle:'',message:''}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }

    reset = (e)=>{
        
        this.setState({email:'',password:''})
    }
    handleLogin = async  (e) => {
        

        e.preventDefault();



        if(this.state.email === '' || this.state.password === '' ){
            this.var2 = false;
            this.setState({message:"All fields are mandatory", textStyle:"danger"})
        }
        else{
            this.setState({message:"", textStyle:""})
            const res = await fetch('/login',{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:  JSON.stringify({
                  
                  password:this.state.password,
                 
                  email: this.state.email
                })
            });
              
              console.log(res);
              
            if(res.status === 404){
                this.var2 = false;
                alert('Invalid Credentials');
            }
            else{
                this.var2 = true;
                alert('Valid credentials');
                window.location.href='/dashboard';

            }
          
            
           
        }




       
    }
    render() {
        return(<React.Fragment>
            <div className="row">   
                <div className=" col px-md-5 col-md-8"style={{marginLeft:'30%',marginTop:"2%"}} >
                <h3  style={{marginLeft:'15%'}}>Login Page</h3>
                
            <form   method='POST' onSubmit={this.handleLogin}>
                <div className="form-group ">
                    <label >Email:</label>
                    <input style={{width:'50%'}}  type="text" className="form-control" value={this.state.email} id="email" placeholder="Enter Email" name="email" onChange={this.setEmpState} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input style={{width:'50%'}} type="password" className="form-control" value={this.state.password} id="password" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>

                {this.state.message !== '' && <div className={`text text-${this.state.textStyle}`}>{this.state.message}</div>}
                <br>
                </br>
              
                <button className="btn btn-primary btn-danger" style={{ marginLeft:'10%'}} onClick={this.reset} > Reset </button> 
               <button  style={{ marginLeft:'10%'}} type="submit" className="btn btn-primary">Login</button>
              
           </form>
           </div>
           </div>
        </React.Fragment>)
    }
}
export default Login;
