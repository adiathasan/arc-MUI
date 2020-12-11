import { createMuiTheme } from '@material-ui/core/styles';

export const arcBlue = '#0471b9';
export const arcOrange = '#ffba60';
export const arcGrey = '#5a5656';

export const theme = createMuiTheme({
	palette: {
		primary: {
			main: arcBlue,
		},
		secondary: {
			main: arcOrange,
		},
		common: {
			arcBlue,
			arcOrange,
		},
	},
	typography: {
		h5: {
			fontWeight: 400,
		},
		h1: {
			margin: 0,
		},
		h2: {
			fontFamily: 'Raleway',
			fontWeight: 700,
			fontSize: '2rem',
			color: arcBlue,
			margin: '.5rem 0',
		},
		h3: {
			fontFamily: 'Pacifico',
			fontWeight: 500,
			fontSize: '2.2rem',
			color: arcBlue,
			margin: '1rem 0',
		},
		h4: {
			fontFamily: 'Raleway',
			fontSize: '1.5rem',
			color: arcBlue,
			fontWeight: 700,
		},
		body2: {
			color: arcGrey,
			marginBottom: '.5rem',
		},

		subtitle1: {
			color: arcGrey,
		},
		tab: {
			textTransform: 'Capitalize',
			fontWeight: 500,
			fontSize: 16,
		},
		button: {
			textTransform: 'none',
		},
	},
});
