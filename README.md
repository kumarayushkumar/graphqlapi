# GraphqlAPI
Simple Graphql CRUD operations

## To add User
mutation {
  addUser(emailId: "xyz@gmail.com", userName: "xyz", password: "zyx") {
    userName
  }
}

## To delete 
mutation {
  deleteUser(emailId: "xyzs@gmail.com") {
    emailId
  }
}

## To update
mutation {
  updateUser(emailId: "xyz@gmail.com", newUserName: "new_xyz") {
    userName
  }
}

## To fetch
{
  user(emailId: "xyz@gmail.com") {
    userName
  }
}
