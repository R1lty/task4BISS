import React from "react";
import ClientList from "./components/ClientList";
import { Container, Typography } from "@mui/material";

const App = () => {
    return (
        <Container>
            <Typography sx={{fontWeight: "bold", textAlign: "center", paddingBottom: "24px",paddingTop: "24px"}} variant="h3" component="h1" gutterBottom>
            List of clients
            </Typography>
            <ClientList />
        </Container>
    );
};

export default App;
