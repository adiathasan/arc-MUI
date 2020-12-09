import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import React, { useEffect, useState } from 'react';
import Logo from '../assets/logo.svg';
import makeStyles from '@material-ui/styles/makeStyles';
import { Link, useHistory } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/styles/useTheme';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Button } from '@material-ui/core';

const styles = makeStyles((theme) => ({
	logo: {
		height: '5rem',
	},
	tabs: {
		marginLeft: 'auto',
	},
	tab: {
		fontSize: '1.1rem',
	},
	menu: {
		backgroundColor: theme.palette.common.arcBlue,
		color: 'white',
	},
	icon: {
		marginLeft: 'auto',
		marginRight: '1rem',
		transform: 'scale(1.09)',
	},
	drawer: {
		width: '200px',
		maxWidth: '50%',
		backgroundColor: theme.palette.common.arcBlue,
		color: 'white',
	},
	estimate: {
		borderRadius: '50px',
	},
}));

const HideOnScroll = ({ children, window }) => {
	const trigger = useScrollTrigger({ target: window ? window() : undefined });

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
};

const tabs = [
	{ label: 'Home', key: 0, link: '/' },
	{ label: 'Services', key: 1, link: '/services' },
	{ label: 'The Revolution', key: 2, link: '/revolution' },
	{ label: 'About Us', key: 3, link: '/about' },
	{ label: 'Contact Us', key: 4, link: '/contact' },
	{ label: 'Free Estimate', key: 5, link: '/estimate' },
];

const services = [
	{ label: 'All Services', key: 0, link: '/services' },
	{ label: 'Custome Software Development', key: 1, link: '/customesoftware' },
	{ label: 'Mobile App Development', key: 2, link: '/mobileapps' },
	{ label: 'Website Development', key: 3, link: '/websites' },
];

const Navbar = () => {
	const theme = useTheme();
	const isDrawerActive = useMediaQuery(theme.breakpoints.down('md'));
	const classes = styles();
	const [value, setValue] = useState(0);
	const [servicesIndex, setServicesIndex] = useState(null);
	const [anchorEl, setAnchorEl] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const history = useHistory();

	const { pathname } = history.location;

	const handleClick = (key) => {
		setValue(key);
		setServicesIndex(null);
	};

	const handleServices = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setValue(1);
		setAnchorEl(null);
	};

	useEffect(() => {
		const servicesRoute = services.find((service) => service.link === pathname);

		if (servicesRoute) {
			setValue(1);
			setServicesIndex(servicesRoute.key);
		}
		switch (pathname) {
			case '/estimate':
				setValue(5);
				break;
			case '/contact':
				setValue(4);
				break;
			case '/about':
				setValue(3);
				break;
			case '/revolution':
				setValue(2);
				break;
			case '/services':
				setValue(1);
				break;
			case '/':
				setValue(0);
				break;
			default:
				break;
		}
	}, [pathname, value]);
	return (
		<>
			<HideOnScroll>
				<AppBar position='fixed'>
					<Toolbar disableGutters>
						<img
							src={Logo}
							alt='logo'
							style={{ cursor: 'pointer' }}
							className={classes.logo}
							onClick={() => {
								history.push('/');
							}}
						/>

						{isDrawerActive ? (
							<IconButton
								onClick={() => setDrawerOpen(true)}
								color='inherit'
								className={classes.icon}>
								<MenuIcon />
							</IconButton>
						) : (
							<Tabs
								className={classes.tabs}
								value={value}
								indicatorColor='primary'
								variant='fullWidth'
								aria-label='full width tabs'>
								{tabs.map((tab) => {
									if (tab.key === 1) {
										return (
											<Tab
												className={classes.tab}
												label={tab.label}
												component={Link}
												to={tab.link}
												key={tab.key}
												onMouseOver={handleServices}
											/>
										);
									} else if (tab.key === 5) {
										return (
											<Tab
												disableRipple
												label={
													<Button
														className={classes.estimate}
														color='secondary'
														variant='contained'>
														{tab.label}
													</Button>
												}
												component={Link}
												to={tab.link}
												key={tab.key}
												onClick={() => handleClick(tab.key)}
											/>
										);
									} else {
										return (
											<Tab
												className={classes.tab}
												disableRipple
												label={tab.label}
												component={Link}
												to={tab.link}
												key={tab.key}
												onClick={() => handleClick(tab.key)}
											/>
										);
									}
								})}
							</Tabs>
						)}

						<Menu
							classes={{ paper: classes.menu }}
							id='simple-menu'
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
							MenuListProps={{ onMouseLeave: handleClose }}>
							{services.map((service) => (
								<MenuItem
									selected={service.key === servicesIndex}
									key={service.key}
									component={Link}
									to={service.link}
									onClick={handleClose}>
									{service.label}
								</MenuItem>
							))}
						</Menu>
						<Drawer
							classes={{ paper: classes.drawer }}
							anchor='right'
							open={drawerOpen}
							onClose={() => setDrawerOpen(false)}>
							<List component='nav'>
								{tabs.map((tab) => (
									<React.Fragment key={tab.key}>
										<ListItem
											button
											component={Link}
											to={tab.link}
											onClick={() => {
												setValue(tab.key);
												setDrawerOpen(false);
											}}
											selected={value === tab.key}>
											<ListItemText>{tab.label}</ListItemText>
										</ListItem>
										<Divider />
									</React.Fragment>
								))}
							</List>
						</Drawer>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<div style={{ marginBottom: '5rem' }} />
		</>
	);
};

export default Navbar;
