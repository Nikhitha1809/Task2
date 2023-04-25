import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client'

// const link = new createHttpLink({
//   uri: "http://localhost:4000/graphql"
// });
const client=new ApolloClient({
  uri:'https://khoros-graphql-api.vercel.app/api/graphql',
  cache:new InMemoryCache(),
  
})

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>
)