import Box from '@mui/material/Box'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import './styles/ContactMe.css'



function ContactMe() {

    const card = (
        <CardContent>
            <Typography variant="h3" sx={{ mb: 2, fontWeight: 'medium'}}>Contact Me</Typography>

            <Typography variant="body1" sx={{ mb: 3, fontWeight: 'medium'}}>
                I'm open to collaboration on exciting projects and always eager to connect with fellow developers and enthusiasts.
                Whether you're looking to collaborate or just want to say hello, I'd love to hear from you!
            </Typography>

            <Divider variant="middle" />

            <br />
            <Typography variant="body1" sx={{ mt: 1, fontWeight: 'medium' }}>
                Feel free to reach out to me via any of the following platforms:
            </Typography>
            <Box sx={{ mt: 4 }} variant="">
                <a className="socialIconContactMe" target="_blank" aria-label="GitHub link" href="https://github.com/SReddy-96" ><GitHubIcon fontSize="large" /></a>
                <a className="socialIconContactMe" target="_blank" aria-label="Instagram link" href="https://instagram.com/justa_steve/"><InstagramIcon fontSize="large" /></a>
                <a className="socialIconContactMe" target="_blank" aria-label="Linkedin link" href="https://www.linkedin.com/in/steven-reddy-912b0b299"><LinkedInIcon fontSize="large" /></a>
                <a className="socialIconContactMe" target="_blank" aria-label="X link" href="https://www.x.com/SReddy_96"><XIcon fontSize="large" /></a>
            </Box>

            <br />
            <Typography variant="body1" sx={{ mt: 1, fontWeight: 'medium' }}>
                You can also drop me an email at <span style={{ fontWeight: 'bold' }}>steveng.reddy@gmail.com</span>.
            </Typography>
            <br />
            <Typography variant="body1" sx={{ mt: 1, fontWeight: 'medium' }}>
                Let's create something amazing together!
            </Typography>
        </CardContent>
    )
    return (
        <Box id="ContactMe" sx={{
            mt: '15vh',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Card raised>
                {card}
            </Card>
        </Box >
    )
}

export default ContactMe;