import { useEffect, useState } from "react";
import PopularClassCart from "../../../Sheard/PopularClassCart/PopularClassCart";

const PopularClass = () => {
    const [popularClass, setPopularClass] = useState([])
    
    useEffect(() => {
        fetch('https://assingment-12-server-one.vercel.app/popularClass')
            .then(res => res.json()).then(data => setPopularClass(data))
    }, [])
    

    
    return (
        <div className="lg:w-[1280px] mx-auto mt-8">
            <h1 className='uppercase text-[#e50e84] text-center text-4xl font-bold font-serif'>Our Popular Classes</h1>
            <p className="text-center text-slate-400">Popular dance classes typically offer a range of benefits, including physical fitness, <br /> artistic expression, social interaction, and personal enjoyment. These classes often attract individuals with <br /> varying skill levels, from beginners to more experienced dancers.</p>
            <div className=" grid grid-cols-1  lg:grid-cols-3 gap-10  ">


                {
                    popularClass.map(item =><PopularClassCart 
                        key={item._id} 
                        item={item}></PopularClassCart>)
                }
            </div>
        </div>
    );
};

export default PopularClass;