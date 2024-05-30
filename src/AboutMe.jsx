import AssignmentIndOutlinedIcon from '@mui/icons-material/AssignmentIndOutlined';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function AboutMe() {
    return (
        <Box id="AboutMe" sx={{
            mt: '15vh',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Typography variant="h4" sx={{ mb: 2 }}>About Me</Typography>

            <Typography variant='body1' sx={{ fontWeight: 'medium', fontSize: '0.95rem' }}>
                Hello there, I'm Steven Reddy and my journey into the world of web development began in September 2023, when I made the bold move to live halfway across the world in South Korea. After a decade honing my skills in some of the finest restaurants in the UK as a chef, I decided to embark on a new path. <br />

                With a longstanding passion for coding and development, I've transitioned from the culinary world to pursue a full-time career in web development. Drawing from my experience as a chef, I bring a distinctive perspective to my coding endeavors, blending a passion for precision with a creative flair.<br />

                My focus lies primarily in crafting JavaScript web applications, where I pour my energy into both personal projects and self-directed learning. Embracing the dynamic nature of the field, I continually immerse myself in new languages and frameworks to stay ahead in this ever-evolving landscape.<br />

                Outside work, I’m obviously a massive foodie and I love to travel. I enjoy spending my spare time running and exploring the wilderness. <br />

                Join me on this exciting journey as I combine my culinary roots with my newfound passion for coding, shaping immersive digital experiences that captivate and inspire.<br />
            </Typography>
            <Button
                color="secondary"
                variant="contained"
                target="_blank"
                href="https://drive.google.com/file/d/1Oc_hOyKS6aD5NiS3mWFBDh4e0gYMu5wW/view?usp=sharing"
                sx={{ ':hover': { color: 'white', }, mt: 1 }}>
                
                <AssignmentIndOutlinedIcon sx={{ mr: 1 }}/>
                Resume
            </Button>
        </Box>
    )
}

export default AboutMe;