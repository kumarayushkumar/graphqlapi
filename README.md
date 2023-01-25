## GraphqlAPI
Simple Graphql api

# To add User
mutation {
  addUser(emailId: "xyz@gmail.com", userName: "xyz", password: "zyx") {
    userName
  }
}

# To delete 
mutation {
  deleteUser(emailId: "xyzs@gmail.com") {
    emailId
  }
}

# To fetch
{
  user(emailId: "xyz@gmail.com") {
    userName
  }
}
