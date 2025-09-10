const Enquiry = () => {
    const onSubmitClick = (e) => {
        e.preventDefault();
        // console.log(e.target.name.value);
        // console.log(e.target.mobNo.value);
        // console.log(e.target.message.value);
    }
    return(
        <div>
            <h1>Enquiry Form</h1>
            <form onSubmit={onSubmitClick}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" />
                </div>
                <div>
                    <label htmlFor="mobNo">Mobile Number</label>
                    <input id="mobNo" name="mobNo"type="text" />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message"/>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Enquiry;