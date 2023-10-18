import Swal from 'sweetalert2'

const AddCoffee = () => {


    const handleAddCoffee = event => {
        event.preventDefault();

        const form = event.target;


        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = { name, quantity, supplier, taste, category, details, photo };
        console.log(newCoffee);


        // send data to the server er jonno 1st fetch
        fetch('https://coffee-store-server-580w9go2i-sk-sajibs-projects.vercel.app/coffee', {   // 1st parameter to link and 2nd parameter method, headers, body
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newCoffee)   // most important part 
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'ok'
                    })
                    form.reset();
                }
            })


    }



    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl font-extrabold">Add New Coffee</h2>
            <form onSubmit={handleAddCoffee}>
                {/* form coffee name and Quantity row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="name" placeholder="Coffee Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="quantity" placeholder="Available Quantity" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Supplier and Taste row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="supplier" placeholder="Coffee Supplier" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="taste" placeholder="Coffee Taste" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Category and Details row */}
                <div className="md:flex mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="category" placeholder="Coffee Category" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control md:w-1/2 ml-4">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="details" placeholder="Coffee Details" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                {/* form Photo URL row */}
                <div>
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className="btn-block bg-[#D2B48C] mt-8 py-3 text-[#331A15] text-2xl border-2 rounded-md hover:border-[#331A15]" />
            </form>
        </div>
    );
};

export default AddCoffee;