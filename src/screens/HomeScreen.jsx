import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

import hero from '../svgs/hero.svg';
import customSoftware from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import website from '../assets/website.svg';
import repeatingBackground from '../assets/repeatingBackground.svg';
// import useRouteActive from '../hooks/useRouteActive';

const useStyles = makeStyles((theme) => ({
	item: {
		marginBottom: '3rem',
		'&:nth-child(2) > .MuiGrid-container': {
			margin: '2rem 0',
			[theme.breakpoints.down('sm')]: {
				justifyContent: 'center',
				textAlign: 'center',
			},
		},
		'&:nth-child(2) > .MuiGrid-container > .MuiGrid-item': {
			margin: '0 1rem 0 0',
		},
		'&:nth-child(3)': {
			textAlign: 'center',
			background: `url(${repeatingBackground}) center`,
			height: '70vh',
			backgroundRepeat: 'no-repeat',
		},
		'&:nth-child(3) > .MuiGrid-container': {
			height: '100%',
		},
	},
	hero__svg: {
		width: '500px',
		maxWidth: '100%',
		marginLeft: 'auto',
		[theme.breakpoints.down('sm')]: {
			marginTop: '1rem',
		},
	},
	hero__estiamte: {
		borderRadius: 50,
		marginRight: '1.2rem',
		marginBottom: '1rem',
		width: '9rem',
		color: theme.palette.primary,
		fontFamily: 'Pacifico',
		'&:hover': {
			backgroundColor: theme.palette.secondary.light,
		},
	},
	hero__learn: {
		borderRadius: 50,
		width: '9rem',
		marginBottom: '1rem',
		'&:hover': {
			backgroundColor: theme.palette.primary.light,
			color: 'white',
		},
		'&:hover .MuiSvgIcon-root': {
			color: 'white',
		},
	},
	hero__arrow: {
		transform: 'scale(.9)',
		marginLeft: '.2rem',
	},

	services__svg: {
		width: '100px',
		maxWidth: '100%',
		[theme.breakpoints.down('sm')]: {
			margin: '1.2rem 0',
		},
	},
	celeb: {
		color: theme.palette.secondary.main,
		fontFamily: 'Pacifico',
	},
}));

const HomeScreen = () => {
	const classes = useStyles();

	const handleRoute = (e) => {
		console.log(e.target.data);
	};

	// const { setServicesIndex, setValues } = useRouteActive();

	const props = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<animated.div style={props}>
			<Grid container direction='column'>
				{/* ---Hero section--- */}
				<Grid item className={classes.item}>
					<Grid
						container
						direction='row'
						alignItems='center'
						justify='space-between'>
						<Grid sm item>
							<Typography variant='h2' align='center'>
								Bringing West Cost Technology <br /> to the Midwest
							</Typography>
							<Grid container justify='center' alignItems='center'>
								<Grid item>
									<Button
										component={Link}
										to='/estimate'
										disableElevation
										className={classes.hero__estiamte}
										variant='contained'
										color='secondary'>
										Free Estimate
									</Button>
								</Grid>
								<Grid item>
									<Button
										component={Link}
										to='/revolution'
										variant='outlined'
										color='primary'
										className={classes.hero__learn}>
										Learn More{' '}
										<ArrowForwardIcon
											color='primary'
											className={classes.hero__arrow}
										/>
									</Button>
								</Grid>
							</Grid>
						</Grid>
						<Grid item>
							<Grid container>
								<img
									src={hero}
									alt='hero-section'
									className={classes.hero__svg}
								/>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				{/* ---Services section--- */}
				<Grid item className={classes.item}>
					<Grid container>
						<Grid item>
							<Typography variant='h4'>Custom Software Development</Typography>
							<Typography variant='body2'>
								Save Energy. Save Time. Save Money
							</Typography>
							<Typography variant='subtitle1'>
								Complete digital solutions, from investigation <br /> to{' '}
								<span className={classes.celeb}>celebration.</span>
							</Typography>
							<Button
								component={Link}
								to='/customsoftware'
								variant='outlined'
								color='primary'
								className={classes.hero__learn}>
								Learn More{''}
								<ArrowForwardIcon
									color='primary'
									className={classes.hero__arrow}
								/>
							</Button>
						</Grid>
						<Grid item>
							<img
								src={customSoftware}
								alt='services-section'
								className={classes.services__svg}
							/>
						</Grid>
					</Grid>
					<Grid container justify='flex-end'>
						<Grid item>
							<Typography variant='h4'>iOS/Android App Development</Typography>
							<Typography variant='body2'>
								Extend Functionality. Extend Access. Increase Engagement.
							</Typography>
							<Typography variant='subtitle1'>
								Integrate your web experience or create a standalone app with
								either mobile platform.
							</Typography>
							<Button
								onClick={handleRoute}
								component={Link}
								to='/mobileapps'
								variant='outlined'
								color='primary'
								className={classes.hero__learn}>
								Learn More{' '}
								<ArrowForwardIcon
									color='primary'
									className={classes.hero__arrow}
								/>
							</Button>
						</Grid>
						<Grid item>
							<img
								src={mobileIcon}
								alt='services-section'
								className={classes.services__svg}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item>
							<Typography variant='h4'>Website Development</Typography>
							<Typography variant='body2'>
								Read More. Discover More. Sell More.
							</Typography>
							<Typography variant='subtitle1'>
								Optimized for Search Engines,
								<br />
								bulit for speed.
							</Typography>
							<Button
								component={Link}
								to='/websites'
								variant='outlined'
								color='primary'
								className={classes.hero__learn}>
								Learn More{' '}
								<ArrowForwardIcon
									color='primary'
									className={classes.hero__arrow}
								/>
							</Button>
						</Grid>
						<Grid item>
							<img
								src={website}
								alt='services-section'
								className={classes.services__svg}
							/>
						</Grid>
					</Grid>
				</Grid>
				{/* ---Revolution section--- */}

				<Grid item className={classes.item}>
					<Grid container justify='center' alignItems='center'>
						<Card>
							<CardContent>
								<Grid container direction='column'>
									<Grid item>
										<Typography variant='h3'>The Revolution</Typography>
									</Grid>
									<Grid item>
										<Typography variant='subtitle1'>
											Visionary insights coupled with cutting edge technology is
											a recipe for revolution.
										</Typography>
										<Button
											component={Link}
											to='/revolution'
											variant='outlined'
											color='primary'
											className={classes.hero__learn}>
											Learn More{' '}
											<ArrowForwardIcon
												color='primary'
												className={classes.hero__arrow}
											/>
										</Button>
									</Grid>
								</Grid>
							</CardContent>
						</Card>
					</Grid>
				</Grid>
			</Grid>
		</animated.div>
	);
};

export default HomeScreen;

// 2011440165027 account number of my bank account
