import { useTranslation } from "next-i18next";

const NavMenu = ({ setOpenMenu }) => {
    const { t } = useTranslation('common')
    return (
        <div className="menu-container">
            <div className="close-icon" onClick={() => { setOpenMenu(false), document.body.classList.remove("no-scroll") }}>
                <svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z" /></svg>
            </div>
            <div className="lists">
                <div className="list-container bold">
                    <ul>
                        <li>{t("navbar.homepage")}</li>
                        <li>{t("navbar.vehicles")}</li>
                        <li>{t("navbar.myVehicle")}</li>
                        <li>{t("navbar.account")}</li>
                        <li>{t("navbar.login")}</li>
                    </ul>
                </div>
                <div className="booking-container">
                    <span>{t("navbar.utility")}</span>
                    <ul className="bold">
                        <li>{t("navbar.book_testDrive")}
                            <div className="circle"><svg width="9" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                            </svg></div>
                        </li>
                        <li>{t("navbar.book_Showroom")}
                            <div className="circle"><svg width="9" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                            </svg></div></li>
                        <li>{t("navbar.book_Service")}
                            <div className="circle"><svg width="9" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="#fff"></path>
                            </svg></div></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default NavMenu;