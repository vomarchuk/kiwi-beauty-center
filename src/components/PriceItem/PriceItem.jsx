import React from "react";
import { useSelector } from "react-redux";
import { TableCell } from "@mui/material";
import { useDeleteServiceMutation } from "../../redux/services/servicesSlice";
import authSelectors from "../../redux/auth/authSelectors";
import { StyledTableRow } from "../../helpers";

export const PriceItem = ({ id, name, cost, costByCard }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const [deleteService, { isLoading: isDeleting }] = useDeleteServiceMutation();
  return (
    <StyledTableRow>
      <TableCell>{name}</TableCell>
      <TableCell sx={{ textAlign: "right" }}>{costByCard} zł</TableCell>
      <TableCell sx={{ textAlign: "right" }}>{cost} zł</TableCell>
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
