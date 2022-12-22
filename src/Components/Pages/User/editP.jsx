import React from "react";
import "./userEditProfile.css";

const userEditProfile = () => {
  return (
    <>
      <div className="editProfile">
        <div className="editProfileLeft">
          <div className="editProfileLeftBox">
            <div className="editProfileLeftBox1">
               <a href=""><i class="bi bi-bookmarks"></i>&nbsp;&nbsp;&nbsp;saved video</a>
            </div>
            <div className="editProfileLeftBox1">
               <a href=""><i class="bi bi-people-fill"></i>&nbsp;&nbsp; My friends</a>
            </div>
            <div className="editProfileLeftBox1">
               <a href=""><i class="bi bi-camera-fill"></i>  &nbsp;&nbsp;my gallery</a>
            </div>
          </div>
        </div>



        <div className="editProfileCenter">
          <div className="editProfileCenterBox1">
            <div className="editProfileCenterBox1Left">
              <img src="https://images.unsplash.com/photo-1671509774803-1640e8853b50?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80" alt="" />
            </div>  
            <div className="editProfileCenterBox1Right">
              <h3>abhay singh</h3>
              <h4>@abhaa.yy</h4>
              <p>abhay singh is a web developer and a youtuber.
              “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
              </p>
            </div>
          </div>
          <div className="editPRofileCenter">
              <ul>
                <label htmlFor="">name</label><br/>
                <input type="text" placeholder="abhay singh" /><br/>
                <label htmlFor="">username</label><br/>
                <input type="text" placeholder="abhaa.yy" /><br/>
                <label htmlFor="">email</label><br/>
                <input type="text" placeholder="abhaysinghsh01@gmail.com"/><br/>
                <label htmlFor="">location</label><br/>
                <input type="text" placeholder="enter your location"/><br/>
                <label htmlFor="">bio</label><br/>
                <input type="text" placeholder="abhay singh is a web developer and a youtuber.
                “I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
                "/><br/>
                 <label htmlFor="">date Of Birth</label><br/>
                <input type="text" placeholder="date Of Birth" /><br/>
                <label htmlFor=""> phone</label><br/>
                <input type="text" placeholder=" phone" /><br/>
                <label htmlFor="">gender</label><br/>
                <input type="text" placeholder="gender" /><br/>
                <label htmlFor="">business acc</label><br/>
                <input type="text" placeholder="business acc" /><br/>
                 
                <button>update</button>
                
              </ul>
            </div>
        </div>


        <div className="editProfileRight">
          <div className="editProfileRightBox">
            <button><i class="bi bi-door-closed"></i>Logout</button>
          </div>
          <div className="editProfileRightBox2">
          </div>
        </div>

      </div>
    </>
  );
};

export default userEditProfile;
