import { useState } from "react";
import axios from "axios";

const EnquiryFormValidation = () => {

    const [errors, setErrors] = useState({nameError : false, mobNoError : false, messageError:false});

    const [enquiryFormData, setEnquiryFormData] = useState({name : "" ,mobNo : "", message : "",enquiryDepartment: "TECHNICAL", otherDepartment : ""});

    const onSubmitClick = async (e) => {
       e.preventDefault();
    //    fetch("https://jsonplaceholder.typicode.com/posts" , {
    //     method : "POST",
    //     body: JSON.stringify(enquiryFormData)
    //    }).then((res) => {
    //     return res.json()
    //    }).then(data => {
    //     console.log(data);
    //     alert("Details got submitted. Our teams team will reach out to you. Thank You")
    //     setEnquiryFormData({name : "" ,mobNo : "", message : "",enquiryDepartment: "TECHNICAL", otherDepartment : ""});
    //    })
    //    .catch=((err) => {
    //     console.log("An Error occur while processing the data",err);
    //    })

        // axios.post("https://jsonplaceholder.typicode.com/posts",enquiryFormData)
        // .then((res) => console.log(res.data))
        // .catch(err => console.log("Error calling api"));

        try{
            const res = await axios.post("https://jsonplaceholder.typicode.com/posts",enquiryFormData);
            console.log(res.data);
        } catch(err){
            console.log("Error while processing the api call");
        }
        
        
    }

    const onInputChange = (e) => {
       
        if(e.target.id === "name"){
            e.target.value.length <= 12 && setEnquiryFormData({...enquiryFormData,[e.target.id] : e.target.value});
            e.target.value.length <= 12 ? setErrors({...errors, nameError:false}) : setErrors({...errors, nameError:true});
        } 
        else if (e.target.id === "mobNo") {
            e.target.value.length <= 10 && setEnquiryFormData({...enquiryFormData,[e.target.id] : e.target.value});
            e.target.value.length <= 10 ? setErrors({...errors, mobNoError:false}) : setErrors({...errors, mobNoError:true});
        } 
        else if (e.target.id === "message") {
             e.target.value.length <= 150 && setEnquiryFormData({...enquiryFormData,[e.target.id] : e.target.value});
             e.target.value.length <= 150 ? setErrors({...errors, messageError:false}) : setErrors({...errors, messageError:true});
        } else {
            setEnquiryFormData({...enquiryFormData,[e.target.id] : e.target.value});
        }
    };

    return(
        <div>
            <h1>Enquiry Form - validation</h1>
            <form onSubmit={onSubmitClick}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input value={enquiryFormData.name} onChange={onInputChange} id="name" name="name" type="text" />
                    {errors.nameError && <span style={{color:"red"}}>Name should be less than 12 character only</span>}
                </div>
                <div>
                    <label htmlFor="mobNo">Mobile Number</label>
                    <input value={enquiryFormData.mobNo} onChange={onInputChange} id="mobNo" name="mobNo"type="text" />
                    {errors.mobNoError && <span style={{color:"red"}}>Mobile Number should only contain 10 numbers</span> }
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea value={enquiryFormData.message} onChange={onInputChange} id="message" name="message"/>
                    {errors.messageError && <span style={{color:"red"}}>Message should be less than 150 characters</span>}
                </div>
                <div>
                    <label>Enquiry Department</label>
                    <select id="enquiryDepartment" onChange={onInputChange}>
                        <option value="TECHNICAL">Technical</option>
                        <option value="SALES">Sales</option>
                        <option value="OTHERS">Others</option>
                    </select>
                </div>
                {
                    enquiryFormData.enquiryDepartment === "OTHERS" && <div><input id="otherDepartment" onChange={onInputChange} type="text" placeholder="Please Enter the Department" required/></div>
                }
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EnquiryFormValidation;