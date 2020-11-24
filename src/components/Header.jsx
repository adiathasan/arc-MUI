import React, { cloneElement } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Logo from '../assets/logo.svg';

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
	},
	tabContainer: {
		marginLeft: 'auto',
	},
	tab: { ...theme.typography.tab },
}));

const Header = () => {
	const classes = useStyles();

	return (
		<>
			<ElevationScroll>
				<AppBar variant='elevation' position='fixed' color='primary'>
					<Toolbar disableGutters>
						<img src={Logo} alt='logo' />
						<Tabs className={classes.tabContainer}>
							<Tab label='Home' className={classes.tab} />
							<Tab label='Services' className={classes.tab} />
							<Tab label='Time Revolution' className={classes.tab} />
							<Tab label='About Us' className={classes.tab} />
							<Tab label='Contact Us' className={classes.tab} />
						</Tabs>
					</Toolbar>
				</AppBar>
			</ElevationScroll>
			<div className={classes.toolbarMargin} />
		</>
	);
};

export default Header;
