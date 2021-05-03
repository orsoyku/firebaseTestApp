import React from 'react'
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import './styles.css'

const ContactTable = ({ contactData, editContact, deleteContact }) => {
  return (
    <TableContainer className="tableContainer">
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Phone Number</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(contactData).map((id) => {
            return (
              <TableRow key={contactData[id].firstName}>
                <TableCell component="th" scope="row">
                  {contactData[id].firstName}
                </TableCell>
                <TableCell align="right">{contactData[id].lastName}</TableCell>
                <TableCell align="right">{contactData[id].email}</TableCell>
                <TableCell align="right">
                  {contactData[id].phoneNumber}
                </TableCell>
                <TableCell className="btn" aling="right">
                  <IconButton
                    aria-label="edit"
                    onClick={() => {
                      editContact(id);
                    }}
                  >
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell className="btn" aling="right">
                  <IconButton
                    aria-label="delete"
                    onClick={() => {
                      deleteContact(id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;