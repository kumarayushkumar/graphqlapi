import { gql, useMutation } from "@apollo/client";
import React from "react";

const ADD_USER = gql`
mutation AddUser($emailId: String!, $userName: String!, $password: String!) {
    addUser(emailId: $emailId, userName: $userName, password: $password) {
      userName
    }
  }
`
function AddUser() {
    const [email, setEmail] = React.useState("")
    const [userName, setUserName] = React.useState("")
    const [password, setPassword] = React.useState("")

    const [addUser, { data, loading, error }] = useMutation(ADD_USER)

    const onSubmit = (e) => {
        e.preventDefault()

        addUser({ variables: { 
            emailId: email,
            userName: userName,
            password: password
        }})
        setEmail("")
        setUserName("")
        setPassword("")
    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;
    
    return (
        <div className="container p-5">
            <h2> Add user</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label">Username</label>
                    <input type="email" className="form-control" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Add User</button>
            </form>
        </div>
    )
}

export default AddUser;