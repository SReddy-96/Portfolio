import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

function Projects() {

    const [expandedIndex, setExpandedIndex] = React.useState(-1);

    const handleExpandClick = (index) => {
        setExpandedIndex(expandedIndex === index ? -1 : index);
    };
    
    const ProjectList = [
        {
            title: "KettleWork30",
            image: "images/KettleWork30.png",
            description: "This is a 30-Minute KettleBell Workout Generator web application!",
            link: "https://github.com/SReddy-96/KettleWork30",
            frontend: "HTML, CSS, JavaScript, Bootstrap",
            backend: "Flask, Python, Sqlite3",
        },
        {
            title: "CampsiteExplorer",
            image: "images/CampsiteExplorer.png",
            description: "A campsite directory for people to add, view, edit and delete their own campsites.",
            link: "https://github.com/SReddy-96/CampsiteExplorer",
            frontend: "HTML, CSS, JavaScript, Bootstrap",
            backend: "Nodejs, EJS, Express.js, MongoDB, Mongoose ",
        },
                {
            title: "Portfolio",
            image: "images/home.png",
            description: "This is my personal portfolio website, showing of my skills and projects i've created.",
            link: "https://github.com/SReddy-96/Portfolio",
            frontend: "HTML, CSS, JavaScript, MUI, Vite, React",
            backend: "Nodejs, NPM",
        },
    ];

    return (
        <Box
            id="Projects"
            sx={{
                mt: '15vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}>

            <Typography variant="h3" sx={{ mb: 2, mt: '10vh' }}>Projects</Typography>

            {ProjectList.map((item, index) => {
                const { title, image, description, link, frontend, backend } = item;
                const isExpanded = expandedIndex === index;
                
                return (
                    <Card key={index} raised sx={{ maxWidth: 400, mt: 3 }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            image={image} // Replace <image-here> with actual image URL
                            alt="Project Image"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h4">
                                {title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {description}
                            </Typography>
                        </CardContent>

                        <CardActions sx={{ justifyContent: 'center' }}>
                            <Button
                                color="secondary"
                                variant="contained"
                                size="small"
                                href={link}
                                target="_blank"
                                sx={{ ':hover': { color: 'white', }, mr: 4 }}>
                                <GitHubIcon sx={{ mr: 1 }} />
                                GitHub Repository
                            </Button>

                            <Typography variant="subtitle1">
                                Languages
                            </Typography>

                            <ExpandMore
                                expand={isExpanded}
                                onClick={ () => handleExpandClick(index)}
                                aria-expanded={isExpanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </ExpandMore>
                        </CardActions>
                        <Collapse in={isExpanded} timeout="auto" unmountOnExit>
                            <Divider variant="middle" />
                            <CardContent>
                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Front End:
                                </Typography>
                                <Typography variant="body2">
                                    {frontend}
                                </Typography>

                                <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                                    Back End:
                                </Typography>
                                <Typography variant="body2">
                                    {backend}
                                </Typography>
                            </CardContent>
                        </Collapse>

                        <CardActions sx={{ justifyContent: 'center' }}>

                        </CardActions>
                    </Card>
                );
            })}
        </Box>
    );
}

export default Projects;
