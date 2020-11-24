import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';
import { ThemeProvider } from '@material-ui/styles';
import { theme } from './theme/Theme';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Header />
				<div className='app__routes'>
					<Switch>
						<Route path='/' component={HomeScreen} exact />
					</Switch>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
