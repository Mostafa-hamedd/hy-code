import Image from "next/image";
import { useFormik } from "formik"
import { useState } from "react";
import * as Yup from "yup"
import Buttons from "./Buttons";
import { toast } from "react-toastify";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
const Footer = () => {
	const { t } = useTranslation('common')
	const { locale } = useRouter()
	const [isChecked, setIsChecked] = useState(false)
	const validationSchema = Yup.object({
		email: Yup.string().email(t("footer.email_incorrect")).required(t("footer.email_required"))
			.matches(/^([a-zA-Z0-9_\-\.])/, t("footer.email_incorrect")),
	});

	const onSubmit = async (values, { resetForm }) => {
		!isChecked ? toast.error(`${t("footer.toast_error")}`, {
			position: "top-right",
			className: "toast-message",
			autoClose: 2500,
		}) : toast.success(`${t("footer.toast_success")}`, {
			position: "top-right",
			className: "toast-message",
			autoClose: 2500,
		})
		// const data = { data: values }
		// fetch(`${API_URL}/news-later-forms`, {
		// 	method: "POST",
		// 	body: JSON.stringify(data),
		// 	headers: {
		// 		"Content-type": "application/json; charset=UTF-8",
		// 	},
		// }).then(resp =>
		// 	resp.status == 200 ?
		// 		(setIsSubmit(true),
		// 			setIsSending(false),
		// 			resetForm()
		// 		) :
		// 		console.log(resp)
		// ).catch((error) => {
		// 	console.log(error);
		// });
	};

	const initialValues = {
		email: "",
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});
	return (
		<div className="footer">
			<div className="logos-container">
				<div className="main-logo">
					<Image
						alt="hyundai-logo"
						src="/icons/logo-footer.svg"
						fill
					/>
				</div>
				<div className="main-logo sub-logo">
					<Image
						alt="skyline-logo"
						src="/icons/skyline-logo.svg"
						fill
					/>
				</div>
			</div>
			<div className="contact-data-container">
				<div className="map">
					<Image
						alt="icon"
						src="/icons/map-icon.svg"
						width={16}
						height={16}
					/>
					<div className="data">
						<h6>{t("footer.salwa_road")}</h6>
						<p>{t("footer.time")}</p>
					</div>
				</div>
				<a href={`tel:8000 231`} target={'_blank'} rel="noreferrer">
					<div className="map">
						<Image
							alt="icon"
							src="/icons/phone-icon.svg"
							width={16}
							height={16}
						/>
						<div className="data">
							<p>{t("footer.number")}</p>
						</div>
					</div>
				</a>
			</div>
			<div className="form-container">
				<h6 className="bold">{t("footer.subscribe_to")}</h6>
				<form onSubmit={formik.handleSubmit}>
					<div className="input-group">
						<label htmlFor="email-input" style={{ display: "none" }}>email</label>
						<div className="input-desktop">

							<input
								type="text"
								placeholder={t("footer.your_email")}
								name="email"
								className={`form-input ${formik.errors.email ? "error" : ""}`}
								id="email-input"
								{...formik.getFieldProps("email")}
							/>
							<button type="submit" className="button-desktop">
								<Buttons text={t("footer.subscribe")} />
							</button>
						</div>
						{formik.touched.email && formik.errors.email && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ErrorIcon"><path d="M16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16C12.4183 16 16 12.4183 16 8Z" fill="red"></path><path d="M7.11114 8.88892H8.88892V3.55558H7.11114L7.11114 8.88892Z" fill="white"></path><path d="M7.55569 8.44446H8.44458V4.00001H7.55569L7.55569 8.44446Z" fill="white"></path><path d="M7.99992 9.77779C7.26354 9.77779 6.66659 10.3747 6.66659 11.1111C6.66659 11.8475 7.26354 12.4445 7.99992 12.4445C8.7363 12.4445 9.33325 11.8475 9.33325 11.1111C9.33325 10.3747 8.7363 9.77779 7.99992 9.77779Z" fill="white"></path><path d="M8.00003 10.2222C7.50911 10.2222 7.11114 10.6202 7.11114 11.1111C7.11114 11.602 7.50911 12 8.00003 12C8.49095 12 8.88892 11.602 8.88892 11.1111C8.88892 10.6202 8.49095 10.2222 8.00003 10.2222Z" fill="white"></path></svg>}
						{formik.touched.email && formik.errors.email && <p className="input-error">{formik.errors.email}</p>}
					</div>
					<div className="input-group checkbox">
						<label htmlFor="checkbox" style={{ display: "none" }}>Conditions</label>
						<input
							type="checkbox"
							name="checkbox"
							id="checkbox"
							className="form-checkbox"
							{...formik.getFieldProps("checkbox")}
							onClick={() => { setIsChecked(!isChecked) }}
						/>
						<div className="custom-check">
							<svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="RadioIcon"><path d="M11.8335 0.179291L13.0825 1.42833L4.92265 9.58821L0.929443 5.595L2.17849 4.34596L4.92265 7.09012L11.8335 0.179291Z" fill="#0559f7"></path></svg>
						</div>
						<span>{t("footer.i_agree")}<span style={{ color: "#0559f7" }}>*</span></span>
					</div>
					<button type="submit" className="button-mobile">
						<Buttons text={"Subscribe"} />
					</button>
				</form>
			</div>
			<div className="copy-rights-container">
				<ul className="links-list">
					<li>{t("footer.privacy_policy")}</li>
					<li>{t("footer.terms")}</li>
					{locale == "en" &&
						<>
							<li>{t("footer.report")}</li>
							<li>{t("footer.sitemap")}</li>
						</>
					}
				</ul>
				<div className="icons">
					<Image
						alt="icon"
						src="/icons/instagram.svg"
						width={20}
						height={20}
					/>
					<Image
						alt="icon"
						src="/icons/facebook.svg"
						width={20}
						height={20}
					/>
				</div>
				<p>{t("footer.copyright")}</p>
			</div>
		</div>
	);
};

export default Footer;


