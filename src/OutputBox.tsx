import {
  Paper,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
import OutputItem from "./OutputItem"

const useStyles = makeStyles((theme) => ({
  table: {
    display: "flex",
    width: "80%",
    margin: theme.spacing(3),
  },
}))

interface Props {
  flagsTranslated: {
    input: string
    output: string
  }[]
}

const OutputBox = ({ flagsTranslated }: Props) => {
  const styles = useStyles()

  return (
    <TableContainer component={Paper} className={styles.table}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Flags</TableCell>
            <TableCell align="left">Countries</TableCell>
            <TableCell>Info</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flagsTranslated.map((flags) => (
            <TableRow key={flags.input}>
              <TableCell component="th" scope="row">
                {flags.input}
              </TableCell>
              <OutputItem country={flags.output} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OutputBox
