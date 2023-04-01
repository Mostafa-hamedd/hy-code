import { API_URL } from "../the-ark"

async function fetchDataWithParams(url, params, locale) {
	const apiurl = process.env.API_URL ? process.env.API_URL : API_URL
	const response = await fetch(`${apiurl}${url}`, {
		method: "POST",
		headers: {
			"Accept-Language": locale,
			"Content-type": "application/json; charset=UTF-8",
		},
		body: JSON.stringify(params),
	})

	if (!response.ok) {
		throw new Error("There is an error with your internet connection")
	}

	return response.json()
}

export default fetchDataWithParams
