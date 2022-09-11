import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div>
        <div className="first-div">
          <div className="home">
            <div className="content">
              <b className="b-home">Hi, I am </b>
              <b className="name">Abdul Sami</b>
              <b className="b-home">A Developer | Designer</b>
            </div>
            <div className="img">
              <img className="img2" src="samisami.png" alt="error" />
            </div>
          </div>
          <div className="spanspan">
          I did Bachelor in Computer Science, and my specialization in Web-developing, I can make Websites through Bootstrap, NEXT.js, React, Html, Java, Css, and many different Platform. I did already work with these platform.
          </div>
        </div>
        <div className="section2">
          <b className="section2-b">Skills</b>
          <ul className="section2-ul">
            <center>Full Stack Developer</center>
            <div className="skills-div">
              <ul className="second-ul">
                <li>Html <div className="Html">80%</div></li>

                <li>Css <div className="Css">70%</div></li>

                <li>Java Script <div className="Java-Script">85%</div></li>

                <li>React <div className="React">90%</div></li>

                <li>Angular <div className="Angular">94%</div></li>

                <li>Next Js <div className="Next-Js">95%</div></li>

                <li>MongoDB <div className="MongoDB">98%</div></li>

                <li>Node Js <div className="Node-Js">88%</div></li>

              </ul>
            </div>
          </ul>
        </div>
        <div className="section3">
          <b className="section3-b">Customer Reviews</b>
          <div className="review-div">
          <div className="section3-div"><div className="pic"><img src="https://telugubucket.com/wp-content/uploads/2022/02/180886532_178532887475624_7435033776726038301_n-819x1024.jpg" alt="error" /><span>Yamini</span>We at Kee Service were very impressed with the all aspects of our new website. We would highly reccomend to anyone looking to build a new website. </div></div>
          <div className="section3-div"><div className="pic"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiVoAzH08wkLos8_vL-8u0rCPEQOEGAC-3kw&usqp=CAU" alt="error" /><span>Mr.John</span>Sami's design and web work has provided a vast improvement for our site visits, service inquiries and ease of maintaining. </div></div>
          <div className="section3-div"><div className="pic"><img src="https://www.lcwu.edu.pk/images/2022/HeadGirl.jpg" alt="error" /><span>Amelia</span>Thank you so much for the report!  I think our ad campaign is performing extremely well and our calls and emails are flooding in.</div></div>
          </div>
          <div className="review-div">
          <div className="section3-div"><div className="pic"><img src="https://t4.ftcdn.net/jpg/02/14/74/61/360_F_214746128_31JkeaP6rU0NzzzdFC4khGkmqc8noe6h.jpg" alt="error" /><span>Robert</span>Since having our new website built by Thrive, we have seen a 200% increase in the number of online contact forms being filled out and returned to us.  </div></div>
          <div className="section3-div"><div className="pic"><img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/FD27/production/_101970846_aubreyblanche.jpg" alt="error" /><span>Charlotte</span>I speak for the trolley district when I tell you how pleased we are with the web site you designed for us.You did great work.</div></div>
          <div className="section3-div"><div className="pic"><img src="https://media.istockphoto.com/photos/portrait-young-confident-smart-asian-businessman-look-at-camera-and-picture-id1288538088?k=20&m=1288538088&s=612x612&w=0&h=tQPfhDfWqApLGZN_rIv6_eV464qOAH9SqXsJYAJveYY=" alt="error" /><span>Charles</span>We have been very happy with our new website! It looks professional and very easy to navigate.Our site is beautiful! It is easy to navigate.</div></div>
          </div>
        </div>
      </div>
    </>

  );
};

export default Home;
