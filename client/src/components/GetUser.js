import React from "react"
import { gql, useQuery, NetworkStatus } from "@apollo/client"

const USER = gql`
query User($emailId: String!) {
    user(emailId: $emailId) {
      userName
    }
}`

function GetUser() {
    const [email, setEmail] = React.useState("")
    const { loading, error, data } = useQuery(USER, {
        variables: { email },
    })

    const onSubmit = (e) => {
        e.preventDefault()
        setEmail("")
    }

    return (
        <div className="container p-5">
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <button type="submit" className="btn btn-primary">Search</button>
            </form>
            <div className="mt-2">
                {console.log(data)}
                {!loading && !error && (data)}
            </div>
        </div>
    )
}

export default GetUser;