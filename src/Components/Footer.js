import React from 'react'

export const Footer = () => {
    const handleOnClick = (e) => {
        
            e.preventDefault();
            console.log("da")
            document.getElementById("top").scrollIntoView({
                behavior: "smooth",
                block: "end",
                inline: "nearest"
            })
      
    }
    return (
        <div className="footer-content">
        <footer>
            <div className="container">
                <div className="footer-content">
                <div className="dept-logo">

                </div>
                <div className="footer-content-wrapper">
                    <div className="links-top">
                        <div>
                            <a>work</a>
                            <a>services</a>
                            <a>STORIES</a>
                            <a>ABOUT</a>
                            <a>CAREERS</a>
                            <a>CONTACT</a>
                        </div>
                       
                       
                    </div>
                    <div className="social-networks-footer">
                            <a className="facebook"></a>
                            <a className="twitter"></a>
                            <a className="instagram"></a>
                        </div>
                </div>
                
            </div>
                <div className="adress">
                    <p>Chamber of Commerce: 63464101</p>  
                        <p> VAT: NL 8552.47.502.B01</p>   
                        <p>  Terms and conditions</p>
                       <div className="copyright">
                        <p className="">© 2018 Dept Agency</p>
                       </div>
                    </div>
            </div>
      
        </footer>
        <div className="footer-right-content" >
            <a href="#top" onClick={handleOnClick}>top</a></div>
        </div>
    )
}
