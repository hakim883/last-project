// import React from "react";


// export const Contact = () => {



  


//   return (

//       <div className="container-border">
//           <h1>Contact Us</h1>
          
      
//             <p>We would love to respond to your queries and help you succed.Fell free to get in touch with us.</p>
//           <form className="row55">
//               <label>name</label>
//                      aem
//               <label>Email</label>
//                 comercial@aem.com

//               <label>Phone</label>
//                    71231548
//               <label>adress</label>
//                      tunis


              
//               <a href={`mailto:${"polatkgt38@gmail.com"}`}>Contactez-nous</a>


//           </form>
          
//       </div>
   
//   );
// };














import React from "react";
import "./Contact.css";
import { useForm, ValidationError } from "@formspree/react";

function Contact() {
  const [state, handleSubmit] = useForm("xgerkwed");

  if (state.succeeded) {
    return (
      <div className="contact">
        <img
          height="100"
          width="100"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Emoji_u263a.svg/1200px-Emoji_u263a.svg.png"
          alt="smiling-emoji"
        />
        <br />
        <p>Thanks for your message! I will be contacting you if necessary</p>
      </div>
    );
  }
  return (
    <div className="contact">
      <form  className="forme">
      <p>
          Aem : Discription
        </p>
        <label htmlFor="email"><strong>Email :</strong> </label>
        {/* <input
        className="inpute"
          id="email"
          type="email"
          name="email"
          required
          placeholder="@example.com"
        /> */}
         comercial@aem.com
        {/* <ValidationError prefix="Email" field="email" errors={state.errors} /> */}
        <br />
        <label htmlFor="email"><strong>Phone :</strong> </label><br />
           7894235
        {/* <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        /> */}
        <br />
        <label htmlFor="email"><strong>Adress :</strong> </label><br />
           Tunis <br />
           <a href={`mailto:${"polatkgt38@gmail.com"}`}>Contactez-nous</a>        
        
      </form>
      <br />
      <div className="contact_text">
        <p>
          Social Media :<br />
          <a href="https://www.youtube.com">
            youtybe
          </a><br />
          <a href="https://www.facebook.com">
            facebook
          </a>
        </p>
        <p>
          Discription 2
        </p> 
      </div>
    </div>
  );
}

export default Contact;