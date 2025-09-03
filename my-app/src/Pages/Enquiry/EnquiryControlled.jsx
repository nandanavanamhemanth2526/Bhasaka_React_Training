import { useState } from "react";

const EnquiryControlled = () => {

    const [name , setName] = useState("");
    const [mobNo , setMobNo] = useState("");
    const [message , setMessage] = useState("");

    const [nameError, setNameError] = useState(false);
    const [mobNoError, setMobNoError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const onSubmitClick = (e) => {
       e.preventDefault();
    }

    const onNameChange = (e) => {
         if(e.target.value.length <= 12){
            setName(e.target.value);
            setNameError(false);
        } else {
            setNameError(true);
        }
    }

    const onMobNoChange = (e) => {
        if(e.target.value.length <=10){
            setMobNo(e.target.value);
            setMobNoError(false);
        } else {
            setMobNoError(true);
        }
    } 

    const onMessageChange = (e) => {
        if(e.target.value.length <= 150){
            setMessage(e.target.value);
            setMessageError(false);
        } else {
            setMessageError(true);
        }
        
    }

    return(
        <div>
            <h1>Enquiry Form - Controlled</h1>
            <form onSubmit={onSubmitClick}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input value={name} onChange={onNameChange} id="name" name="name" type="text" />
                    {nameError && <span style={{color:"red"}}>Name should be less than 12 character only</span>}
                </div>
                <div>
                    <label htmlFor="mobNo">Mobile Number</label>
                    <input value={mobNo} onChange={onMobNoChange} id="mobNo" name="mobNo"type="text" />
                    {mobNoError && <span style={{color:"red"}}>Mobile Number should only contain 10 numbers</span> }
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea value={message} onChange={onMessageChange} id="message" name="message"/>
                    {messageError && <span style={{color:"red"}}>Message should be less than 150 characters</span>}
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EnquiryControlled;