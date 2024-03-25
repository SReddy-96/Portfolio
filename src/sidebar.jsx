import * as React from 'react';
import AboutMe from './AboutMe'
import AppBar from '@mui/material/AppBar';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import Box from '@mui/material/Box';
import ContactMe from './ContactMe.jsx';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu'
import MainImage from './mainImage'
import Projects from './Projects.jsx';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import XIcon from '@mui/icons-material/X';
import './styles/sidebar.css'

const drawerWidth = '50vw';

function ResponsiveDrawer(props) {

    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [isClosing, setIsClosing] = React.useState(false);

    const handleDrawerClose = () => {
        setIsClosing(true);
        setMobileOpen(false);
    };

    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };

    const handleDrawerToggle = () => {
        if (!isClosing) {
            setMobileOpen(!mobileOpen);
        }
    };


    const drawer = (
        <Box className="drawer">
            <Typography variant='h2' sx={{ mt: 10, fontWeight: 'bold' }}>Steven Reddy</Typography>

            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Web Developer</Typography>

            <Typography variant='paragraph' fontWeight="medium" sx={{ mt: 2 }}>
                I craft interactive and elegant online experiences, infusing creativity and
                expertise into every project I undertake.
            </Typography>

            <Divider variant='middle' flexItem sx={{ mt: 2 }} />

            <List sx={{ mt: 1 }}>
                <ListItem disablePadding>
                    <Link to="main" smooth duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ArrowRightOutlinedIcon />
                            <ListItemText primary="Home" />
                        </ListItemButton>
                    </Link>
                </ListItem>


                <ListItem disablePadding>
                    <Link to="AboutMe" smooth duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ArrowRightOutlinedIcon />
                            <ListItemText primary="About Me" />
                        </ListItemButton>
                    </Link>
                </ListItem>


                <ListItem disablePadding>
                    <Link to="Projects" smooth duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ArrowRightOutlinedIcon />
                            <ListItemText primary="Projects" />
                        </ListItemButton>
                    </Link>
                </ListItem>


                <ListItem disablePadding>
                    <Link to="ContactMe" smooth duration={500} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <ListItemButton>
                            <ArrowRightOutlinedIcon />
                            <ListItemText primary="Contact Me" />
                        </ListItemButton>
                    </Link>
                </ListItem>
                
            </List>



            <Box sx={{ my: 3 }}>
                <a className="socialIcon" aria-label="GitHub link" href="https://github.com/SReddy-96" ><GitHubIcon fontSize="medium" /></a>
                <a className="socialIcon" aria-label="Instagram link" href="https://instagram.com/justa_steve/"><InstagramIcon fontSize="medium" /></a>
                <a className="socialIcon" aria-label="Linkedin link" href="https://www.linkedin.com/in/steven-reddy-912b0b299"><LinkedInIcon fontSize="medium" /></a>
                <a className="socialIcon" aria-label="X link" href="https://www.x.com/SReddy_96"><XIcon fontSize="medium" /></a>
            </Box>
        </Box >
    );

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { md: `calc(100% - ${drawerWidth})` },
                    ml: { md: `${drawerWidth}` },
                }}
            >
                <Toolbar sx={{ display: { md: 'none' }, bgcolor: 'secondary.main', gap: '38vw', width: 'inherit' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' }, }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box className="LogoImage" sx={{ display: { md: 'none' }, mt: 1 }}>
                        <img src="images/logo.webp" alt="logo image" style={{ maxWidth: '100%', maxHeight: '40px' }} />
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { md: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="navbar"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onTransitionEnd={handleDrawerTransitionEnd}
                    onClose={handleDrawerClose}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'block', md: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'secondary.main' },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'none', md: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, bgcolor: 'secondary.main', },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>


            {/* main bit */}
            <Box
                component="main"
                sx={{ flexGrow: 1, width: { md: `calc(100% - ${drawerWidth})` } }}
                id="main"
            >
                <MainImage />
                <AboutMe />
                <Projects />
                <ContactMe />
            </Box>
        </Box>
    );
}

export default ResponsiveDrawer;