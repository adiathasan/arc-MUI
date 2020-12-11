import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/styles/makeStyles';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Hidden from '@material-ui/core/Hidden';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import lightbulb from '../assets/bulb.svg';
import cash from '../assets/cash.svg';
import stopwatch from '../assets/stopwatch.svg';
import segment from '../svgs/segment.svg';

const useStyles = makeStyles((theme) => ({
	custom: {},
	heading: {
		width: '40rem',
		maxWidth: '100%',
	},
	heading__paragraph: {
		textAlign: 'justify',
	},
	arrow: {
		marginTop: '.3rem',
	},
	save: {
		margin: '4rem 0',
		'& img': {
			[theme.breakpoints.down('sm')]: {
				margin: '2rem 0',
			},
		},
	},
	digital: {
		width: '460px',
		maxWidth: '100%',
	},
	digital__paragraph: {
		textAlign: 'justify',
	},
	svg: {
		width: '270px',
		maxWidth: '100%',
	},
}));

const CustomSoftware = () => {
	const classes = useStyles();
	const down800 = useMediaQuery('(max-width:790px)');
	return (
		<Grid container direction='column'>
			<Grid item container direction='row'>
				<Grid item>
					<Hidden smDown>
						<IconButton
							className={classes.arrow}
							component={Link}
							to='/services'>
							<img src={backArrow} alt='back to services page' />
						</IconButton>
					</Hidden>
				</Grid>
				<Grid item container direction='column' className={classes.heading}>
					<Grid item>
						<Typography variant='h2' align={down800 ? 'center' : 'inherit'}>
							Custom Software Development
						</Typography>
					</Grid>
					<Grid item className={classes.heading__paragraph}>
						<Typography variant='body2' paragraph>
							Whether we’re replacing old software or inventing new solutions,
							Arc Development is here to help your business tackle technology.
						</Typography>
						<Typography variant='body2' paragraph>
							Using regular commercial software leaves you with a lot of stuff
							you don’t need, without some of the stuff you do need, and
							ultimately controls the way you work. Without using any software
							at all you risk falling behind competitors and missing out on huge
							savings from increased efficiency.
						</Typography>
						<Typography variant='body2' paragraph>
							Our custom solutions are designed from the ground up with your
							needs, wants, and goals at the core. This collaborative process
							produces finely tuned software that is much more effective at
							improving your workflow and reducing costs than generalized
							options.
						</Typography>
						<Typography variant='body2' paragraph>
							We create exactly what you what, exactly how you want it.
						</Typography>
					</Grid>
				</Grid>
				<Grid item>
					<Hidden smDown>
						<IconButton
							className={classes.arrow}
							component={Link}
							to='/mobileapps'>
							<img src={forwardArrow} alt='forward to ios page' />
						</IconButton>
					</Hidden>
				</Grid>
			</Grid>
			<Grid
				item
				container
				className={classes.save}
				direction='row'
				justify='center'>
				<Grid item container direction='column' alignItems='center' sm>
					<Grid item>
						<Typography variant='h4'>Save Energy</Typography>
					</Grid>
					<Grid item>
						<img src={lightbulb} alt='bulb' />
					</Grid>
				</Grid>
				<Grid item container direction='column' alignItems='center' sm>
					<Grid item>
						<Typography variant='h4'>Save Time</Typography>
					</Grid>
					<Grid item>
						<img src={stopwatch} alt='stopwatch' />
					</Grid>
				</Grid>
				<Grid item container direction='column' alignItems='center' sm>
					<Grid item>
						<Typography variant='h4'>Save Money</Typography>
					</Grid>
					<Grid item>
						<img src={cash} alt='cash' />
					</Grid>
				</Grid>
			</Grid>
			<Grid
				item
				container
				direction='row'
				justify={down800 ? 'center' : 'space-around'}>
				<Grid item className={classes.digital} container>
					<Grid item container direction='column'>
						<Grid item>
							<Typography variant='h2' align={down800 ? 'center' : 'inherit'}>
								Digital Documents &amp; Data
							</Typography>
						</Grid>
						<Grid item className={classes.digital__paragraph}>
							<Typography variant='body2' paragraph>
								Reduce Errors. Reduce Waste. Reduce Costs.
							</Typography>
							<Typography variant='body2' paragraph>
								Billions are spent annually on the purchasing, printing, and
								distribution of paper. On top of the massive environmental
								impact this has, it causes harm to your bottom line as well.
							</Typography>
							<Typography variant='body2' paragraph>
								By utilizing digital forms and documents you can remove these
								obsolete expenses, accelerate your communication, and help the
								Earth. Scale Whether you’re a large brand, just getting started,
								or taking off right now, our application architecture ensures
								pain-free growth and
							</Typography>
						</Grid>
					</Grid>
				</Grid>
				<Grid item>
					<img className={classes.svg} src={segment} alt='document segment' />
				</Grid>
			</Grid>
		</Grid>
	);
};

export default CustomSoftware;
