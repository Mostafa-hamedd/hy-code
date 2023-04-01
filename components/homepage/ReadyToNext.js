import Image from "next/image";
import { useContext } from "react";
import { isMobileContext } from "../../contexts/isMobileContext";

const ReadyToNext = () => {
    const { isMobile } = useContext(isMobileContext)
    return (
        <div className="ready-to-container">
            <div className="img-container">
                <Image
                    fill
                    alt="next-step"
                    src={isMobile ? "/homePage/ready-image-mobile.jpg" : "/homePage/ready-image-desktop.jpg"}
                />
            </div>
            <div className="ready-data">
                <h5 className="bold">{"Ready\nto take your next step?"}</h5>
                <div className="ready-button">
                    <Image
                        alt="button-icon"
                        width={48}
                        height={48}
                        src={"/icons/car-button.svg"}
                    />
                    <span>Start your journey now</span>
                </div>
            </div>
        </div>
    );
}

export default ReadyToNext;