import * as React from 'react';
import { useTranslation } from "react-i18next";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import EmailIcon from '@mui/icons-material/Email';
import InfoIcon from '@mui/icons-material/Info';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';

import enFlag from './img/flags/gb.png';
import plFlag from './img/flags/pl.png';
import uaFlag from './img/flags/ua.png';

import { Link as LinkRouter, useParams } from "react-router-dom";
import { useEffect } from 'react';
import { LANGUAGE } from './utils/consts';

const LanguageLink = ({ to, icon }) => (
  <LinkRouter to={to}>
    <Avatar src={icon} style={{
      width: 30,
      height: 30,
    }} />
  </LinkRouter>
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

const Title = ({ t }) =>
  <React.Suspense fallback=''>
    <Typography>{ t('title') }</Typography>
  </React.Suspense>

const Header = () => {
  const { t, i18n } = useTranslation(['common']);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  let { lang } = useParams();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  useEffect(()=> {
      switch(lang) {
        case LANGUAGE.EN:
          changeLanguage(LANGUAGE.EN)
          break;
        case LANGUAGE.PL:
          changeLanguage(LANGUAGE.PL)
          break;
        case LANGUAGE.RU:
          changeLanguage(LANGUAGE.RU)
          break;
        case LANGUAGE.UA:
          changeLanguage(LANGUAGE.UA)
          break;
        default: changeLanguage(LANGUAGE.UA)
          break;
      }
  }, [lang])


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
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
          <Title t={t} />
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
                <LanguageLink to={LANGUAGE.UA} label={LANGUAGE.UA} icon={uaFlag} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LanguageLink to={LANGUAGE.PL} label={LANGUAGE.PL} icon={plFlag} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <LanguageLink to={LANGUAGE.EN} label={LANGUAGE.EN} icon={enFlag} />
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to="mailto:kontakt@dopomoha.pl" label={t('contact')} icon={<EmailIcon />} />
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
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            <Box style={{ display:'flex', justifyContent:'space-evenly', minWidth: '200px' }}>
              <LanguageLink to={LANGUAGE.UA} label={LANGUAGE.UA} icon={uaFlag} />
              <LanguageLink to={LANGUAGE.PL} label={LANGUAGE.PL} icon={plFlag} />
              <LanguageLink to={LANGUAGE.EN} label={LANGUAGE.EN} icon={enFlag} />
            </Box>
            <Link to="mailto:kontakt@dopomoha.pl" label={t('contact')} icon={<EmailIcon />} />
            <Link to="https://www.gov.pl/web/udsc/ukraina" label="ua.gov.pl" icon={<InfoIcon />} />
            <Link to="https://github.com/openstreetmap-polska/ua-2022-map" label="" icon={<GitHubIcon />} />
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default Header;