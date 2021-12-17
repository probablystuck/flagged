import axios, { AxiosResponse } from "axios"

export interface CountryInfoType {
  name: string
  capital: string
  altSpellings: string[]
  subregion: string
  region: string
  population: number
  demonym: string
}

export async function getCountryDetails(countryName: string) {
  const url = `https://restcountries.com/v2/name/${countryName}?fullText=true`

  const response = await axios.get(url)

  return response.data
}
