

import React from "react";
import { Box, Container, Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

import Navbar from "../components/Navbar";

const WhyChooseUs = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#060D18',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Navbar */}
            <Navbar />

            {/* Globe image */}
            {/* <Box
                sx={{
                    position: "absolute",
                    top: "80px", // push globe a bit lower to not cover Navbar
                    right: "5%",
                    zIndex: 0,
                    opacity: 0.2, // light effect
                }}
            >
                <img src={Globe} alt="globe" style={{ height: 500, maxWidth: '100%' }} />
            </Box> */}

            {/* Main content */}
            <Container maxWidth="md" sx={{ position: "relative", zIndex: 1, mt: 4, mb: 4 }}>
                <Paper
                    elevation={6}
                    sx={{
                        p: 4,
                        borderRadius: 3,
                        backgroundColor: "rgba(255, 255, 255, 0.05)",
                        backdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        color: "#ffffff",
                    }}
                >
                    {/* Page Title */}
                    <Typography variant="h4" mb={2} fontWeight="bold" align="center" sx={{ color: "#ffffff" }}>
                        Why Choose OneFirewall Alliance?
                    </Typography>

                    {/* Content */}
                    <Typography variant="body1" mb={3} sx={{ color: '#ccc', textAlign: 'justify' }}>
                        OneFirewall Alliance is the only threat intelligence provider in India offering direct real-time integration at the firewall level,
                        enabling proactive threat blocking. Unlike global providers who primarily integrate with SIEM/XDR systems,
                        OneFirewall delivers multi-vendor intelligence sharing across firewalls, SIEMs, and XDRs — making it the most
                        vendor-agnostic and cost-effective solution for businesses and MSSPs.
                    </Typography>

                    {/* Table */}
                    <TableContainer component={Paper} sx={{ backgroundColor: "rgba(255,255,255,0.03)" }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }}>Provider</TableCell>
                                    <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }} align="center">Firewall Integration</TableCell>
                                    <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }} align="center">XDR/SIEM Integration</TableCell>
                                    <TableCell sx={{ color: "#ffffff", fontWeight: "bold" }} align="center">Standalone TI</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {[
                                    { provider: "OneFirewall Alliance", firewall: "Yes (Multi-Vendor)", xdr: "Yes", standalone: "Yes" },
                                    { provider: "Recorded Future", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                    { provider: "Mandiant (Google)", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                    { provider: "CrowdStrike Falcon X", firewall: "No", xdr: "Yes (XDR)", standalone: "Yes" },
                                    { provider: "Kaspersky TI", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                    { provider: "Group-IB", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                    { provider: "Anomali", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                    { provider: "Microsoft Defender TI", firewall: "No", xdr: "Yes (MS Sentinel)", standalone: "No" },
                                    { provider: "CYFIRMA", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                    { provider: "Cyble", firewall: "No", xdr: "Yes", standalone: "Yes" },
                                ].map((row, index) => (
                                    <TableRow key={index}>
                                        <TableCell sx={{ color: "#ccc" }}>{row.provider}</TableCell>
                                        <TableCell align="center" sx={{ color: "#ccc" }}>{row.firewall}</TableCell>
                                        <TableCell align="center" sx={{ color: "#ccc" }}>{row.xdr}</TableCell>
                                        <TableCell align="center" sx={{ color: "#ccc" }}>{row.standalone}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    {/* Why Stand Out Points */}
                    <Box mt={4}>
                        <Typography variant="h5" mb={2} fontWeight="bold" sx={{ color: '#ffffff' }}>
                            Why OneFirewall Stands Out
                        </Typography>
                        <ul style={{ color: '#ccc', paddingLeft: '20px' }}>
                            <li>Direct real-time integration with firewalls — blocks threats instantly.</li>
                            <li>Multi-vendor support — works with different firewalls, SIEMs, and XDRs.</li>
                            <li>Focused on Indian threat intelligence — built for Indian businesses.</li>
                            <li>Cost-effective — avoid expensive SIEM/XDR-only solutions.</li>
                        </ul>
                    </Box>

                    {/* Conclusion */}
                    <Box mt={4}>
                        <Typography variant="body1" sx={{ color: '#ccc', textAlign: 'justify' }}>
                            OneFirewall Alliance offers a unique, real-time, vendor-agnostic threat intelligence platform specifically for the Indian market.
                            It is the perfect choice for businesses and MSSPs looking for proactive security without heavy SIEM/XDR costs.
                        </Typography>
                    </Box>
                </Paper>
            </Container>
        </Box>
    );
};

export default WhyChooseUs;
