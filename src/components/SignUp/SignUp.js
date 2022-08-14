import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';

const SignUp = () => {

    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, uError] = useUpdateProfile(auth);
      const [passion, Upassion, pError] = useUpdateProfile(auth);
const navigate = useNavigate()
if( user){
  navigate('/')
}
if( loading || updating){
  return <Loading></Loading>
}
let singInError;
if(error || uError ||pError){
  singInError = <p className='text-red-500'>{error?.message} || {uError?.message} ||{pError?.message}</p>
}

const onSubmit = async data =>{

const userEmail = data.email;
const name = data.name;
const passion = 'student';
const studentInfo = {
  userEmail:userEmail,
  name:name,
  passion:passion

}
if(data.passion.toLowerCase() ==='student'){
  fetch(`http://localhost:5000/student`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(studentInfo)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        
    })
    
}


const userEmail2 = data.email;
const name2 = data.name;
const passion2 = 'teacher';
const teacherInfo = {
  userEmail:userEmail2,
  name:name2,
  passion:passion2

}
if(data.passion.toLowerCase() ==='teacher'){
  fetch(`http://localhost:5000/teacher`, {
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body:JSON.stringify(teacherInfo)
    })
    .then(res =>res.json())
    .then(data =>{
        console.log(data)
        
    })
    
}


await createUserWithEmailAndPassword(data.email, data.password);
await updateProfile({ displayName: data.name});
await passion({ displayName: data.name});

};
  
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-3xl font-bold">Sign Up</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text"><h5>Please Type Your Passion Teacher Or Student</h5></span>
      </label><br/>
  <input 
 
  {...register("passion", {

    required:{
        value: true,
        message:'This field is required'
    } })} type="passion" placeholder="Teacher or Student" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.passion.message}</span>}
 
  </label>
</div>


    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Name</span>
      </label>
  <input 
 
  {...register("name", {

    required:{
        value: true,
        message:'Name is required'
    } })} type="name" placeholder="Enter Your Name" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
 
  </label>
</div>





    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Email</span>
      </label>
  <input
 
  {...register("email", {

    required:{
        value: true,
        message:'Email is required'
    },
    pattern:{
        value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
        message:'provide a valid email'
    }
  })}
  type="email" placeholder="Enter Your Email" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
  {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

    
    
  </label>
</div>
    <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">Pssword</span>
      </label>
  <input 
 
  {...register("password", {

    required:{
        value: true,
        message:'password is required'
    },
    minLength:{
        value:6,
        message:'Password is more than 6 number'
    }
    
  })}
  type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

    
    
  </label>
</div>
      {singInError}
      <input className='btn text-center w-full max-w-xs' type="submit"  value='Sign Up'/>
    </form>
    <p>Already have a Account? <Link className='text-primary' to="/student"><small>Please Login Student Or </small></Link></p>
    <p>Already have a Account? <Link className='text-primary' to="/teacher"><small>Please Login Teacher</small></Link></p>
    
  </div>
</div>
   </div>
    );
};

export default SignUp;









// import React, { useEffect, useState } from 'react';
// import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
// import { Link, useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Loading from '../Loading/Loading';


// const SignUp = () => {
  
//     const [userInfo, setUserInfo] = useState({
//         email: "",
//         password : '',
//         confirmPass: ""
//     })
  
//     const [error, setError] = useState({
//         emailError : "",
//         passWordError: ""
//     })
  
  
  
    
//     const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  
//       const [
//           createUserWithEmailAndPassword,
//           user,
//           loading,
//           hookError,
//         ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
//         const navigate = useNavigate();
//       useEffect(() =>{
//           if(user){
//               navigate('/home')
//           }
//       },[user])
  
//       useEffect(() =>{
//           if(hookError){
//               toast(hookError.message)
//        }
//       },[hookError,googleError])
  
//       const emailCheck = (e) =>{
//           const emailRegex = /\S+@\S+\.\S+/;
//          const validEmail = emailRegex.test(e.target.value);
//          if(validEmail){
//           setUserInfo({...userInfo, email:e.target.value})
//           setError({...error, emailError: ''})
//          }else{
//           setError({...error, emailError: 'Invalid Email'})
//           setUserInfo({...userInfo, email:''})
//          }
//           }
   
//       const passwordCheck = (e) =>{
//           const passwordRegex = /.{6,}/;
        
//           const validPassWord = passwordRegex.test(e.target.value);
//           if(validPassWord){
//               setUserInfo({...userInfo, password:e.target.value})
//               setError({...error, passWordError: ''})
//              }else{
//               setError({...error, passWordError: 'Invalid Password'})
//               setUserInfo({...userInfo, password:''})
//              }
//              console.log(userInfo)
//        }
  
//        const confirmPasswordCheck = (e)=>{
         
//           if(e.target.value === userInfo.password){
//               setUserInfo({...userInfo, confirmPass: e.target.value})
//               setError({...error, passWordError: ''})
//              }else{
  
//               setError({...error, passWordError: 'dont Match'})
//               setUserInfo({...userInfo, confirmPass:"" })
//              }
//        }
//        const [Loadinguser, Userloading] = useAuthState(auth);
//        if(Userloading){
//          return <Loading></Loading> ;  
//        }
   
          
      
  
//    const handleSubmit =(e)=>{
//      e.preventDefault();
     
//      createUserWithEmailAndPassword(userInfo.email, userInfo.password);
  
   
//    }
  
//       return (
//           <div>
              
//           <form onSubmit={handleSubmit} className='d-flex justify-content-center login-form'>
//          <div>
//          <h1 className='form-title'>Please Register</h1>
//               <label htmlFor="email">Email</label>
//               <input onChange={emailCheck} className='d-block' placeholder='Enter Your Email' type="email" name="email" id="email" />
//              {error?.emailError && <p className='text-danger'>{error.emailError}</p>}
             
//               <label htmlFor="password">Password</label>
//               <input onChange={passwordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="password" id="password" />
//               {error?.passWordError&& <p className='text-danger'>{error.passWordError}</p>}
//               <label htmlFor="password">Confirm Password</label>
//               <input onChange={confirmPasswordCheck} className='d-block mt-2' type="password" placeholder='Enter Your Password' name="confirmPassword" id="password" />
//               <p></p>
//              <input className='bg-warning border-0 py-2 mt-2 fs-5' type="submit" value="Register" />
//              <p>Already have a Account<Link to = "/login">Please Login
//              </Link></p>
             
//              <ToastContainer/>
//          </div>
//           </form>
//           <button onClick={()=>signInWithGoogle()} className='btn btn-info google-signIn'>Google SignIn</button>
//       </div>
      
//       );
//   };
  
//   export default SignUp;