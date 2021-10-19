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

const useStyles = makeStyles((theme) => ({
  table: {
    width: "20%",
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
            <TableCell align="right">Countries</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flagsTranslated.map((flags) => (
            <TableRow key={flags.input}>
              <TableCell component="th" scope="row">
                {flags.input}
              </TableCell>
              <TableCell align="right">{flags.output}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default OutputBox
