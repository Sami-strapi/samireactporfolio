import React, {useState} from "react";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passward, setPassward] = useState("");
  const [concern, setConcern] = useState("");
 
 const handlerChange=(e)=>{
  if(e.target.name==="name"){
    setName(e.target.value);
  }
  if(e.target.name==="email"){
  setEmail(e.target.value);
  }
  if(e.target.name==="passward"){
       setPassward(e.target.value);
  }
       if(e.target.name==="text-area"){
       setConcern(e.target.value);
       }
 }
  const handlerSubmit=(e)=>{
    e.preventDefault();
    console.log(name,passward,email,concern)
       setName("");
       setEmail("");
       setPassward("");
       setConcern("");
  }
  return (
    <div>
      <form onSubmit={handlerSubmit}>
      <div className="contact">
        <div className="namee">
          <span>Name</span>
          <br />
          <input
            type="text"
            value={name}
            name="name"
            onChange={handlerChange}
            className="name1"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="passward">
          <span>Phone</span>
          <br />
          <input type="number" value={passward}  name="passward"  onChange={handlerChange} className="passward1" placeholder="phone number" />
        </div>

        <div className="email">
          <span>Email</span>
          <br />
          <input
            type="text"
            value={email}
            name="email"
            onChange={handlerChange}
            className="email1"
            placeholder="@example.com"
            aria-describedby="basic-addon2"
          />
        </div>

        <div className="text-area">
          <span className="text-area1">Write Your Concern</span>
          <br />
          <textarea className="text-area2" value={concern}  name="text-area" placeholder="Discription" onChange={handlerChange}></textarea>
        </div>
       <button type="submit" className="btn">Submit</button>
      </div>
      </form>
    </div>
  );
};

export default Contact;
