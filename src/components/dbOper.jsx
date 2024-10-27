import { useState,useEffect } from "react"
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FormData(){
    const [formData,setFormData] = useState(
                                            {fname:"",
                                            lname:"",
                                            email:"",
                                            message:""}
                                        );
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.fname == "" || formData.lname == "" || formData.email == "" || formData.message == ""){
            toast.error("Please Fill All Fields...");
        }
        else{
            axios.post('http://localhost:8000/api/Enquiry/', formData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then((response) => {
                toast.success("Thank you! Your request is being processed.");
                
                // console.log(response.data);
            })
            .catch((error) => {
                console.error('Error:', error.response ? error.response.data : error.message);
                toast.error("Something went wrong please try it later");
            });

        }
        setFormData(
                    {fname:"",
                    lname:"",
                    email:"",
                    message:""}
                );
    }


    const updateData = (e) => {
        const {name ,value} = e.target;
        // console.log(value);
        setFormData({...formData, [name]:value})
    }

        useEffect(() => {
            const fName = document.getElementById('fname');
            const lName = document.getElementById("lname");
            const email = document.getElementById("email");
            const message = document.getElementById("message");
          
            if (fName) {
                fName.addEventListener('blur', function() {
                    const errorMsg1 = document.getElementById("errorMsg1");
                    if (!fName.value.trim()) {
                        errorMsg1.style.display = 'inline';
                    } else {
                        errorMsg1.style.display = 'none';
                    }
                });
            }

            if(lName){
                lName.addEventListener('blur', function() {
                    const errorMsg1 = document.getElementById("errorMsg1");
                    if (!lName.value.trim()) {
                        errorMsg1.style.display = 'inline';
                    } else {
                        errorMsg1.style.display = 'none';
                    }
                });
            }
          
            if(email){
                email.addEventListener("blur", function() {
                    const errorMsg2 = document.getElementById("errorMsg2");
                    if (!email.value.trim()) {
                        errorMsg2.style.display = 'inline';
                    } else {
                        errorMsg2.style.display = 'none';
                    }
                });
            }

            if(message){
                message.addEventListener("blur", function() {
                    const errorMsg3 = document.getElementById("errorMsg3");
                    if (!message.value.trim()) {
                        errorMsg3.style.display = 'inline';
                    } else {
                        errorMsg3.style.display = 'none';
                    }
                });
            }

            else {
                console.error('Name input not found');
            }

            return () => {
                if (fName) {
                    fName.removeEventListener('blur', function() {});
                }
                if (lName) {
                    lName.removeEventListener('blur', function() {});
                }
                if (email) {
                    email.removeEventListener('blur', function() {});
                }
                if (message) {
                    message.removeEventListener('blur', function() {});
                }
            };
        }, []);

   


    return(
        <>
        <div className="fullContainerForm">
            <div className="topContainerForm">
                <h1 className="head1">Contact Us</h1>
                <h4 className="head1">Please fill this form in decent mannner</h4>
            </div>
            <hr></hr>
            <br></br><br></br>
            {/* <div className="bottomContainerForm"> */}
                <form onSubmit={handleSubmit}>
                    <div className="label1">
                        <div className="label11">
                            <label className="reqField" id="label">Full Name</label>
                        </div>
                        <br></br>
                        <input 
                            type="text"
                            name="fname"
                            id="fname"
                            value={formData.fname}
                            onChange={updateData}
                            placeholder="First Name"
                        />

                        <input 
                            type="text" 
                            name="lname" 
                            id="lname"
                            value={formData.lname}
                            onChange={updateData}
                            placeholder="Last Name"
                        />

                        <br></br>
                        {/* <div className="placeHolders">
                            <span className="sp1">First Name</span>
                            <span className="sp2">Last Name</span>
                        </div> */}
                        <span id="errorMsg1" className="ErrorMsg">This field is Required</span>
                    </div>
                    <br></br>
                    <div className="label1">
                        <div className="label11">
                            <label className="reqField">E-mail</label>
                        </div>
                        <br></br>
                        
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={updateData} 
                            placeholder="example@example.com"
                        />

                        <br></br>
                        {/* <div className="placeHolders">
                            <span>example@example.com</span>
                        </div> */}
                        <span id="errorMsg2" className="ErrorMsg">This field is Required</span>
                    </div>
                    <br></br>
                    <div className="label1">
                        <div className="label11">
                            <label className="reqField">Message</label>
                        </div>
                        <br></br>

                        <textarea 
                            name="message" 
                            rows={8} 
                            cols={35}
                            value={formData.message}
                            id="message"
                            onChange={updateData} 
                            placeholder="Enter your subject here....."
                        />
                        <span id="errorMsg3" className="ErrorMsg">This field is Required</span>
                    </div>
                        <br></br>
                        
                        <button id="submitForm">Submit</button>
                    
                </form>
            {/* </div> */}
         <ToastContainer />
        </div>
        <br></br>
        <br></br>
            
        </>
    )
}



function Contact(){
    return (
        <>
            <FormData/>
        </>
    )
}

// export default Contact