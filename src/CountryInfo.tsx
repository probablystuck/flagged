import { Popover } from "@material-ui/core"
import { CountryInfoType } from "./api"

interface Props {
  countryInfo: CountryInfoType
  onClose: () => void
  anchor: any
}

const CountryInfo = ({ countryInfo, onClose, anchor }: Props) => {
  return (
    <Popover
      id={countryInfo.name}
      open={anchor != null}
      anchorEl={anchor}
      onClose={onClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <p>{countryInfo.capital}</p>
      <p>{countryInfo.population}</p>
    </Popover>
  )
}

export default CountryInfo
