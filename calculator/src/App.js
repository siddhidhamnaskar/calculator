
import './App.css';
import {useState} from "react"

function App() {
   const [inputFirst ,setInputFirst]=useState("");
   const [inputSecond, setInputSecond]=useState("");
   const [symbol, setSymbol]=useState("");

   const setInput=(e)=>{
    e.preventDefault();
      if(inputFirst.length>6 || inputSecond.length>6)
      {

      }
      else if(symbol.length>0)
      {
        setInputSecond((prev)=>prev+e.target.value+"");
      }
      else
      {
        setInputFirst((prev)=>prev+e.target.value+"");
      }
     
   }

   const deleteInput=()=>{
       if(inputSecond.length>0)
       {
         let input=inputSecond;
         input=input.slice(0,-1);
         setInputSecond(input);
       }
       else if(symbol.length>0)
       {
        setSymbol("");
       }
       else if(inputFirst.length>0)
       {
       
        let input=inputFirst;
        input=input.slice(0,-1);
        setInputFirst(input);
       }
   }
   
   const setFunction=(e)=>{
    e.preventDefault();

    if(symbol==="+")
    {
      let number1=parseFloat(inputFirst);
      let number2=parseFloat(inputSecond);
      let number=number1+number2;
      setInputFirst(`${number}`);
      setSymbol(e.target.value);
      setInputSecond("");
    }
    else if(symbol==="-")
    {
      let number1=parseFloat(inputFirst);
      let number2=parseFloat(inputSecond);
      let number=number1-number2;
      setInputFirst(`${number}`);
      setSymbol(e.target.value);
      setInputSecond("");
    }
    else if(symbol==="*")
    {
     
        let number1=parseFloat(inputFirst);
        let number2=parseFloat(inputSecond);
        let number=number1*number2;
        setInputFirst(`${number}`);
        setSymbol(e.target.value);
        setInputSecond("");
      
    }
    else if(symbol==="/")
    {
     
        let number1=parseFloat(inputFirst);
        let number2=parseFloat(inputSecond);
        let number=number1/number2;
        setInputFirst(`${number}`);
        setSymbol(e.target.value);
        setInputSecond("");
      
    }
    else if(inputFirst.length>0)
    {
      setSymbol(e.target.value);
    }
      
   }

   const calculate=()=>{
      if(symbol==="+")
      {
        let number1=parseFloat(inputFirst);
        let number2=parseFloat(inputSecond);
        let number=number1+number2;
        setInputFirst(`${number}`);
        setSymbol("");
        setInputSecond("");
      }
      else if(symbol==="-")
      {
        let number1=parseFloat(inputFirst);
        let number2=parseFloat(inputSecond);
        let number=number1-number2;
        setInputFirst(`${number}`);
        setSymbol("");
        setInputSecond("");
      }
      else if(symbol==="*")
      {
       
          let number1=parseFloat(inputFirst);
          let number2=parseFloat(inputSecond);
          let number=number1*number2;
          setInputFirst(`${number}`);
          setSymbol("");
          setInputSecond("");
        
      }
      else if(symbol==="/")
      {
       
          let number1=parseFloat(inputFirst);
          let number2=parseFloat(inputSecond);
          let number=number1/number2;
          setInputFirst(`${number}`);
          setSymbol("");
          setInputSecond("");
        
      }
   }


  return (
    <div className="App">


      <div className="calculator">
        <div className="input_box">
             <div className='input1'>{inputFirst}</div>
             <div className='symbol'>{symbol}</div>
             <div className='input2'>{inputSecond}</div>
        </div>
        <div className="keyboard">
            <div className="numbers"> 
                <div><button value="7" onClick={setInput}>7</button></div>
                <div><button value="8" onClick={setInput}>8</button></div>
                <div><button value="9" onClick={setInput}>9</button></div>
                <div><button value="4" onClick={setInput}>4</button></div>
                <div><button value="5" onClick={setInput}>5</button></div>
                <div><button value="6" onClick={setInput}>6</button></div>
                <div><button value="1" onClick={setInput}>1</button></div>
                <div><button value="2" onClick={setInput}>2</button></div>
                <div><button value="3" onClick={setInput}>3</button></div>
                <div><button value="." onClick={setInput}>.</button></div>
                <div><button value="0" onClick={setInput}>0</button></div>
                <div><button onClick={calculate}>=</button></div>
                  
            </div>
            <div className="functions">
                 <div><button onClick={deleteInput}>DEL</button></div>
                 <div><button value="/" onClick={setFunction}>/</button></div>
                 <div><button value="*"  onClick={setFunction}>*</button></div>
                 <div><button value="-"  onClick={setFunction}>-</button></div>
                 <div><button value="+"  onClick={setFunction}>+</button></div>
            </div>


        </div>

      </div>
     
    </div>
  );
}

export default App;
