import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  styled,
} from "@mui/material";
import { COLORS } from "../../Constants";
import { PriceItem } from "../PriceItem";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.accentColor,
    color: COLORS.textColor,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const PriceList = ({ services }) => {
  return (
    <TableContainer component={Paper} sx={{ mt: "30px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Zabieg</StyledTableCell>
            <StyledTableCell sx={{ textAlign: "right" }}>
              Cena standard
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "right" }}>
              Cena z kartą Kiwi Beauty Center
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "right" }}>edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {services &&
            services.map((service) => (
              <PriceItem key={service._id} {...service} />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceList;
