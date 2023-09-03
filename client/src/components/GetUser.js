import React from "react"
import { gql, useQuery } from "@apollo/client"

const USER = gql`
query User($emailId: String!) {
    user(emailId: $emailId) {
      userName
    }
}`

export default function GetUser() {
  const [emailId, setEmailId] = React.useState("")
  const { loading, error, data } = useQuery(USER, {
    variables: { emailId },
  })

  return (
    <div className="container p-5">
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" id="email" value={emailId} onChange={(e) => setEmailId(e.target.value)} />
        </div>
      </form>
      <div className="mt-2">
        {!loading && !error && (data.user != null) && (data.user.userName)}
      </div>
    </div>
  )
}
