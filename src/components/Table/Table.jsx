import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Table.css'

function createData(
  name,
  Customer_Id,
  Customer_Rating,
  Date,
  Status,
) {
  return { name, Customer_Id, Customer_Rating ,Date,Status, };
}

const rows = [
  createData('Fried Chicken', 15934536, 4.5, '4 November 2023', 'Pending'),
  createData('Ice cream sandwich', 14902342, 4.2, '4 November 2023', 'Pending'),
  createData('Eclair', 14357893, 6.0, '4 November 2023', 'Supplied'),
  createData('Cupcake', 15327380, 3.7, '4 November 2023', 'Pending'),
  createData('Pizza', 123673003, 3.9, '4 November 2023', 'Supplied'),
];

const makeStyles=(status)=>{
    if(status==='Supplied')
    {
        return{
            background: 'rgb(145 254 159 / 47%)',
            color: 'green',
        }
    } else if(status==='Pending'){
        return{
            background: '#ffadad8f',
            color: 'red',
        }
    } else {
        return{
            background: '#59bfff',
            color: 'white',
        }
    }
}
 const BasicTable = () => {
  return (
    <div className='Table'>
        <h3 className='header'>Recent Orders</h3>
     <TableContainer style={{boxShadow: '0px 13px 20px 0px #80808029'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="left">Customer_Id</TableCell>
            <TableCell align="left">Customer_Rating</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='Details' align="left">{row.Customer_Id}</TableCell>
              <TableCell align="left">{row.Customer_Rating}</TableCell>
              <TableCell align="left">{row.Date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.Status)}>{row.Status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
     </TableContainer>
    </div>
  );
}
export default BasicTable
