// import "./Form.css"
// // import emailjs from "emailjs-com";

// function Form(){
//     // function sendEmail(e){
//     //     e.preventDefault();

//     //     emailjs.sendForm('service_72360hi','template_py7vddi',e.target).target(res=>{
//     //         console.log(res);
//     //     }).catch(err=> console.log(err))
//     // }

//     return(
//         <div className="Container">
      

//         <div id="form-info" >
//             <form action="https://formsubmit.co/todkarvaishnavi02@gmail.com" method="POST" >
//                 <h1>Invitation for Editorial Board Members, Advisory Board Members, Reviewers</h1>
//                 <hr/><br></br>
//                 <label>Name:*</label>
//                 <input type="text" placeholder="Your Name" required/>

//                 <label>E-Mail:*</label>
//                 <input type="email" name="user_email" placeholder="E-mail" required/>

//                 <label>Organization:*</label>
//                 <input type="text" name="message" placeholder="Organization" />

//                 <label>Total Academic Experience (in Years):*</label>
//                 <input type="text" name="message" placeholder="Total Academic Experienc." />

//                 <label>Contact No. (Preferably WhatsApp):* </label>
//                 <input type="text"  name="message" placeholder="Contact No." />

//                 <label>Designation:*</label>
//                 <input type="text" name="message" placeholder="Designation" />

//                 <label>Qualification:*</label>
//                 <input type="text" name="message" placeholder="Qualification"/>

//                 <label>Upload CV:*</label>
//                 <input type="file" name="message" placeholder="Choose File" ></input>

//                 <label>Upload Latest Qualification Certificate: *</label>
//                 <input type="file" name="message" placeholder="Choose File" />
                
//                 <button type="submit" class="normal">Send message</button>
//                 </form>
          
//         </div>
//     </div>
//     )
    
// }


// export default Form;

import { useState } from "react";
import "./Form.css"
// import emailjs from 'emailjs-com'
// import { useState } from "react";
// import {History, useHistory} from 'react-router-dom';

const Form=()=>{
    const[name,setName]=useState('');

    // const[inputList, setInputList]=useState()

    // const history=useHistory();
     
    // const sendEmail=(e)=>{
    //     e.preventDefault();
    //     emailjs.sendForm('HOD_123','template_yug95aq',e.target,'ml7_DOU7JqFqtTdc3').then(res=>{
    //         console.log(res);
    //     }).catch((err)=>{
    //         console.log(err)
    //     });
    // }

    // const [user,setUser]=useState({
    //     name:"",email:"",phone:"",description:"",file:""
    // })

    // let name,value;

    // const handleInputs=(e)=>{
    //     console.log(e);
    //     name=e.target.name;
    //     value=e.target.value;

    //     setUser({...user,[name]:value});
    // }

    // const PostData=async(e) =>{
    //     e.preventDefault();

    //     const{name,email,phone,work,password,cpassword}=user;

    //     const res=await fetch("/Form", {
    //         method:"POST",
    //         headers:{
    //             "Content-Type" : "application/json"
    //         },
    //         body:JSON.stringify({

    //             name,email,phone,work,password,cpassword
    //             // "name":"vaishnavi",
    //             // "email":"todkarvaishnavi.com",
    //             // "phone":9154787431,
    //             // "password":"abcd",
    //             // "cpassword":"abcd"
    //         })
    //     });

    //      res =await res.json();

    //      if(res.status === 422 ){
    //         window.alert("Invalid Registration");
    //         console.log("Invalid Registration");
    //      } else{
    //         window.alert("valid Registration");
    //         console.log("valid Registration");

    //         history.push("/SignIn");
    //      }


    //}


    return(
    //     <>
    //     <div className="Container">
      

    //     <div id="form-info" >
    //         <form action="">
    //             <h1>Invitation for Editorial Board Members, Advisory Board Members, Reviewers</h1>
    //             <hr/><br></br>
    //             <label>Name:</label>
    //             <input type="text" name="name" placeholder="Your Name" autoComplete="off" value={user.name} onChange={handleInputs}/>

    //             <label>E-Mail:</label>
    //             <input type=" email" name="email" placeholder="E-mail" autoComplete="off" value={user.email} onChange={handleInputs}/>

    //             <label>Contact No. (Preferably WhatsApp): </label>
    //             <input type="text" name="phone" placeholder="Contact No." autoComplete="off" value={user.phone} onChange={handleInputs}/>

    //             <label>Description about file:</label>
    //             <input type="text" name="description" placeholder="Description" autoComplete="off" value={user.description} onChange={handleInputs}/>

    //             <label>Upload File:</label>
    //             <input type="file" name="file" placeholder="Choose File" autoComplete="off" value={user.file} onChange={handleInputs}></input>

                
                
    //             <button type="submit" onSubmit={sendEmail} onClick={PostData} class="normal">Send Message</button>
    //             </form>
          
    //     </div>
    // </div>
    // </>

    <>
        <div className="Container">
      

        <div id="form-info" >
            <form action="">
                <h1>Invitation for Editorial Board Members, Advisory Board Members, Reviewers</h1>
                <hr/><br></br>
                <label>Name:</label>
                <input type="text" name="name" placeholder="Your Name" autoComplete="off" value={name} onChange={e=>setName(e.target.value)}/>

                <label>E-Mail:</label>
                <input type=" email" name="email" placeholder="E-mail" autoComplete="off" />

                <label>Contact No. (Preferably WhatsApp): </label>
                <input type="text" name="phone" placeholder="Contact No." autoComplete="off" />

                <label>Description about file:</label>
                <input type="text" name="description" placeholder="Description" autoComplete="off" />

                <label>Upload File:</label>
                <input type="file" name="file" placeholder="Choose File" autoComplete="off" ></input>

                
                
                <button type="submit" className="normal">Send Message</button>
                </form>
          
        </div>
    </div>
    </>
    )
    
}


export default Form;