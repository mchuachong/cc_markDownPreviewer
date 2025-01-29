import InputBox from './InputBox'
import OutputBox from './OutputBox'
import {useState} from 'react'



const Headers = () => {
    const [input,setInput] = useState('')
   
    return(<>
        <h1>Markdown Previewer</h1>
        <h2>Input</h2>
        <InputBox input={input} setInput={setInput}/>
        {console.log(input)}
        <h2>Preview</h2>
        <OutputBox output={input}/>
        </>
    )
}

export default Headers
