import { createMuiTheme } from '@material-ui/core/styles';

const arcBlue = '#026bb1';
const arcOrange = '#ffba60';

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
