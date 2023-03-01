import React from 'react'
import '../assets/styles/footer.scss'

const Footer = () => {
    return (
        <div className="Footer">
            <div className="Footer__container">
                <div className="Footer__container__des">
                    <h1>MMOVIES</h1>

                </div>
                <div className="Footer__container__quicklink">
                    <h1>SUPPORT</h1>
                    <li>
                        Contact Support
                    </li>
                    <li>
                        Help Center
                    </li>
                    <li>
                        Supported Devices
                    </li>
                    <li>
                        Activate Your Device
                    </li>
                </div>
                <div className="Footer__container__f">
                    <h1>GET THE APPS</h1>
                    <p>IOS</p>
                    <p>Android</p>
                    <p>Amazon fire</p>
                </div>
                <div className="Footer__container__legal">
                    <h1>
                        LEGAL
                    </h1>
                    <p>Privacy policy</p>
                    <p>Terms of Use</p>
                
                </div>

            </div>
            <hr />
            <p className='copyrightfooter'>@2023 MMOVIES All Right are reserved</p>
        </div>
    )
}

export default Footer