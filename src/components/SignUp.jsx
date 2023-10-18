import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const SignUp = () => {

    const {createUser} = useContext(AuthContext);  //createUser k object akare destract korbo and useContext er modhe AuthContext ta call kore dibo jeita authprovider e export kore rakhsilam.

    const handleSignUp = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user)

            // new user has been created
            const createdAt = result.user?.metadata?.creationTime;
            const user = { email, creationTime: createdAt } // email ta hosse upore email ta
            fetch("https://coffee-store-server-580w9go2i-sk-sajibs-projects.vercel.app/user", {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(user)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        })
        .catch(error => {
            console.error(error)
        })
    }



    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left mb-10">
      <h1 className="text-5xl font-bold">Sign Up now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body" onSubmit={handleSignUp}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default SignUp;