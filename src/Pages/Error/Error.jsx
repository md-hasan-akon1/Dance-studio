import { Link, useRouteError } from "react-router-dom";
import UseTitle from "../../Hooks/useTitle";


const Error = () => {
    const { error, status } = useRouteError()
    UseTitle(error)
    return (
      <section className='container  w-full mx-auto   bg-gray-100 text-gray-900'>
      <img className=' w-full mx-auto my-auto' src="https://i.ibb.co/Qvzq3gT/404-landing-page-free-vector.webp" alt="" />
           <div className='text-center '>
             
             <p className='text-2xl font-semibold md:text-3xl mb-8'>
               {error?.message}
             </p>
             <Link
               to='/'
               className='px-8 py-3 font-semibold rounded bg-orange-400 text-gray-900'
             >
               Back to homepage
             </Link>
           </div>
       </section> 
    );
};

export default Error;