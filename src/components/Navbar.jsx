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
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import useRouteActive from '../hooks/useRouteActive';

const styles = makeStyles((theme) => ({
	logo: {
		height: '5rem',
	},
	tabs: {
		marginLeft: 'auto',
		'& .Mui-selected': {
			border: 'none',
			borderBottom: '2px solid white',
		},
	},
	tab: {
		fontSize: '1.1rem',
	},
	menu: {
		backgroundColor: theme.palette.common.arcBlue,
		color: 'white',
		'& .MuiListItem-root.Mui-selected': {
			backgroundColor: 'rgba(0, 0, 0, .4)',
		},
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
		'& .MuiListItem-root.Mui-selected': {
			backgroundColor: 'rgba(0, 0, 0, .4)',
		},
	},
	estimate: {
		borderRadius: '50px',
		fontFamily: 'Pacifico',
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
		},
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

const Navbar = () => {
	const theme = useTheme();
	const isDrawerActive = useMediaQuery(theme.breakpoints.down('md'));
	const classes = styles();

	const [anchorEl, setAnchorEl] = useState(null);
	const [drawerOpen, setDrawerOpen] = useState(false);

	const {
		servicesIndex,
		setServicesIndex,
		values,
		setValues,
		services,
		tabs,
	} = useRouteActive();

	const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

	const history = useHistory();

	const { pathname } = history.location;

	const handleClick = (key) => {
		setValues(key);
		setServicesIndex(null);
	};

	const handleServices = (e) => {
		setAnchorEl(e.currentTarget);
	};

	const handleClose = () => {
		setValues(1);
		setAnchorEl(null);
	};

	useEffect(() => {
		const servicesRoute = services.find((service) => service.link === pathname);

		if (servicesRoute) {
			setValues(1);
			setServicesIndex(servicesRoute.key);
		}
		switch (pathname) {
			case '/estimate':
				setValues(5);
				break;
			case '/contact':
				setValues(4);
				break;
			case '/about':
				setValues(3);
				break;
			case '/revolution':
				setValues(2);
				break;
			case '/services':
				setValues(1);
				break;
			case '/':
				setValues(0);
				break;
			default:
				break;
		}
	}, [pathname, values, setValues, setServicesIndex, services]);
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
								value={values}
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
									} else {
										return (
											<Tab
												className={classes.tab}
												disableRipple
												label={
													tab.key === 5 ? (
														<Button
															disableElevation
															className={classes.estimate}
															color='secondary'
															variant='contained'>
															{tab.label}
														</Button>
													) : (
														tab.label
													)
												}
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
						<SwipeableDrawer
							disableBackdropTransition={!iOS}
							disableDiscovery={iOS}
							classes={{ paper: classes.drawer }}
							anchor='right'
							open={drawerOpen}
							onOpen={() => setDrawerOpen(true)}
							onClose={() => setDrawerOpen(false)}>
							<List component='nav'>
								{tabs.map((tab) => (
									<React.Fragment key={tab.key}>
										<ListItem
											button
											component={Link}
											to={tab.link}
											onClick={() => {
												setValues(tab.key);
												setDrawerOpen(false);
											}}
											selected={values === tab.key}>
											<ListItemText>{tab.label}</ListItemText>
										</ListItem>
										<Divider />
									</React.Fragment>
								))}
							</List>
						</SwipeableDrawer>
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<div style={{ marginBottom: '5.9rem' }} />
		</>
	);
};

export default Navbar;
