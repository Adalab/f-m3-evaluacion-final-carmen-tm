import React from 'react';
import fetchCharacter from '../../services/API-service';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../../containers/HomePage';
import CharacterDetailPage from '../../containers/CharacterDetailPage';
import './App.scss';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			data: {
				dataArr: [],
				isFetching: true
			},
			filters: {}
		};
	}

	componentDidMount() {
		fetchCharacter().then(data => {
			this.setState((prevState, index) => {
				return {
					data: {
						dataArr: data.map((character, index) => {
							return {
								...character,
								id: index
							};
						}),
						//Boolean for Loading text
						isFetching: false
					}
				};
			});
		});
	}

	render() {
		const { dataArr, isFetching } = this.state.data;
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={() => {
							return (
								<HomePage
									isFetching={isFetching}
									dataArr={dataArr}
									onChangeFilter={e => console.log(e)}
									valueFilter=""
								/>
							);
						}}
					/>
					<Route
						exact
						path="/character/:characterId"
						render={routerProps => (
							<CharacterDetailPage
								dataArr={dataArr}
								match={routerProps.match}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
