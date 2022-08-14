
import { useSignInWithEmailAndPassword} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link} from 'react-router-dom';
import auth from '../../firebase.init';

import Loading from '../Loading/Loading';


const Login = () => {
        const { register, formState: { errors }, handleSubmit } = useForm();
    const [
      signInWithEmailAndPassword,
      user,
      loading,
      error,
    ] = useSignInWithEmailAndPassword(auth);
 
if( loading){
  return <Loading></Loading>
}
let singInError;
if(error){
  singInError = <p className='text-red-500'>{error?.message}</p>
}

const onSubmit = data =>{
console.log(data);
signInWithEmailAndPassword(data.email, data.password)
};




    return (
   <div className='flex justify-center items-center h-screen'>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-center text-3xl font-bold">Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

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
    
  })} type="password" placeholder="Enter Your Password" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
  {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

    
    
  </label>
</div>
      {singInError}
      <input className='btn text-center w-full max-w-xs' type="submit"  value='Login'/>
    </form>
    <p>You have no Account? <Link className='text-primary' to="/register"><small>Create New Account</small></Link></p>

    
  </div>
</div>
   </div>
    );
};

export default Login;