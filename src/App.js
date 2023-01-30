import logo from './logo.svg';
import './App.css';
import Add from './components/Add';
import Sub from './components/Sub';
import Students from './components/Students';
import Multi from './components/Multi';
import UserListing from './components/UserListing';
// import Add from './components/Add';

function App() {
  var student1 = {
    "name":"Niharika",
    "age": 19,
    "city":"Mumbai"
  }

  

  return (

      <>
      
      <UserListing/>
      <Multi/>
              <h1>Hello world</h1>
        <h2>Welcome</h2>
        <h2> {9+8}</h2>
        {8+9}

        <Add x={5} y={6}/>
        <Sub x={5} y={6}/>
        <Students data={student1} />
      </>

  );
}

export default App;
