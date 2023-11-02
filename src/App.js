

import { addWord,increment } from './redux/Actions/wordActions';
import { useDispatch,useSelector } from 'react-redux';
import { useState } from 'react';


function App() {

 const items=useSelector((state)=>state||[])
 const dispatch=useDispatch();
  const [search,setSearch]=useState("")
  
  return (
    <div className="App">


      <input placeholder='enter item name' value={search} onChange={(e)=>{
        setSearch(e.target.value)
      }} />
      <button onClick={()=>{
        console.log(search)
       dispatch(addWord(search))
      }}>add</button>
      <h1>word list</h1>
      {
        items.map((item,key)=>(
          <div key={key}>
            <h3>
              {item.name}
            </h3>
          <span>  <p>likes : {item.likes} </p> <button onClick={()=>{
            dispatch(increment(item.name))
          }}>incre</button> </span>
            
          </div>
        ))
      }


    </div>
  );
}

export default App;
