// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';


const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://coffee-store-server-580w9go2i-sk-sajibs-projects.vercel.app/coffee/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your coffee has been deleted.',
                                'success'
                            )
                            const remainning = coffees.filter(cof => cof._id !== _id)
                            setCoffees(remainning)
                        }

                    })

            }
        })
    }


    return (
        <div className="card card-side shadow-xl border bg-[#F5F4F1]">
            <figure><img src={photo} alt="Coffee" className="w-52 h-52" /></figure>
            <div className="flex justify-between w-full pr-8">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Quantity: {quantity}</p>
                    <p>Supplier: {supplier}</p>
                    <p>Taste: {taste}</p>
                    <p>Price: 890 Taka</p>
                </div>
                <div className="">
                    <div className="join join-vertical space-y-10">
                        <button className="btn join-item">View</button>
                        <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CoffeeCard;


// CoffeeCard.propTypes = {
//     coffee: PropTypes.object.isRequired,
//     coffees: PropTypes.object.isRequired,
//     setCoffees: PropTypes.object.isRequired
// }