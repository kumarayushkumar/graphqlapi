import React from "react"
import { gql, useMutation } from "@apollo/client"

const UPDATE_USER_USERNAME = gql`
  mutation UpdateUserUsername($emailId: String!, $newUsername: String!) {
    updateUserUsername(emailId: $emailId, newUsername: $newUsername) {
      userName
    }
  }
`

export default function UpdateUser() {
  const [email, setEmail] = React.useState("")
  const [newUsername, setNewUsername] = React.useState("")

  const [updateUserUsername, { data, loading, error }] = useMutation(UPDATE_USER_USERNAME)

  const onSubmit = (e) => {
    e.preventDefault()
    updateUserUsername({
      variables: {
        emailId: email,
        newUsername: newUsername,
      }
    })
    setEmail("")
    setNewUsername("")
  }

  if (loading) return 'Updating...'
  if (error) return `Update error! ${error.message}`

  return (
    <div className="container p-5">
      <h2>Update User Username</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="newUsername" className="form-label">New Username</label>
          <input type="text" className="form-control" id="newUsername" value={newUsername} onChange={(e) => setNewUsername(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Update Username</button>
      </form>
    </div>
  )
}
