import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';

import enFlag from './img/flags/gb.png';
import plFlag from './img/flags/pl.png';
import uaFlag from './img/flags/ua.png';

import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const LanguageLink = (props) => (
  <Button href={props.to} size="small">
    <Avatar src={props.icon} style={{
      width: 30,
      height: 30,
    }} />
  </Button>
);

const Link = (props) => (
  <Button
    sx={{ my: 2, color: 'white' }}
    href={props.to}
    startIcon={props.icon}
  >
    {props.label}
  </Button>
)

export default () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Box>
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            dopomoha.pl
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <LanguageLink to="/ua" label="ua" icon={uaFlag} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LanguageLink to="/pl" label="pl" icon={plFlag} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LanguageLink to="/en" label="en" icon={enFlag} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="mailto:kontakt@dopomoha.pl" label="contact" icon={<EmailIcon />} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="https://www.gov.pl/web/udsc/ukraina" label="ua.gov.pl" icon={<InfoIcon />} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="https://github.com/openstreetmap-polska/ua-2022-map" label="" icon={<GitHubIcon />} />
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            dopomoha.pl
          </Typography>
          <Box sx={{flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex'} }}>
            <LanguageLink to="ua" label="ua" icon={uaFlag} />
            <LanguageLink to="pl" label="pl" icon={plFlag} />
            <LanguageLink to="en" label="en" icon={enFlag} />
            <Link to="mailto:kontakt@dopomoha.pl" label="contact" icon={<EmailIcon />} />
            <Link to="https://www.gov.pl/web/udsc/ukraina" label="ua.gov.pl" icon={<InfoIcon />} />
            <Link to="https://github.com/openstreetmap-polska/ua-2022-map" label="" icon={<GitHubIcon />} />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

// export default () => (
//   <AppBar position="static">
//     <Container maxWidth="xl">
//       <Toolbar disableGutters>
//         <Typography
//           variant="h6"
//           component="div"
//           sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
//         >
//           dopomoha.pl
//         </Typography>
//         <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
          // <LanguageLink to="/ua" label="ua" icon={uaFlag} />
          // <LanguageLink to="/pl" label="pl" icon={plFlag} />
          // <LanguageLink to="/en" label="en" icon={enFlag} />
          // <Link to="mailto:kontakt@dopomoha.pl" label="contact" icon={<EmailIcon />} />
          // <Link to="https://www.gov.pl/web/udsc/ukraina" label="ua.gov.pl" icon={<InfoIcon />} />
          // <Link to="https://github.com/openstreetmap-polska/ua-2022-map" label="" icon={<GitHubIcon />} />
//         </Box>
//       </Toolbar>
//     </Container>
//   </AppBar>
// )