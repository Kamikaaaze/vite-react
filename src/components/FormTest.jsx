function FormTest(){
    return(

        <div className="background">
            <div></div>
            <div className="mainForm">
                <p className="contact">Contact Us</p>
                <p className="questions" style={{marginRight:'110px'}}>First Name<span className="star">*</span></p>
                <p className="questions" >Last Name <span className="star">*</span></p>
                <div className="blocks">
                    <input type="text" className="answers"></input>
                <input type="text" className="answers"></input>
                </div>
                <p className="questions">Email Address <span className="star">*</span></p>
                <input type="text" className="answers" style={{display:'block',width:'350px'}}></input>
                <p className="questions">query type <span className="star">*</span> </p>
                <div className="blocks">
                    <div className="toggle">
                    <div style={{display:'inline-block'} }className="rectangle"><input type='radio'></input>General Enquiery</div>
                    <div style={{display:'inline-block'}} className="rectangle"><input type='radio'></input>Support Request</div>
                    </div>
                  
                    </div>
                <p className="questions" style={{display:'block'}}>Message <span className="star">*</span></p>
                <textarea id="message" rows='4' cols='46' style={{display:'block' , marginBottom:'20px'}}></textarea>
                <input type="checkbox" className="checkBox" ></input>
                <p style={{display:'inline-block'}}>I consent to be contacted by the team</p>
               
                
                <button className="submit">Submit</button>
            </div>
<div></div>
            
        </div>
    );
}
export default FormTest;