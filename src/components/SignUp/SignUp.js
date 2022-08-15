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
  console.log(user)
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
        <div>
            <div className="">
  <div className="card-body">
    <h2 className="text-center text-3xl font-bold">Sign Up</h2>

    <form className='text-center my-form' onSubmit={handleSubmit(onSubmit)}>

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
      <input className='btn btn-primary text-center' type="submit"  value='Sign Up'/>
    </form>
    <p className='text-center'>Already have a Account? <Link className='text-primary' to="/login"><small>Please Login</small></Link></p>
    
    
  </div>
</div>
   </div>
    );
};

export default SignUp;

