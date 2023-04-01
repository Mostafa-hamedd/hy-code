import Image from "next/image";

const AccordionItem = ({ panel, index, setActiveAccordion, activeAccordion }) => {
    return (
        <div className="accordion-item" key={index}
            onClick={() => { activeAccordion == index ? setActiveAccordion(-1) : setActiveAccordion(index) }}
        >
            <div className={`accordion-header ${activeAccordion == index ? "active" : ""}`}>
                <h3 className="bold">{panel?.header}</h3>
                <Image
                    src="/icons/arrow-down.svg"
                    width={21}
                    height={10.5}
                    alt="Chevron Down" />
            </div>
            {activeAccordion == index && <div className="accordion-desc">
                <p>{panel?.text}</p>
            </div>}
        </div>
    );
}

export default AccordionItem;