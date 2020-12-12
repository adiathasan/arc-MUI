import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
	contact: {
		marginBottom: '2rem',
	},
	card: {
		textAlign: 'center',
		boxShadow: '0 1px 9px -2px rgba(0, 0, 0, .2)',
		padding: '2rem',
		'& .MuiTextField-root': {
			margin: '.5rem 0',
		},
	},
}));

const Contact = () => {
	const classes = useStyles();
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	return (
		<Grid
			container
			className={classes.contact}
			direction='row'
			alignItems='center'
			justify='center'>
			<Grid item style={{ width: '450px', maxWidth: '100%' }}>
				<Card className={classes.card}>
					<Grid container direction='column' spacing={2}>
						<Grid item>
							<Typography variant='h2'>Contact Us</Typography>
						</Grid>
						<Grid item>
							<TextField
								error
								onChange={(e) => setName(e.target.value)}
								value={name}
								label='Name'
								id='name'
								variant='outlined'
								fullWidth
							/>
							<TextField
								onChange={(e) => setPhone(e.target.value)}
								value={phone}
								label='Email'
								id='email'
								variant='outlined'
								fullWidth
							/>
							<TextField
								onChange={(e) => setEmail(e.target.value)}
								value={email}
								label='Phone'
								id='phone'
								variant='outlined'
								fullWidth
							/>
							<TextField
								onChange={(e) => setMessage(e.target.value)}
								value={message}
								label='Message'
								id='message'
								variant='outlined'
								fullWidth
								multiline
								rows={6}
							/>
							<Button
								fullWidth
								size='large'
								variant='contained'
								color='primary'
								endIcon={<SendIcon />}>
								Send Message
							</Button>
						</Grid>
					</Grid>
				</Card>
			</Grid>
		</Grid>
	);
};

export default Contact;
