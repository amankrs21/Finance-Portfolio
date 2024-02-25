import React, { useEffect, useState } from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Layout from '../Layout';
import Auth from '../../components/Auth';

export default function AdminPayment() {
    const { http } = Auth();
    const [show, setShow] = useState(false);
    const [payment, setPayment] = useState([]);

    useEffect(() => {
        const getPayments = async () => {
            try {
                const res = await http.get("/payment/admin/history");
                setPayment(res.data.data);
                setShow(res.data.data.length > 0);
            } catch (err) {
                console.log("Error in getting payment history:", err);
            }
        };
        getPayments();
    }, [http]);

    return (
        <Layout>
            <Container maxwidth='lg' style={{ marginTop: '10px', marginBottom: '10px' }}>
                <Grid container alignItems="center">
                    <Grid item xs={6}>
                        <Typography variant="h4" style={{ textAlign: 'left' }}>
                            Payments's History
                        </Typography>
                    </Grid>
                </Grid>
                <hr color='grey' />
                <Box mt={2}>
                    {show &&
                        <TableContainer maxwidth="md" component={Paper} elevation={0} variant="outlined">
                            <Table aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>#</TableCell>
                                        <TableCell>Payment ID</TableCell>
                                        <TableCell>User</TableCell>
                                        <TableCell>Payment Date</TableCell>
                                        <TableCell>Paid Amount</TableCell>
                                        <TableCell>Payment Status</TableCell>
                                        <TableCell>Description</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {payment.map((pay, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{index + 1}</TableCell>
                                            <TableCell>{pay.pay_id}</TableCell>
                                            <TableCell>{pay.user}</TableCell>
                                            <TableCell>{new Date(pay.date).toLocaleString()}</TableCell>
                                            <TableCell>&#8377; {pay.amount}</TableCell>
                                            <TableCell>{pay.status ? "Success" : "Failed"}</TableCell>
                                            <TableCell>{pay.description}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    }
                    {!show && <Typography variant="h4" style={{ textAlign: 'center' }}> No Payments Found</Typography>}
                </Box>
            </Container>
        </Layout>
    );
}
