import React from 'react';
import "../Certificates/Certificates.css";
import Codekata from "../Certificates/Codekata.jpg";
import MERN from "../Certificates/Mern.png";
import Javascript from "../Certificates/Js.png";

function Certificates() {
    return (
        <section >
            <div className="certificate">
                <h1 className="h1tag">
                    <i>Certificates</i>
                </h1>
                <div className="display">
                    <a
                        href="https://drive.google.com/drive/folders/1skRi-swWBFWPH4IiIt2gr8sED_Sp5ZnB?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="container"
                    >
                        <img src={Codekata} alt="Problem Solving Link..." className="sizing" />
                        <div className="middle">
                            <div className="text">Codekata Problems Solved</div>
                        </div>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1YQStJyRHY8JkITm5-Uay6Iabk7Y5K4p7/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="container"
                    >
                        <img src={MERN} alt="MERN Course Completion Certificate..." className="sizing" />
                        <div className="middle">
                            <div className="text">Certified with MERN Stack</div>
                        </div>
                    </a>
                    <a
                        href="https://drive.google.com/file/d/1KrW3yCNmtrIdwLDfFR8vTwqlHAtmfTqK/view?usp=sharing"
                        className="container"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={Javascript} alt="Js Course Completion Certificate..." className="sizing" />
                        <div className="middle">
                            <div className="text">Certified with Javascript</div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Certificates
