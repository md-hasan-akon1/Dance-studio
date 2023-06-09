import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const PopularClassCart = ({ item }) => {
const {user}=useContext(AuthContext)
    const { image, style, instructorName, totalSeats, studentNumber, price } = item;
    const [addCart, setAddCart] = useState(false)
    const [student, setStudent] = useState(studentNumber)
    const [available, setAvailable] = useState(totalSeats - studentNumber)
    const handelStudentCount = (item) => {
        setAddCart(true)
        setAvailable(available - 1)
        setStudent(student + 1)

    }
    return (
        <div className="card mt-4 w-96 glass">
            <figure><img className="h-72  w-full" src={image} alt="photo!" /></figure>
            <div className="card-body">
                <h2 className="card-title font-mono text-blue-700">Name: {style}</h2>
                <p className="font-bold">Instructor Name: {instructorName}</p>
                <div className="flex flex-none m-0">
                    <p className="">Available Seats: {available}</p>
                    <p>Total students: {student}</p>
                </div>
                <div className="flex justify-between">
                    <p>Total Seats: {totalSeats}</p>
                     <p>Price: ${price.amount}</p>
                </div>

                <div className="card-actions justify-end">
                    <button onClick={() => { handelStudentCount(item) }}
                        disabled={available <= 0 || addCart} className="btn btn-primary">add to cart!</button>
                </div>
            </div>
        </div>
    );
};

export default PopularClassCart;