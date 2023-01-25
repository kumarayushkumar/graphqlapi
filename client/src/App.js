import React from 'react'
import Header from './components/Header';
import GetUser from './components/GetUser';
import AddUser from './components/AddUser';
import DeleteUser from './components/DeleteUser';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
    uri: 'http://localhost:4000/',
    cache: new InMemoryCache(),
})

function App() {
    return (
        <>
            <ApolloProvider client={client}>
                <Header />
                <GetUser />
                <AddUser />
                <DeleteUser />
            </ApolloProvider>
        </>

    )
}

export default App
