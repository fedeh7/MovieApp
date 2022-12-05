import { Route, Routes } from 'react-router-dom';
import { HeaderContainer } from './containers/HeaderContainer';
import { MovieCardsContainer } from './containers/MovieCardsContainer';
import { FooterContainer } from './containers/FooterContainer';
import { MovieInformationContainer } from './containers/MovieInformationContainer';

const App = () => {
	return (
		<>
			<HeaderContainer />
			<Routes>
				<Route path="/" element={<MovieCardsContainer />} />

				<Route path="/movie" element={<h1>hola</h1>} />
				<Route
					path="/movie/:id"
					element={<MovieInformationContainer />}
				/>
			</Routes>
			<FooterContainer />
		</>
	);
};

export default App;
