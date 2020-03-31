/* Libraries */
import React, { useState } from 'react';
import clx from 'classnames';
import { makeStyles, useMediaQuery, IconButton } from '@material-ui/core';

/* Application files */
import logo from '../../assets/images/logo.svg';
import menuOpenButton from '../../assets/images/icon-openmenu.svg';
import menuCloseButton from '../../assets/images/icon-closemenu.svg';
import { Link, useLocation } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    container: {
        width: '940px',
        maxWidth: 'calc(100% - 20px)'
    },
    navigation: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '13px 0',
        '@media (max-width: 850px)': {
            alignItems: 'flex-start'
        }
    },
    menu: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        '@media (max-width: 850px)': {
            display: 'none',
            flexDirection: 'column',
            position: 'fixed',
            zIndex: 1,
            color: '#ffffff',
            width: '100%',
            top: 0,
            left: 0,
            paddingTop: '80px',
            '&::before': {
                content: '""',
                display: 'block',
                width: '200vw',
                height: '200vw',
                backgroundColor: theme.palette.primary.main,
                position: 'absolute',
                zIndex: -1,
                borderRadius: '50%',
                left: '-50vw',
                bottom: -(window.innerWidth - (window.innerWidth * Math.sqrt(3) / 2))
            }
        }
    },
    menuOpen: {
        display: 'flex'
    },
    menuButton: {
        padding: 0,
        position: 'relative',
        zIndex: 110
    },
    menuItem: {
        textTransform: 'uppercase',
        fontFamily: 'Roboto',
        fontSize: '15px',
        fontWeight: 500,
        padding: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        cursor: 'pointer'
    },
    menuItemActive: {
        color: theme.palette.primary.main,
        '&::before': {
            display: 'block',
            content: '""',
            width: '12px',
            height: '12px',
            borderRadius: '6px',
            backgroundColor: theme.palette.primary.main,
            position: 'absolute',
            top: '-6px'
        },
        '@media (max-width: 850px)': {
            color: 'inherit',
            '&::before': {
                display: 'none'
            }
        }
    }
}));

const menu = [
    { label: 'O akcji', route: '/o-akcji' },
    { label: 'FAQ', route: '/faq' },
    { label: 'Podaruj kompa', route: '/podaruj-kompa' },
    { label: 'Zgłoś potrzebę', route: '/zglos-potrzebe' },
    { label: 'Regulamin', route: '/regulamin' },
    { label: 'Zgłoś miasto', route: '/zglos-miasto' },
];

export function MainMenu () {
    const classes = useStyles();
    const location = useLocation();
    const mobile = useMediaQuery('(max-width: 850px)');
    const [ open, setOpen ] = useState(false);

    function toggleMenu () {
        setOpen(!open);
    }

    return (
        <nav className={clx(classes.container, classes.navigation)}>
            <Link to="/"><img src={logo} /></Link>
            <ul className={clx(classes.menu, { [classes.menuOpen]: open })}>
                {menu.map((item, index) => (
                    <li key={index} className={clx(classes.menuItem, { [classes.menuItemActive]: item.route === location.pathname})}>
                        <Link to={item.route}>{item.label}</Link>
                    </li>
                ))}
            </ul>
            {mobile && (
                <IconButton aria-label="Otwórz menu" className={classes.menuButton} onClick={toggleMenu}>
                    {open ? <img src={menuCloseButton} /> : <img src={menuOpenButton} />}
                </IconButton>
            )}
        </nav>
    );
}

export default MainMenu;
