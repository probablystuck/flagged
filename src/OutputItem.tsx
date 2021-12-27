import { TableCell, Button } from "@material-ui/core"
import { useState } from "react"
import { CountryInfoType, getCountryDetails } from "./api"
import CountryInfo from "./CountryInfo"

interface Props {
  country: string
}

const OutputItem = ({ country }: Props) => {
  const [countryInfo, setCountryInfo] = useState<CountryInfoType>()
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClick = (event: any) => {
    getCountryDetails(country).then((result) => {
      setCountryInfo(result[0])
    })
    setAnchorEl(event.currentTarget)
  }

  return (
    <TableCell align="right">
      <Button onClick={handleClick}>{country}</Button>
      {countryInfo != null ? (
        <CountryInfo
          countryInfo={countryInfo}
          anchor={anchorEl}
          onClose={handleClose}
        />
      ) : null}
    </TableCell>
  )
}

export default OutputItem
