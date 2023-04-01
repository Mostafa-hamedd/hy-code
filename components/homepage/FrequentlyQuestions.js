import HomeCommonHeaders from "./HomeCommonHeaders";
import { useState } from "react";
import AccordionItem from "./AccordionItem";

const FrequentlyQuestions = () => {
    const [activeAccordion, setActiveAccordion] = useState(-1)
    const data = [
        {
            header: "Do I get a better deal if I negotiate in the showroom and are there any hidden fees online?",
            text: "We have implemented a uniform pricing policy that matches online and showroom prices. Furthermore, all pricing online is 100% transparent and there are no hidden online transaction fees.",
        },
        {
            header: "Does the vehicle purchasing process and experience have to be 100% online?",
            text: "No, it does not. Our e-commerce platform has been designed in a way that ensures that the transition between the website and the showroom is seamless. Every step in the journey can be done based on your convenience. You can also book a test drive online or you can speak to any of our sales consultants and they will be happy to arrange it for you.",
        },
        {
            header: "Can I reserve the vehicle so that no-one else can purchase it?",
            text: "Yes, you can. Once your vehicle and add-ons are selected, a nominal non-refundable fee is required for the reservation. In case of finance rejection or unforeseen delivery delays, your fee will be refunded in full.",
        },
        {
            header: "What are the available payment options?",
            text: "You can complete your transaction either by paying the entire amount online, applying for Jaidah’s In-House Financing online, or reserving online and completing the payment in the showroom. The choice of payment is up to you.",
        },
        {
            header: "Can I apply for Jaidah’s In-House Financing online?",
            text: "Yes, our vehicle financing is fully online. You can upload your documents and process your application from the comfort of your home. We also have a finance calculator that you can use to view different financing simulations. Please note that original documents need to be submitted in person once you receive your online pre-approval to complete your purchase.",
        },
        {
            header: "How long does it take to get Jaidah’s In-House Financing approval?",
            text: "Once your application is received in full, you can expect to receive a response within 1 to 2 working days. Your assigned sales consultant will contact you if any further clarification is required.",
        },
        {
            header: "What if I need help?",
            text: "You can call 800 0231 to speak to a representative during working hours.",
        },
    ]
    return (
        <div className="frequently-questions-container">
            <HomeCommonHeaders
                title="Frequently asked questions."
                desc="Shopping online for a vehicle might seem intimidating at first but it is the same as shopping online for any other product. It is still important that you feel completely comfortable and knowledgeable about all the specifics. So, take a look through the questions below that other people wanted cleared up before they took their next steps."
            />
            <div className="accordion-container">
                {data?.map((panel, index) => (
                    <AccordionItem
                        key={index}
                        index={index}
                        panel={panel}
                        setActiveAccordion={setActiveAccordion}
                        activeAccordion={activeAccordion}
                    />
                ))}
            </div>
        </div>
    );
}

export default FrequentlyQuestions;