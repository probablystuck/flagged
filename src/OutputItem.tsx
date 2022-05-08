import { TableCell, Button } from "@material-ui/core"
import { useState } from "react"
import { CountryInfoType, getCountryDetails } from "./api/api"

interface Props {
  country: string
}

const OutputItem = ({ country }: Props) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfoType>()

  getCountryDetails(country).then((result) => {
    setCountryInfo(result[0])
  })

  return (
    <>
      <TableCell align="center">{country}</TableCell>
      {countryInfo != null ? (
        <TableCell>
          <div style={{ textAlign: "justify" }}>
            <p>Capital: {countryInfo.capital}</p>
            <p>Population: {countryInfo.population}</p>
            <p>Languages:</p>
            {countryInfo.languages.map((language) => (
              <p>{language}</p>
            ))}
            <p>Subregion: {countryInfo.subregion}</p>
            <p>Region: {countryInfo.region}</p>
          </div>
        </TableCell>
      ) : null}
    </>
  )
}

export default OutputItem
