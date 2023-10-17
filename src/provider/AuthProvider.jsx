import { createContext, useState } from "react";

// firebase er doc theke get start e giye auth niye aste hobe
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";






export const AuthContext = createContext(null)  //1st kaj context create kora then export korte hoibo onno jay gate input korrar jonno. default akdhik ber deya jay na



const AuthProvider = ({children}) => {  
    //children gula k neyar jonno children ta k nibo then authContex.Provider er modhe call kore dibo. jate children k sobai use korte pare. er por main.js e jaia <AuthProvider> k  add kore dite hoibo and er vitore  router provider ta k rakhte hoibo. Then AuthContext.Provider er braket er modhe value ta bosaite hoibo. jeita ovarol context er sob jaygay pawa jaibo.

    const [user, setUser] = useState(null)  // jokhon kono user login ba registation korbe tokhon amra user guli k peye jabo . 1st e kono user thake na bole null likhbo
    const [loading, setLoading] = useState(true);  //private rout er jonno loading ta korte paro

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)  //eikhane auth ta AuthProvider er  upore ase r email r password ta parameter hise ase.
    }


    const userInfo = {
        user, // vivinno jayga theke jehetu use korbo tar jonno eikhane pathaia dilam.aro onno jinish ow anbo
        loading,
        createUser,
    }



    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;