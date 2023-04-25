
import React from 'react';
import './App.css'
import {useQuery, gql} from '@apollo/client';
const FetchingData=gql`
  query GETSubjects{
    messages{
      items{
        id,
        subject,
        body,
      }
    }
  }
  `
function Loader(){
  return(
    <div className='spinner-container'>
      <div className='loading-spinner'></div>
    </div>
  )
}
function App() {
  const {loading, error, data} =useQuery(FetchingData);
  return (
    <> 
    <h1 className='heading'>Fetching data from Graphql</h1>
    
      <div>
        {loading? <Loader/>:
        data.messages.items.map(msg=>(
          <div className='card-container'>
          <p><b>ID: </b>{msg.id}</p>
          <p><b>Subject: </b> {msg.subject}</p>
          <p><b>Body: </b>{msg.body}</p>
          </div>
        )  
      )}
      {error&& <div>Error...</div>}
        
      </div>
    </>
  )
}

export default App
