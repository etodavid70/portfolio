import React, {useState} from "react";
import DAV from "../assets/images/DAV.png";
import Payarena from "../assets/images/payarena.jpg";
import WhiteCrust from "../assets/images/whitecrust.png";
import Iknow from "../assets/images/iknow.png"
import "../assets/styles/Project.scss";

function Project() {
    const [showPopup, setShowPopup] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                {/* DAV */}
                <div className="project">
                    {/* Image triggers popup instead of navigation */}
                    <a href="#" onClick={handleClick}>
                        <img src={DAV} className="zoom" alt="thumbnail" width="50%"/>
                    </a>
                    <a href="#" onClick={handleClick}>
                        <h2>DAV (Digital Address Verifier)</h2>
                    </a>

                    <p>
                        Developed both native Android (Kotlin) and React Native SDKs for seamless
                        integration into banking applications, enabling secure and efficient
                        address verification. The SDKs capture user addresses, perform real-time
                        geolocation validation, and support document scanning for proof of
                        residence. Designed with modular, customizable UI components to fit client
                        branding and workflows, while ensuring encrypted data transmission,
                        secure local storage, and compliance with KYC and GDPR regulations.
                    </p>

                </div>

                {/*PAYARENA*/}
                <div className="project">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.unifiedpayment.payarena"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Payarena} className="zoom" alt="thumbnail" width="50%"/>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.unifiedpayment.payarena"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>PayArena version 1.2.2</h2>
                    </a>
                    <p>
                        Developed the latest version of the Payarena Mobile application, a
                        fintech/payment platform. Integrated biometrics verification, UI revamp,
                        NIN/BVN verification, and other key improvements made to the overall app.
                    </p>
                </div>


                {/*WHITECRUST*/}

                <div className="project">
                    <a
                        href="https://play.google.com/store/apps/details?id=com.unifiedpayment.payarena"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={WhiteCrust} className="zoom" alt="thumbnail" width="50%"/>
                    </a>
                    <a
                        href="https://play.google.com/store/apps/details?id=com.unifiedpayment.payarena"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>WhiteCrust MFB Mobile App</h2>
                    </a>
                    <p>
                        Cross-platform financial app for secure transaction

                        Key Features:
                        Real-time balance & transaction history,
                        Fund transfers & bill payments,
                        Investment,
                        Insurance,
                        QR-based payments with tokenization
                    </p>
                </div>


                 {/*IKNOW*/}
                  <div className="project">
                    <a
                        href="https://www.amazon.com/dp/B0CSKFSDQD/ref%3Dapps_sf_sta"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={Iknow} className="zoom" alt="thumbnail" width="50%"/>
                    </a>
                    <a
                        href="https://www.amazon.com/dp/B0CSKFSDQD/ref%3Dapps_sf_sta"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <h2>iKnow (Beta Version)</h2>
                    </a>
                    <p>
                       A Community Platform, that allows STEM professionals to collaborate and share ideas
                    </p>
                </div>


            </div>




            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <h3>Notice</h3>
                        <p>This is proprietary software and not available to the public.</p>
                        <button onClick={closePopup}>OK</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Project;