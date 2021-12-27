import { CountryInfoType } from "./api"

interface Props {
  countryInfo?: CountryInfoType
}

const CountryInfo = ({ countryInfo }: Props) => {
  return (
    <>
      {countryInfo !== undefined ? <div>{countryInfo.population}</div> : null}
    </>
  )
}

export default CountryInfo
