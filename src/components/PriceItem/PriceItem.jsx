import React from "react";
import { useSelector } from "react-redux";

import { styled, TableCell, TableRow } from "@mui/material";
import { useDeleteServiceMutation } from "../../redux/services/servicesSlice";
import authSelectors from "../../redux/auth/authSelectors";
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const PriceItem = ({ _id: id, name, price }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [deleteService, { isLoading: isDeleting }] = useDeleteServiceMutation();

  return (
    <StyledTableRow
      sx={{
        "&:last-child td, &:last-child th": {
          border: 0,
        },
      }}
    >
      <TableCell>{name}</TableCell>
      <TableCell sx={{ textAlign: "right" }}>{price.woman.cost} zł</TableCell>
      <TableCell sx={{ textAlign: "right" }}>
        {price.woman.costByCard} zł
      </TableCell>
      {isLoggedIn && (
        <TableCell sx={{ textAlign: "right" }}>
          <button onClick={() => console.log("update")}>update</button>
          <button onClick={() => deleteService(id)} disabled={isDeleting}>
            Delete
          </button>
        </TableCell>
      )}
    </StyledTableRow>
  );
};
