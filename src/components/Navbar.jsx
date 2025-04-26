
import React, { useState } from "react";
import {
    AppBar,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Box,
    Typography
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";
import LogoutIcon from '@mui/icons-material/Logout';



const Dropdown = ({ title, items }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    return (
        <>
            <Button
                color="inherit"
                endIcon={<ArrowDropDownIcon />}
                onClick={(e) => setAnchorEl(e.currentTarget)}
            >
                {title}
            </Button>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
            >
                {items.map(({ label, to }) => (
                    <MenuItem
                        key={label}
                        component={Link}
                        to={to}
                        onClick={() => setAnchorEl(null)}
                    >
                        {label}
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: "#172744", color: "#e8e8e8", py: 2 }}>
            <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                {/* Logo on the left */}
                <Link to="/home" style={{ textDecoration: "none" }}>
                    <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
                        <img src={Logo} alt="logo" height="40" />
                        <Typography style={{ color: "#CDC9CE", fontWeight: "600" }} >India</Typography>
                    </Box>
                </Link>
                {/* Center nav items */}
                <Box sx={{ display: "flex", gap: "1rem" }}>
                    {/* <Dropdown
                        title="Program"
                        items={[
                            { label: "Overview", to: "/program/overview" },
                            { label: "Benefits", to: "/program/benefits" },
                        ]}
                    /> */}
                    <Dropdown
                        title="Why Choose Us"
                        items={[
                            { label: "comparison", to: "/whychooseus" }
                        ]}
                    />
                    <Dropdown
                        title="Sales"
                        items={[
                            { label: "Sales Toolkit", to: "/sales/toolkit" },
                            { label: "Pipeline", to: "/sales/pipeline" },
                        ]}
                    />
                    <Dropdown
                        title="Marketing"
                        items={[
                            { label: "Campaigns", to: "/marketing/campaigns" },
                            { label: "Resources", to: "/marketing/resources" },
                        ]}
                    />
                    <Dropdown
                        title="Technical"
                        items={[
                            { label: "Docs", to: "/technical/docs" },
                            { label: "Support", to: "/technical/support" },
                        ]}
                    />
                    <Dropdown
                        title="Opps and Leads"
                        items={[
                            { label: "Register Deal", to: "/home/opps/register" },
                            { label: "View Registered Deals", to: "/home/opps/registered" },
                            { label: "View Opportunities", to: "/home/opps/opportunities" },
                        ]}
                    />
                    <Button component={Link} to="/university" color="inherit">
                        Partner University
                    </Button>
                    <Button component={Link} to="/assets" color="inherit">
                        Assets
                    </Button>
                    {user && (
                        <Box sx={{ ml: 2 }}>
                            <Button color="inherit" onClick={handleLogout}>
                                <LogoutIcon></LogoutIcon>
                            </Button>
                        </Box>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
