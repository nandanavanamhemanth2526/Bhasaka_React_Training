import { useRef } from "react";

const EnquiryUncontrolled = () => {
    const nameRef = useRef();
    const mobNoRef = useRef();
    const messageRef = useRef();

    const onSubmitClick = (e) => {
        e.preventDefault();
        // console.log(nameRef.current.value);
        // console.log(mobNoRef.current.value);
        // console.log(messageRef.current.value);
    }
    return(
        <div>
            <h1>Enquiry Form - Uncontrolled</h1>
            <form onSubmit={onSubmitClick}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input ref= {nameRef} id="name" name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="mobNo">Mobile Number</label>
                    <input ref = {mobNoRef} id="mobNo" name="mobNo"type="text" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea ref={messageRef} id="message" name="message"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EnquiryUncontrolled;