const Buttons = ({text}) => {
    const goTo=()=>{}
    return (
        <div className="button-container bold" onClick={goTo}>
            {text}
        </div>
    );
}

export default Buttons;