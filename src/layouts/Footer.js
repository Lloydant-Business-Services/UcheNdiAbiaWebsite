import React from 'react'
import logo2 from '../../src/assets/images/home/logo.png';

const Footer = (props) => {
    return (
        <div className="" style={{bottom: "0", backgroundColor:"#213875"}}>
            <div className="container">
                {/* Footer */}
                <footer className="footer pt-6 text-white" style={{backgroundColor:"#213875"}}>
                
        
                    <div className="copyright text-white-50 mt-5">
                        Copyright © {new Date().getFullYear()} <a href="https://www.lloydant.com/" className="font-weight-bold ml-1 text-white" target="_blank" rel="noopener noreferrer">uche ndi abia</a>. All rights reserved.
                    </div>
                </footer>
            </div>
        </div>
    )
};

export default Footer
