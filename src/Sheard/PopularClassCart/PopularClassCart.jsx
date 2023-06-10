import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const PopularClassCart = ({ item }) => {
    const { user } = useContext(AuthContext)
    const { image, className, instructorName, totalSeats, studentNumber, price, availableSeats } = item;
    return (
        <div className="card my-4 w-96 mx-auto glass">
            <figure><img className="h-72  w-full" src={image} alt="photo!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-mono text-secondary">Name: {className}</h2>
                <p className="font-bold">Instructor Name: {instructorName}</p>
                <div className="flex flex-none m-0">
                    <p className="">Available Seats: {availableSeats}</p>
                    <p>Total students: {studentNumber}</p>
                </div>
                <p>Price: ${price}</p>
            </div>
        </div>
    );
};

export default PopularClassCart;