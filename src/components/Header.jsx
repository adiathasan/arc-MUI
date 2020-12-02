import React, { cloneElement, useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles, useTheme } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Button from '@material-ui/core/Button';
import Logo from '../assets/logo.svg';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const ElevationScroll = ({ children }) => {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 0,
	});

	return cloneElement(children, {
		elevation: trigger ? 4 : 0,
	});
};

const useStyles = makeStyles((theme) => ({
	toolbarMargin: {
		...theme.mixins.toolbar,
		marginBottom: '1.5rem',
		[theme.breakpoints.down('md')]: {
			marginBottom: '.5rem',
		},
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: {
		...theme.typography.tab,
		'&:last-child': {
			display: 'none',
		},
	},
	btn: {
		borderRadius: '50px',
		margin: '0 25px 0 45px',
	},
	logo: {
		height: '5rem',
		[theme.breakpoints.down('md')]: {
			height: '4rem',
		},
	},
	menu: {
		backgroundColor: theme.palette.common.arcBlue,
		color: 'white',
	},
	menuItem: {
		opacity: 0.8,
		transition: '.2s ease-in all',
		'&:hover': {
			opacity: 1,
		},
	},
	drawer: {
		width: 200,
	},
	burger: {
		transform: 'scale(1.3)',
	},
	burgerWrapper: {
		marginLeft: 'auto',
		color: 'white',
	},
	list: {
		width: '100%',
		backgroundColor: theme.palette.common.arcBlue,
		height: '100vh',
		color: 'white',
	},
	nested: {
		paddingLeft: theme.spacing(4),
		paddingRight: theme.spacing(4),
		'&:last-child': {
			backgroundColor: theme.palette.common.arcOrange,
			color: 'black',
			'&:hover': {
				backgroundColor: theme.palette.common.arcBlue,
				color: 'white',
			},
		},
	},
}));

const Header = () => {
	const classes = useStyles();
	const [active, setActive] = useState(0);
	const [anchorEl, setAnchorEl] = useState(null);
	const [openMenu, setOpenMenu] = useState(false);
	const [openDrawer, setOpenDrawer] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const history = useHistory();

	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down('md'));

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const {
		location: { pathname },
	} = history;

	const menuItems = useMemo(() => {
		return [
			{ title: 'All Services', id: 0, link: '/services' },
			{
				title: 'Custome Software Development',
				id: 1,
				link: '/customesoftware',
			},
			{ title: 'Mobile App Development', id: 2, link: '/mobileapps' },
			{ title: 'Website Development', id: 3, link: '/websites' },
		];
	}, []);

	useEffect(() => {
		const servicesRoute = menuItems.find(
			(menuItem) => menuItem.link === pathname
		);
		switch (pathname) {
			case '/':
				setActive(0);
				break;

			case '/services':
				setActive(1);
				break;
			case '/revolution':
				setActive(2);
				break;

			case '/about':
				setActive(3);
				break;

			case '/contact':
				setActive(4);
				break;
			case '/estimate':
				setActive(5);
				break;

			default:
				break;
		}
		if (servicesRoute) {
			setActive(1);
			setSelectedIndex(servicesRoute.id);
		}
	}, [pathname, menuItems]);

	const handleClick = (e) => {
		setAnchorEl(e.target);
		setOpenMenu(true);
	};

	const handleClose = () => {
		setAnchorEl(null);
		setOpenMenu(false);
	};

	const handleActive = (_, value) => {
		setActive(value);
	};

	const tabs = (
		<>
			<Tabs
				indicatorColor='primary'
				value={active}
				onChange={handleActive}
				className={classes.tabContainer}>
				<Tab label='Home' component={NavLink} to='/' className={classes.tab} />
				<Tab
					aria-owns={anchorEl ? 'drop-munu' : undefined}
					aria-haspopup={anchorEl ? 'true' : undefined}
					label='Services'
					onMouseOver={handleClick}
					onClick={handleClick}
					className={classes.tab}
				/>
				<Tab
					label='The Revolution'
					component={NavLink}
					to='/revolution'
					className={classes.tab}
				/>
				<Tab
					label='About Us'
					component={NavLink}
					to='/about'
					className={classes.tab}
				/>
				<Tab
					label='Contact Us'
					component={NavLink}
					to='/contact'
					className={classes.tab}
				/>
				<Tab className={classes.tab} />
			</Tabs>
			<Button
				title='freeeeee'
				onClick={() => setActive(null)}
				className={classes.btn}
				component={NavLink}
				to='/estimate'
				variant='contained'
				color='secondary'>
				Free Estimate
			</Button>
		</>
	);

	const Drawer = (
		<>
			<SwipeableDrawer
				disableBackdropTransition={!iOS}
				disableDiscovery={iOS}
				open={openDrawer}
				className={classes.drawer}
				anchor='right'
				onClose={() => {
					setOpenDrawer(false);
				}}
				onOpen={() => {
					setOpenDrawer(true);
				}}>
				<List disablePadding className={classes.list}>
					<ListItem
						selected={active === 0}
						onClick={() => setOpenDrawer(false)}
						className={classes.nested}
						component={Link}
						button
						to='/'
						divider>
						<ListItemText>Home</ListItemText>
					</ListItem>
					<ListItem
						aria-owns={anchorEl ? 'drop-munu' : undefined}
						aria-haspopup={anchorEl ? 'true' : undefined}
						selected={active === 1}
						onClick={(e) => {
							handleClick(e);
						}}
						className={classes.nested}
						divider
						button
						onMouseOver={handleClick}>
						<ListItemText>Services</ListItemText>
					</ListItem>
					<ListItem
						selected={active === 2}
						onClick={() => setOpenDrawer(false)}
						className={classes.nested}
						divider
						component={Link}
						button
						to='/revolution'>
						<ListItemText>The Revolution</ListItemText>
					</ListItem>
					<ListItem
						selected={active === 3}
						onClick={() => setOpenDrawer(false)}
						className={classes.nested}
						divider
						component={Link}
						button
						to='/about'>
						<ListItemText>About Us</ListItemText>
					</ListItem>
					<ListItem
						selected={active === 4}
						onClick={() => setOpenDrawer(false)}
						className={classes.nested}
						divider
						component={Link}
						button
						to='/contact'>
						<ListItemText>Contact Us</ListItemText>
					</ListItem>
					<ListItem
						selected={active === 5}
						onClick={() => setOpenDrawer(false)}
						className={classes.nested}
						divider
						component={Link}
						button
						to='/estimate'>
						<ListItemText>Free Estimate</ListItemText>
					</ListItem>
				</List>
			</SwipeableDrawer>
			<IconButton
				size='medium'
				onClick={() => {
					setOpenDrawer(true);
				}}
				className={classes.burgerWrapper}>
				<MenuIcon className={classes.burger} />
			</IconButton>
		</>
	);

	return (
		<>
			<ElevationScroll>
				<AppBar variant='elevation' position='fixed' color='primary'>
					<Toolbar disableGutters>
						<img
							src={Logo}
							alt='logo'
							className={classes.logo}
							onClick={() => {
								history.push('/');
								setActive(0);
							}}
						/>

						{matches ? Drawer : tabs}
						<Menu
							classes={{ paper: classes.menu }}
							onClose={handleClose}
							id='drop-item'
							anchorEl={anchorEl}
							open={openMenu}
							MenuListProps={{
								onMouseLeave: handleClose,
								onClick: () => {
									handleClose();
									setActive(1);
								},
							}}
							elevation={0}>
							{[...menuItems].map((menuItem) => (
								<MenuItem
									key={menuItem.id}
									className={classes.menuItem}
									component={Link}
									to={menuItem.link}
									selected={menuItem.id === selectedIndex && active === 1}
									onClick={() => {
										handleClose();
										setOpenDrawer(false);
									}}>
									{menuItem.title}
								</MenuItem>
							))}
						</Menu>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
};

export default Header;
