import React from "react"
import { gql, useMutation } from "@apollo/client"

const DELETE_USER = gql`
mutation DeleteUser($emailId: String!) {
    deleteUser(emailId: $emailId) {
      userName
    }
}`

function DeleteUser() {
    const [email, setEmail] = React.useState("")

    const [deleteUser, { data, loading, error }] = useMutation(DELETE_USER)

    const onSubmit = (e) => {
        e.preventDefault()
        deleteUser({
            variables: {
                emailId: email,
            }
        })
        setEmail("")
    }

    if (loading) return 'Submitting...';
    if (error) return `Submission error! ${error.message}`;

    return (
        <div className="container p-5">
            <h2>Delete user</h2>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Delete User</button>
            </form>


        </div>
    )
}

export default DeleteUser;