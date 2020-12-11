import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom';

import customSoftware from '../assets/Custom Software Icon.svg';
import mobileIcon from '../assets/mobileIcon.svg';
import website from '../assets/website.svg';

const useStyles = makeStyles((theme) => ({
	services: {
		minHeight: '70vh',
		[theme.breakpoints.down('sm')]: {
			textAlign: 'center',
		},
	},
	item: {
		marginBottom: '1.5rem',
		'& > *': {
			[theme.breakpoints.down('sm')]: {
				justifyContent: 'center',
			},
		},
	},
	services__svg: {
		width: '100px',
		maxWidth: '100%',
		marginLeft: '1rem',
		[theme.breakpoints.down('sm')]: {
			margin: '1.2rem 0',
		},
	},
	services__estiamte: {
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
	services__learn: {
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
	celeb: {
		color: theme.palette.secondary.main,
		fontFamily: 'Pacifico',
	},
}));

const Services = () => {
	const classes = useStyles();

	const handleRoute = (e) => {
		console.log(e.target.dataset.link);
	};
	return (
		<Grid className={classes.services} container direction='column'>
			<Grid item>
				<Typography variant='h2'>Services</Typography>
			</Grid>
			<Grid item className={classes.item}>
				<Grid container direction='row' justify='flex-end'>
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
							data-link='/mobileapps'
							component={Link}
							to='/mobileapps'
							variant='outlined'
							color='primary'
							className={classes.services__learn}>
							Learn More{' '}
							<ArrowForwardIcon
								color='primary'
								className={classes.services__arrow}
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
			</Grid>

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
							className={classes.services__learn}>
							Learn More{''}
							<ArrowForwardIcon
								color='primary'
								className={classes.services__arrow}
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
			</Grid>
			<Grid item className={classes.item}>
				<Grid container justify='flex-end'>
					<Grid item>
						<Typography variant='h4'>Website Development</Typography>
						<Typography variant='body2'>
							Read More. Discover More. Sell More.
						</Typography>
						<Typography variant='subtitle1'>
							Optimized for Search Engines, bulit for speed.
						</Typography>
						<Button
							component={Link}
							to='/websites'
							variant='outlined'
							color='primary'
							className={classes.services__learn}>
							Learn More{' '}
							<ArrowForwardIcon
								color='primary'
								className={classes.services__arrow}
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
		</Grid>
	);
};

export default Services;
