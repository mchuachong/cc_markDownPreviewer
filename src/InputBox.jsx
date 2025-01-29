import {useState} from 'react'
const  InputBox = ({input,setInput}) => {
    const handleChange = (e) => setInput(e.target.value);
    return (<textarea onChange={handleChange} className="InputBoxContainer"></textarea>)
}

export default InputBox