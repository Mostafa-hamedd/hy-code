import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const LangDropDown = ({ setOpenDrop }) => {
    const { t } = useTranslation('common')
    const router = useRouter()
    const { locale } = useRouter()
    const { pathname, asPath, query } = router
    const switchLang = (lang) => {
        router.push({ pathname: pathname, query: query }, asPath, {
            locale: lang,
        })
        setOpenDrop(false)
    }
    useEffect(() => {
        console.log(locale, "asdasd")
    }, [])
    return (
        <div className="drop-down">
            <span>{t("navbar.language")}</span>
            {locale == "en" ?
                <>
                    <span onClick={() => switchLang("en")}>{t("navbar.english")}</span>
                    <span onClick={() => switchLang("ar")}>{t("navbar.arabic")}</span>
                </>
                :
                <>
                    <span onClick={() => switchLang("ar")}>{t("navbar.english")}</span>
                    <span onClick={() => switchLang("en")}>{t("navbar.arabic")}</span>
                </>
            }
        </div>
    );
}

export default LangDropDown;