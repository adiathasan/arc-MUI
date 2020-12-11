import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import './App.css';

import HomeScreen from './screens/HomeScreen';
import { theme } from './theme/Theme';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Services from './screens/Services';
import CustomSoftware from './screens/CustomSoftware';

function App() {
	return (
		<ThemeProvider theme={theme}>
			<Navbar />
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
					<Route path='/customsoftware' component={CustomSoftware} exact />
					<Route path='/estimate' component={() => <div>estimate</div>} exact />
					<Route
						path='/revolution'
						component={() => <div>revolution</div>}
						exact
					/>
					<Route path='/services' component={Services} exact />
					<Route path='/' component={HomeScreen} exact />
				</Switch>
			</div>
			<Footer />
		</ThemeProvider>
	);
}

export default App;
