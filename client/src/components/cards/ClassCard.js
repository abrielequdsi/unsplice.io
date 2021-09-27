import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LanguageIcon from '@mui/icons-material/Language';

const ClassCard = ({ userInfo }) => {
    const { github, instagram, linkedin, website } = userInfo.socialLinks
    return (
        <Card sx={{ minWidth: 275 }} >
            {/* sx={{ alignItems: 'center' }} */}
            <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{ marginLeft: 'auto', marginRight: 'auto', mt: 1.5 }} />
                <Typography variant="h5" component="div" sx={{ mt: 2.75 }}>
                    {userInfo.firstName} {userInfo.lastName}
                </Typography>
                <Typography sx={{ mb: 3 }} color="text.secondary">
                    {userInfo.institution}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', mr: 7, ml: 7, mb: 1.5 }}>
                    {github && (<Link href={github}> <GitHubIcon sx={{ color: '#333' }} /></Link>)}
                    {instagram && (<Link href={instagram}> <InstagramIcon sx={{ color: 'rgb(215, 51, 109)' }} /></Link>)}
                    {linkedin && (<Link href={linkedin}> <LinkedInIcon /></Link>)}
                    {website && (<Link href={website}> <LanguageIcon sx={{ color: '#3337' }} /></Link>)}
                </Box>

            </CardContent>
        </Card>
    );
}

export default ClassCard