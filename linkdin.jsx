import React from "react";
import "../components/linkdin.css"

function Linkdin(){

    function submitclick(){
    
    }
    return(
        <div className="container-fluid mc">
            <div>
            <div className="header">
              
            <img src="https://tse1.mm.bing.net/th?id=OIP.7nI0m_Lek0Q2oVvrM8EFAAHaHw&pid=Api&P=0&h=180" alt="linkdins a" />
                
                <div className="bi bi-search  searchicon "> </div>
                <div className="searchbar "><input className=" form-control w-300 " type="text" placeholder="search"/> </div>
                   
                
               
                
                <div className="bi bi-house-fill  " > <div>home</div></div>
                <div className="bi bi-people-fill"> <div>my network</div></div>
                <div className="bi bi-chat-fill "> <div>jobs</div></div>
                <div className="bi bi-bell-fill"> <div>notification</div></div>
                <div> 
                     <div className="mail">k </div>
                    
                 </div>
                
            </div>
            </div>
              <div className="maincontainer">
              <div className="gap"></div>
                <div className="container1">
                   

                    <div className="subc1">
                    <div className="mail2 p-2">K </div>
                    <h2 className="name"> KISHORE KASIREDDY</h2>
                    <p>Hydrabad,thelangana</p>
                    <input  className="form-control mr-3 bg-gray"type="text" placeholder="+ Experience"/>
                    </div>
                    <div className="subc2">
                        <p className="p2 ">Strenthen your profile with an AI writing assistent</p>
                        <h4 className="bi bi-credit-card"> Try premium for ₹0</h4>
                    </div>
                    <div className="subc3">
                    <span className="bi bi-person-plus-fill plus"></span>
                      <h5>conections </h5>
                     
                      <p>Grpw your network</p>
                    </div>
                    <div className="subc4">
                        <div className="bi bi-save-fill"> Saved items</div>
                        <div className="bi bi-people-fill"> Groups</div>
                        <div className="bi bi-bell"> Notifications</div>
                        <div className="bi bi-file-fill"> xEvents</div>
                    </div>
                </div>

            <div className="container2">

                <div className="subc5">
                <div className="mail3 ">K </div>
                <h6 className="text">HI KISHORE, are you hairing?</h6>
                <p className="text2">Discover free and easy way to find a great hire, fast. </p>
                <div className="hiring1">
                <div className="hiring"> Yes, I'm hiring </div>
                <div className="hiring"> No, not Right now </div>
                </div>
                </div> 
                <div className="subc6">
                    <div className="subinput">
                         <div className="mail4">K</div>
                         <input  className= "text3" type="text" placeholder="Start a post, writing with AI"/>
                    </div>

                    <div className="icon">
                        <div className="bi bi-image  photo"> Photo</div>
                        <div className="bi bi-camera-video  photo"> Video</div>
                        <div className="bi bi-person-video2 photo"> Write Article</div>
                    </div>
                </div>

             </div>


                <div className="container3">
                   <div className="subc7">
                     <h5>Trendding Now</h5>
                     <p>curated by Lindin News</p>
                     <h6>Green skills report</h6>
                     <p>11d ago. 11,593 readers</p>
                     <h6>Indian GCCs</h6>
                     <p>4d ago. 6271 readers</p>
                     <h6>Polution situation in Delhi-NCR</h6>
                     <p>4d ago.3,993 readers</p>
                     <h6>Gig workers</h6>
                     <p>4d ago. 2,737 readers</p>
                     <h6>FMCG trends</h6>
                     <p>4d ago. 2,737 readers</p>
                     <select className="selection" name="show more"id="show more">
                        <option value={""}> show more</option>
                        <option value={""}></option>
                        <option value={""}></option>
                        <option value={""}></option>
                     </select>
                   </div>
                   <div className="subc8">
                    <div className="header2"><div className="promote">promoted...</div></div>
                                  
            <img className="image" src="https://tse1.mm.bing.net/th?id=OIP.Yc0HUaYPAyltJfKw2YZAVQHaH_&pid=Api&P=0&h=180" alt="linkdins a" />
                   <h6 className="m-2">aramaco</h6>
                   <p className="m-1"> KISHORE, you might like to follow aramaco keep up with intesting relevent updates</p>
                   <button className="btn btn ptimary form-control bg-primary" onClick={submitclick}> follow </button>

                    <div>

                    </div>
                   </div>
                </div>

            </div> 
           
           
        </div>
    )
}
export default Linkdin;