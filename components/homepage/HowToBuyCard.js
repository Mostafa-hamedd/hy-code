import Image from "next/image";

const HowToBuyCard = ({title,desc,icon}) => {
    return (
        <div className="how-to-buy-card">
            <Image
            alt="card-icon"
            src={icon}
            width={80}
            height={80}
            />
            <h3 className="bold">{title}</h3>
            <p>{desc}</p>
        </div>
    );
}

export default HowToBuyCard;