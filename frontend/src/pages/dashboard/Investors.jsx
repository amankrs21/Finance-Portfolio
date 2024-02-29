import React from "react";
import "./Invest.css";
import imageSrc1 from '/abc.jpg'; // Import your image file
import imageSrc2 from '/teamwork.jpg'; // Import your image file
import imageSrc3 from '/hi.jpg'; // Import your image file
import imageSrc4 from '/govt.jpg'; // Import your image file

function Investors() {
    return (
        <div className="invest">
            <h1 className="responsive-heading">Investing Areas</h1>
            <div className="card-container">
                <div className="card">
                    <div className="img-content">
                        <img src={imageSrc1} alt="Investor" /> {/* Add your image here */}
                    </div>
                    <div className="content">
                        <p className="heading">Property</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-content">
                        <img src={imageSrc2} alt="Investor" /> {/* Add your image here */}
                    </div>
                    <div className="content">
                        <p className="heading">Equity</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-content">
                        <img src={imageSrc3} alt="Investor" /> {/* Add your image here */}
                    </div>
                    <div className="content">
                        <p className="heading">Goldbees</p>
                    </div>
                </div>
                <div className="card">
                    <div className="img-content">
                        <img src={imageSrc4} alt="Investor" /> {/* Add your image here */}
                    </div>
                    <div className="content">
                        <p className="heading">Govt Bond</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Investors;
