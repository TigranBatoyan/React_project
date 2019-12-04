import React,{useState} from 'react';
import './registration.css';
import FormContainer from "./FormContainer";
import {registerHandler} from "../../API";

const Registration = () =>{
    const initialState = {username:'',lastname:'',email:'',password:''}
    const [data,setData] = useState(initialState)

    const changeInputValue = ({target:{name,value}}) =>{
        setData({
            ...data,
            [name]:value
        })
    }

    const handleSubmitData = () =>{
        registerHandler(data).then(response=>setData(initialState))
    }
    return(
        <div className="container_register">
            <div className='border_reg'>
               <FormContainer data={data} handleSubmitData={handleSubmitData} changeInputValue={changeInputValue} />
            </div>
        </div>
    )
}
export default Registration