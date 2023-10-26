import { useState } from 'react';
import './App.css';

function App() {
  const [active,setActive] = useState("")
  
  return (
    <>
      <h2 className='text-center'>Color Change App</h2>
      <div style={{height:'100vh'}} className=' color d-flex  justify-content-center align-items-center w-100'>

        <div style={{backgroundColor:active==="yes"? "black": "" || active==="no"? "green":"" || active==="red"? "red":"" || active==="yell"? "yellow":"",height:'400px',width:'600px'}} className='d-flex  justify-content-center align-items-center border shadow rounded'>
        <div   className='d-flex  justify-content-center align-items-center  '>
            <button  onClick={()=>setActive("yes")}  className='btn text-light bg-info me-2 '>Black</button>
            <button  onClick={()=>setActive("no")}  className='btn text-light bg-success me-2'>Green</button>
            <button  onClick={()=>setActive("red")} className='btn text-light bg-danger me-2'>Red</button>
            <button  onClick={()=>setActive("yell")} className='btn text-light bg-warning '>Yellow</button>

        </div>
        </div>

      </div>
    </>
  );
}

export default App;
