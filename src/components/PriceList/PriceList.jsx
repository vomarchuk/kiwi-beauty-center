import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { useSelector } from "react-redux";
import authSelectors from "../../redux/auth/authSelectors";
import { PriceItem } from "../PriceItem";
import { StyledTableCell } from "../../helpers";

export const PriceList = ({ services }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <TableContainer component={Paper} sx={{ mt: "30px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Zabieg</StyledTableCell>
            <StyledTableCell sx={{ textAlign: "right" }}>
              Cena z kartą Kiwi Beauty Center
            </StyledTableCell>
            <StyledTableCell sx={{ textAlign: "right" }}>
              Cena standard
            </StyledTableCell>
            {isLoggedIn && (
              <StyledTableCell sx={{ textAlign: "right" }}>
                edit
              </StyledTableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {services &&
            services.map((service) => (
              <PriceItem
                key={service._id}
                id={service._id}
                name={services.name}
                {...service}
              />
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
