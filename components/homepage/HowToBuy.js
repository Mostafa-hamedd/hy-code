import HomeCommonHeaders from "./HomeCommonHeaders";
import HowToBuyCard from "./HowToBuyCard";

const HowToBuy = () => {
    const cardsData = [
        {
            icon: '/icons/buy1.svg',
            title: "Easy And Convenient",
            desc: "Simply compare models, choose your dream car, select your add-ons, apply for finance, generate your quote and complete your purchase - all in one place!"

        }, {
            icon: '/icons/buy2.svg',
            title: "Secure And Transparent",
            desc: "We are committed to making every stage of your shopping experience worthy of your trust. With our enhanced security protocols, your journey is 100% safe. In addition, our unified pricing policy guarantees complete transparency online and in the showroom."

        }, {
            icon: '/icons/buy3.svg',
            title: "Seamless Journey",
            desc: "We realize that purchasing a vehicle is a very important decision, and so we have made your purchase experience effortless. You can switch between shopping online and the showroom at any stage while purchasing your vehicle."

        },
    ]
    return (
        <div className="how-to-buy">
            <HomeCommonHeaders
                title="How to buy your vehicle online?"
                desc="Discover the benefits of purchasing the Hyundai you love online."
                smallTitle
                fullWidth
            />
            <div className="cards-container">
                {cardsData?.map((item, index) => (
                    <HowToBuyCard
                        key={index}
                        icon={item?.icon}
                        title={item?.title}
                        desc={item?.desc}
                    />
                ))}
            </div>
        </div>
    );
}

export default HowToBuy;