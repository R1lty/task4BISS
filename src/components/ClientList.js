import React, { useEffect, useState } from "react";
import { getClients } from "../services/api";
import { CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchClients = async () => {
            try {
                const data = await getClients();
                setClients(data.value || []);
            } catch (err) {
                setError("Failed to load client list");
            } finally {
                setLoading(false);
            }
        };
        fetchClients();
    }, []);

    if (loading) return <CircularProgress />;
    if (error) return <p>{error}</p>;

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{ fontWeight: "bold" }}>Id</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Surname/Company</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
                        <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients.map((client) => (
                        <TableRow key={client.clientID}>
                            <TableCell>{client.clientID}</TableCell>
                            <TableCell>{client.lastNameOrCompany}</TableCell>
                            <TableCell>{client.firstName}</TableCell>
                            <TableCell>{client.email}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ClientList;
