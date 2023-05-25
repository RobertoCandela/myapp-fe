import logo from './logo.svg';
import './App.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table } from 'react-bootstrap';
import { useState } from 'react';

// async function GetDipendenti(){
//   const response = await fetch('http://localhost:3000/testApp/dipendenti')


// }
function App() {

  const [dipendenti,setDipendenti] = useState()

  const GetDipendenti = async () =>{

    const response = await fetch('http://localhost:3000/testApp/dipendenti')
  
    const data = await response.json()
  
    setDipendenti(data.dipendenti)

    console.log(Object.keys(data.dipendenti[0]))
  
    //response returns a promise
  }

  

  return (
    <div className="style">

    <Button onClick={()=>GetDipendenti()}>
      Fetch Employees
    </Button>

    {dipendenti &&<Table striped bordered hover style={{marginTop:10}}>
      <thead>
        <tr className="table-header">
          {Object.keys(dipendenti[0]).map(d=><th>{d}</th>)}
        </tr>
      </thead>
      <tbody>
        {dipendenti.map(d=><tr><td>{d.nome}</td><td>{d.cognome}</td></tr>)}
      </tbody>

    </Table>}
    </div>
    
  );
}

export default App;
