import Box from '@mui/material/Box';
import SwipeDownIcon from '@mui/icons-material/SwipeDown';
import './styles/mainImage.css'

function MainImage() {
    
    return (
        <Box
            id="Home"
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                mt: '5vh',
                height: '100vh',
            }}>
            <div id="image">
                <img className="i" src="images/selfimage.jpg" alt="Image of Steven Reddy" />
            </div>
            <SwipeDownIcon fontSize="large" sx={{ my: 12 }} />
        </Box>
    )
}

export default MainImage;