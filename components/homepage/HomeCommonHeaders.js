const HomeCommonHeaders = ({title,desc,smallTitle,fullWidth}) => {
    return (
        <div className="home-common-headrs">
            <h2 className={`header-title bold ${smallTitle?"small-font":""}`}>{title}</h2>
            {desc?<p className={`header-desc ${fullWidth?"full-width":""}`}>{desc}</p>:""}
        </div>
    );
}

export default HomeCommonHeaders;