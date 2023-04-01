import { API_URL } from "../the-ark"

async function fetchData(url, locale) {
	const apiurl = process.env.API_URL ? process.env.API_URL : API_URL
	const response = await fetch(`${apiurl}${url}`, {
		headers: {
			"Accept-Language": locale,
		},
	})

	if (!response.ok) {
		throw new Error("There is an error with your internet connection")
	}

	return response.json()
}

export default fetchData
