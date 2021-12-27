import { TableCell, Button } from "@material-ui/core"
import { useState } from "react"
import { CountryInfoType, getCountryDetails } from "./api"
import CountryInfo from "./CountryInfo"

interface Props {
  country: string
}

const OutputItem = ({ country }: Props) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfoType>()

  function handleOnClick() {
    getCountryDetails(country).then((result) => {
      setCountryInfo(result[0])
    })
  }

  return (
    <TableCell align="right">
      <Button onClick={handleOnClick}>{country}</Button>
      <CountryInfo countryInfo={countryInfo} />
    </TableCell>
  )
}

export default OutputItem
