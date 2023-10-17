import { useState } from "react";
import { useLoaderData } from "react-router-dom";



const Users = () => {

    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        // make sure user is confirmed to delete
        fetch(`http://localhost:5000/user/${id}`, {
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                console.log('user deleted successfully')

                // remove the user from the UI
                const remainingUsers = users.filter(user => user._id !== id)
                setUsers(remainingUsers)
            }
        })

    }

    return (
        <div>
            <h2>Users : {loadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Creation Time</th>
                            <th>FAction</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users.map(user => <tr key={user._id}>
                                <td>{user.email}</td>
                                <td>{user.creationTime}</td>
                                <td>
                                    <button onClick={() => handleDelete(user._id)} className="btn">X</button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;