 import { useState } from "react";

function CalcForm() {
    const [firstInput, setfirstInput] = useState('');
    const [secondInput, setsecondInput] = useState('');
    const [result,setresult]=useState<number>(0);

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.id === 'firstInput') {
                setfirstInput(e.target.value);
              } else {
                  setsecondInput(e.target.value);
            };
    }

    function addfunc() {
        const num1=parseFloat(firstInput)
        const num2=parseFloat(secondInput)
        console.log(num1+num2)
        
        setresult(num1+num2)
    }
    function subfunc(){
        const num1=parseFloat(firstInput)
        const num2=parseFloat(secondInput)
        console.log(num1-num2)
        
        setresult(num1-num2)
    }
    function multifunc(){
        const num1=parseFloat(firstInput)
        const num2=parseFloat(secondInput)
        console.log(num1*num2)
        
        setresult(num1*num2)
    }

    function divfunc(){
        const num1=parseFloat(firstInput)
        const num2=parseFloat(secondInput)
        console.log(num1/num2)
        
        setresult(num1/num2)
    }

    return <div  id="app-wrap"  className="app-wrap">
       
       <h1>Calculator </h1>
        <label className="inputLabel">Enter the First Number:
        <input type="number" min={0} id="firstInput" className="firstInput" value={firstInput} onChange={inputChange} />
        </label>


        <label className="inputLabel">Enter the Second Number:
        <input type="number" min={0} id="secondInput" className="secondInput" value={secondInput} onChange={inputChange} />
        </label>

        
        <button onClick={addfunc}>Add</button>
        <button onClick={subfunc}>Subtract</button>
        <button onClick={multifunc}>Multiply</button>
        <button onClick={divfunc}>Divide</button>
         
        <label className="resultLabel">Result:
        <input type="text" id="result " className="result" value={result} readOnly></input>
        </label>
 
    </div>  

}

export default CalcForm;

