
import Banner from "../Banner/Banner";
import PopularClass from "../PopularClass/PopularClass";
import PopularTeacher from "../PopularTeacher/PopularTeacher";
import Review from "../Review/Review";


const Home = () => {
    return (
        <div className="">
           <Banner></Banner>
           <PopularClass></PopularClass>
           <PopularTeacher></PopularTeacher>
           <Review></Review>
        </div>
    );
};

export default Home;