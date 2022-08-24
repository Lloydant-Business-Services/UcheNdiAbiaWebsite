import React from 'react'
import "../../assets/css/staffForm.css"
import { enquireScreen } from "enquire-js";



let isMobile;
enquireScreen((b) => {
    isMobile = b;
});
export default function StaffAuth() {
  return (
    <div>
        <div style={!isMobile ? {marginTop:"12vh"} : {marginTop:"12vh"}} className='pt-4'>
            <form style={{}}>
                <section className="" style={{marginLeft:"auto", marginRight:"auto", paddingBottom:'81px'}}>
                    <center>
                        <h2 className='monte text-white' style={!isMobile ? {fontSize:"27px"} : null}>Staff Authentication</h2>
                        <div className="input-container " style={{marginTop: '10vh'}}>
                            <label className='text-white text-left'>Code Number</label>
                            <input name="firstname" type="text" placeholder='example: QWERT1234' />
                        </div>
                        
                    

                    </center>
                </section>
                <center>
                    <div className="send-container" style={!isMobile ? {marginTop: '-30px'} : {marginTop: '-18px'}}>
                        <input type={'submit'} style={!isMobile ? {background: "#6f0303", marginTop: "30px", fontSize: "14px", width:"46%"} : { background: "#6f0303", marginTop: "30px", fontSize: "14px" }} value='Authenticate' />
                    </div>
                </center>
            </form>
           

        </div>
      
    </div>
  )
}

