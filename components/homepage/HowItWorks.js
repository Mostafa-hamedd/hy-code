import { useContext, useState } from "react";
import { isMobileContext } from "../../contexts/isMobileContext";
import HomeCommonHeaders from "./HomeCommonHeaders";
import StepsMobile from "./StepsMobile";

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0)
    const { isMobile } = useContext(isMobileContext)
    const steps = [
        {
            step: 'Step 1',
            title: "Choose Your Vehicle",
            text: `Start your shopping experience by selecting your preferred Hyundai vehicle.\nKey features on vehicle performance, convenience and safety are highlighted to make your decision easier.`
        }, {
            step: 'Step 2',
            title: "Review Your Selection",
            text: `Here you can reserve and purchase your vehicle by checking the inventory and the vehicles coming in transit.\nYou can also select any add-on and save multiple quotations for your favourite vehicles.\nThe process guarantees that your desired vehicle is exclusively yours.\nA dedicated sales consultant will be assigned to you to assist you in completing your journey.`
        }, {
            step: 'Step 3',
            title: "Quotation and Reservation",
            text: `Generate a quotation based on your chosen vehicle and add-ons.\nPrices on the quotations are valid for 7 days from the date of issuing.\nA nominal non-refundable fee is required to ensure your reservation.`
        }, {
            step: 'Step 4',
            title: "Payment Options",
            text: `Based on your convenience, you can complete your online transaction either by paying the entire amount on the website, applying for Jaidah’s in-house financing online, or reserving online and completing the payment in the showroom.\nYour assigned sales consultant is always there to assist you throughout.`
        }, {
            step: 'Step 5',
            title: "Finalize Order",
            text: `Congratulations! Your payment has been received.\nYou will be contacted by your assigned sales consultant to complete the delivery at your convenience.\nWelcome to the Hyundai Family!`
        },

    ]
    return (
        <div className="how-it-works">
            <HomeCommonHeaders
                title='How it works in 5 simple steps.'
                smallTitle
            />
            {isMobile?
            <StepsMobile steps={steps}/>
            :
            <div className="steps-container">
                <div className="steps-list">
                    {steps?.map((step, index) => (
                        <div
                            className={`step ${activeStep == index ? "active" : ""}`}
                            key={index}
                            onClick={() => setActiveStep(index)}

                        >
                            <span className="bold">{step.step}</span>
                            <span>{step.title}</span>
                        </div>
                    ))}
                </div>
                <div className="steps-desc">
                    <h3 className="step-title bold">{steps[activeStep].title}</h3>
                    <p className="step-text">{steps[activeStep].text}</p>
                </div>
            </div>
            }
        </div>
    );
}

export default HowItWorks;