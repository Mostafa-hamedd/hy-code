import { useTranslation } from "next-i18next";
import Buttons from "../common/Buttons";
import HomeCommonHeaders from "./HomeCommonHeaders";

const PurchaseBrand = () => {
    const { t } = useTranslation('common')
    return (
        <div className="purchase-container">
            <HomeCommonHeaders
                title='Purchase your brand new Hyundai without leaving the comfort of your home.'
                desc='Find, reserve or purchase your brand new Hyundai online. Simple, safe and convenient, Click to Buy is the smartest way to shop for your next Hyundai.'
            />
            <Buttons text={t("common.get_start")} />
        </div>
    );
}

export default PurchaseBrand;