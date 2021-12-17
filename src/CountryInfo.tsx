import { CountryInfoType } from "./api"

interface Props {
  countryInfo?: CountryInfoType
}

const CountryInfo = ({ countryInfo }: Props) => {
  console.log(countryInfo)
  return <>{countryInfo != null ? <div>{countryInfo.population}</div> : null}</>
}

export default CountryInfo
