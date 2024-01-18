import './App.css';
import  { useState } from 'react';

function App() {
 const[weight,setweight]= useState(0)
 const[height,setheight]= useState(0)
 const[bmi,setbmi]=useState(" ")
 const [messages,setmessage]=useState(" ")

 const calcbmi=(e)=>{
      e.preventDefault();
      if(weight===0 || height===0)
      {
        alert("please enter a valid weight and height")
      }
      else if(typeof weight || height === 'string') {
        alert(' strings are not acceptable please input valid weight and height ');
      } 

      else{

        let bmi=(weight/(height*height)*703)
        setbmi(bmi.toFixed(1))
        if(bmi<25)
        {
          setmessage("You are underweight ")
        }
        else if(bmi>=25 && bmi < 30)
        {
          setmessage("you are in balanced weight('HEALTHY')")
        }
        else{
          setmessage("you are overweight 🔥")
        }
      }
 }





 const reload=()=>{
  window.location.reload();
  
 }

  return (
     <div className="App">
     
     <div className="container">
     <h2>BMI Calculator</h2>
     <form action="" onSubmit={calcbmi}>
     <div>
       <label>weight (ibs)</label>
       <input type="text" placeholder="Enter weight value" value={weight} onChange={(e)=>setweight(e.target.value)} />

     </div>
     <div>
     <label >Height (in)</label>
     <input type="text" placeholder="Enter height value" value={height} onChange={(e)=>setheight(e.target.value)} />

   </div>
   <div>
   <button className="btn" type="submit">Submit</button>
   <button className="btn btn-outline" onclick={reload}>Reset</button>
   </div>
   <div className="center">
   <h3>Your BMI is: {bmi }</h3>
   <p>{messages}</p>
   </div>
     
     </form>
     </div>
     </div>
  );
}

export default App;
