import { useState } from "react";

const StepsMobile = ({ steps }) => {
    const [activeStep, setActiveStep] = useState(0)
    return (
        <div className="steps-container-mobile">
            {steps?.map((step, index) => (
                <div
                    className={`step ${activeStep == index ? "active" : ""}`}
                    key={index}
                    onClick={() => setActiveStep(index)}
                >
                    <div className="desc">
                        <div className="step-head">

                            <span className="bold">{step.step}</span>
                            {activeStep == index && <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#000"></path>
                            </svg>}
                        </div>
                        {activeStep == index && <h3 className="bold">{step.title}</h3>}
                        {activeStep != index && <span>{step.title}</span>}
                        {activeStep == index && <p>{step.text}</p>}
                    </div>
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                    </svg>
                </div>
            ))}
        </div>
    );
}

export default StepsMobile;