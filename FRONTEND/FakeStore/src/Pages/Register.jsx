import {useState} from 'react';
function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();


        if(password !== confirmPassword){
            alert("Passwords do not match!!");
            return;
        }

        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Password:", password);

        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };

    return (
        
        <div className="d-flex justify-content-center">
            <div className="border p-3 w-50 mt-5 bg-light shadow rounded">
                <h1 className="text-center">Register</h1>


                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input  
                        type="text"
                        id="name"
                        className="form-control mb-3"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <label htmlFor="email">Email</label>
                    <input  
                        type="email"
                        id="email"
                        className="form-control mb-3"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="password">Password</label>
                    <input  
                        type="password"
                        id="password"
                        className="form-control mb-3"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input  
                        type="password"
                        id="confirmPassword"
                        className="form-control mb-3"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary w-100">
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Register;