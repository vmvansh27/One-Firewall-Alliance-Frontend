import { Box, Typography } from '@mui/material';
import Navbar from '../components/Navbar';
import { useEffect, useState } from 'react';
import Globe from "../assets/globe2.png";

function HomePage() {
    const [userName, setUserName] = useState("");

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (user && user.name) {
            setUserName(user.name);
        }
    }, []);

    return (
        <Box
            sx={{
                // backgroundColor: '#172744',
                background: 'linear-gradient(to bottom, #142d4c, #113f67, #38598b, #455d7a)',
                minHeight: '100vh',
                // display: 'flex',
                // alignItems: 'center',
                // justifyContent: 'center',
            }}
        >
            <Navbar />
            <Box sx={{
                display: 'flex',
                flexDirection: ['column', 'row'],
                gap: 10,
            }}>
                <Box p={3} m={15}>
                    <Typography variant="h3" style={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '200',
                    }} gutterBottom>
                        {/* Welcome {userName} */}
                        Actionable Threat
                    </Typography>
                    <Typography variant="h3" style={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '200',
                    }} gutterBottom>
                        Intelligence for
                    </Typography>
                    <Typography variant="h3" style={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '200',
                    }} gutterBottom>
                        real-time protection
                    </Typography>
                    <Typography variant="h6" style={{
                        background: 'linear-gradient(to right, #a2a8d3, #e7eaf6)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        fontWeight: '200',
                    }}>
                        Welcome to partner portal.
                    </Typography>
                    {/* Add any dashboard widgets, stats, etc. here later */}

                </Box>

                <Box
                    ml={25} mt={5}
                >
                    <img src={Globe} alt="logo" style={{ height: 500 }} />
                </Box>
            </Box>
        </Box>
    );
}

export default HomePage;
