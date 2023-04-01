import { useTranslation } from "next-i18next"
import Image from "next/image"
import { useRouter } from "next/router"
import { useContext, useState } from "react"
import { isMobileContext } from "../../contexts/isMobileContext"
import LangDropDown from "./LangDropDown"
import NavMenu from "./NavMenu"

const Navbar = () => {
	const [opendrop, setOpenDrop] = useState(false)
	const [openMenu, setOpenMenu] = useState(false)
	const { isMobile } = useContext(isMobileContext)
	const { t } = useTranslation('common')
	return (
		<>
			<nav className="main-nav">
				<div className="logo-container">
					<Image
						fill
						sizes=""
						alt="nav-logo"
						src={isMobile?'/icons/jaidah_logo_mobile.svg':'/icons/jaidah_logo.svg'}
						priority
					/>
				</div>
				<div className="lang-container">
					<div className="lang-switcher" onClick={() => setOpenDrop(!opendrop)}>
						<span className="bold">{t("navbar.eng")}</span>
						<svg className={`${opendrop ? "rotate" : ""}`} width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5.8535 13.707L11.5605 7.99997L5.8535 2.29297L4.4395 3.70697L8.7325 7.99997L4.4395 12.293L5.8535 13.707Z" fill="black"></path>
						</svg>
						{opendrop && <LangDropDown setOpenDrop={setOpenDrop} />}
					</div>
					<Image
						width="28"
						height="24"
						alt="my-cars-icon"
						src={'/icons/my-cars.svg'}
					/>
					<div className="menu-icon" onClick={() => { setOpenMenu(true), document.body.classList.add("no-scroll"),setOpenDrop(false) }}>
						<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.001 1H0.000976562V3H16.001V1Z" fill="black"></path><path d="M16.001 7H3.00098V9H16.001V7Z" fill="black"></path><path d="M16.001 13H0.000976562V15H16.001V13Z" fill="black"></path></svg>
					</div>
				</div>
			</nav>
			{openMenu && <NavMenu setOpenMenu={setOpenMenu} />}
		</>
	)
}

export default Navbar
