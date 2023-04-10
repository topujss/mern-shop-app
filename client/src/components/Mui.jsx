import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const headerComponent = ({ label, color }) => {
  const marginX = { marginTop: 5, marginBottom: 5 };
  return (
    <Divider sx={marginX}>
      <Chip label={label} color={color} />
    </Divider>
  );
};

function Mui() {
  const col = [
    {
      field: 'id',
      headerName: 'ID',
      width: 90,
    },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'middleInitial', headerName: 'Middle Initial', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    { field: 'age', headerName: 'Age', width: 90 },
    {
      field: 'fullName',
      headerName: 'Full Name',
      width: 170,
      sortable: false,
      valueGetter: (p) => `${p.row.firstName} ${p.row.middleInitial} ${p.row.lastName}`,
    },
  ];
  const row = [
    { id: 1, firstName: 'John', middleInitial: 'M', lastName: 'Doe', age: 30 },
    { id: 1, firstName: 'John', middleInitial: 'M', lastName: 'Doe', age: 30 },
    { id: 1, firstName: 'John', middleInitial: 'M', lastName: 'Doe', age: 30 },
  ];

  return (
    <>
      <section>
        {headerComponent({ label: 'Title', color: 'primary' })}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Cell</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableCell>1</TableCell>
            <TableCell>Toquir</TableCell>
            <TableCell>t@gmai.co</TableCell>
            <TableCell>274-482-4245</TableCell>
          </TableBody>
        </Table>
      </section>
      {headerComponent({ label: 'Data Grid', color: 'secondary' })}
      <section>
        <Box sx={{ height: 300, width: '100%' }}>
          <DataGrid rows={row} columns={col} pageSizeOptions={[1]} />
        </Box>
      </section>
      {headerComponent({ label: 'Accordion', color: 'success' })}
      <section>
        <Accordion>
          <AccordionSummary> Are you ok?</AccordionSummary>
          <AccordionDetails>yes</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary> Are you ok?</AccordionSummary>
          <AccordionDetails>yes</AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary> Are you ok?</AccordionSummary>
          <AccordionDetails>yes</AccordionDetails>
        </Accordion>
      </section>
    </>
  );
}
export default Mui;
