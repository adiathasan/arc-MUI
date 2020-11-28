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
						<Route path='/contact' component={() => <div>contact</div>} exact />
						<Route path='/about' component={() => <div>about</div>} exact />
						<Route
							path='/websites'
							component={() => (
								<div>
									<h3>websites</h3>
								</div>
							)}
							exact
						/>
						<Route
							path='/mobileapps'
							component={() => <div>mobileapps</div>}
							exact
						/>
						<Route
							path='/customesoftware'
							component={() => <div>customesoftware</div>}
							exact
						/>
						<Route
							path='/estimate'
							component={() => <div>estimate</div>}
							exact
						/>
						<Route
							path='/revolution'
							component={() => <div>revolution</div>}
							exact
						/>
						<Route
							path='/services'
							component={() => <div>services</div>}
							exact
						/>
						<Route path='/' component={HomeScreen} exact />
					</Switch>
				</div>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
