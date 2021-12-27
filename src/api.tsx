import axios from "axios"

export interface CountryInfoType {
  name: string
  topLevelDomain: string[]
  alpha2Code: string
  alpha3Code: string
  callingCodes: string[]
  capital: string
  altSpellings: string[]
  subregion: string
  region: string
  population: number
  latlng: number[]
  demonym: string
  area: number
  gini: number
  timezones: string[]
  borders: string[]
  nativeName: string
  numericCode: string
  flags: {
    svg: string
    png: string
  }
  currencies: [
    {
      code: string
      name: string
      symbol: string
    }
  ]
  languages: [
    {
      iso639_1: string
      iso639_2: string
      name: string
      nativeName: string
    }
  ]
  translations: {
    br: string
    pt: string
    nl: string
    hr: string
    fa: string
    de: string
    es: string
    fr: string
    ja: string
    it: string
    hu: string
  }
  flag: string
  reginalBlocs: [
    {
      acronym: string
      name: string
    }
  ]
  cioc: string
  independent: boolean
}

export async function getCountryDetails(
  countryName: string
): Promise<CountryInfoType[]> {
  const url = `https://restcountries.com/v2/name/${countryName}?fullText=true`

  const response = await axios.get<CountryInfoType[]>(url)

  console.log(response)

  return response.data
}
