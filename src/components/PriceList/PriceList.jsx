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

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: COLORS.accentColor,
    color: COLORS.textColor,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const PriceList = ({ services, name }) => {
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
              <StyledTableRow
                key={service["_id"]}
                sx={{
                  "&:last-child td, &:last-child th": {
                    border: 0,
                  },
                }}
              >
                <TableCell>{service.name}</TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  {service.price.woman.cost} zł
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}>
                  {service.price.woman.costByCard} zł
                </TableCell>
                <TableCell sx={{ textAlign: "right" }}></TableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceList;
