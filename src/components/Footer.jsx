import { makeStyles } from '@material-ui/styles';
import React from 'react';
import FooterSlash from '../assets/Footer Adornment.svg';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
	footer: {
		background: theme.palette.common.arcBlue,
		width: '100vw',
	},
	footerImage: {
		width: '400px',
		objectFit: 'contain',
		verticalAlign: 'bottom',

		[theme.breakpoints.down('md')]: {
			width: '200px',
		},
	},
	container: {
		position: 'absolute',
		color: 'white',
		fontFamily: 'Arial',
		letterSpacing: '.001rem',
		zIndex: '100',
	},
	item: {
		margin: '3rem',
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Hidden mdDown>
				<Grid
					container
					alignItems='flex-start'
					justify='center'
					className={classes.container}>
					<Grid component={Link} to='/home' item className={classes.item}>
						Home
					</Grid>
					<Grid item className={classes.item}>
						<Grid direction='column' container spacing={2} item>
							<Grid item component={Link} to='/services'>
								Services
							</Grid>
							<Grid item component={Link} to='/customsoftware'>
								Custome Software Development
							</Grid>
							<Grid item component={Link} to='/mobileapps'>
								Modile Apps Development
							</Grid>
							<Grid item component={Link} to='/websites'>
								Websites Development
							</Grid>
						</Grid>
					</Grid>
					<Grid item className={classes.item}>
						<Grid direction='column' container spacing={2} item>
							<Grid component={Link} to='/revolutionrevolution' item>
								The Revolution
							</Grid>
							<Grid item>Vision</Grid>
							<Grid item>Technology</Grid>
							<Grid item>Process</Grid>
						</Grid>
					</Grid>
					<Grid component={Link} to='/about' item className={classes.item}>
						About Us
					</Grid>
					<Grid component={Link} to='/contact' item className={classes.item}>
						Contact Us
					</Grid>
				</Grid>
			</Hidden>
			<img
				className={classes.footerImage}
				src={FooterSlash}
				alt='Black footer slash'
			/>
		</footer>
	);
};

export default Footer;
