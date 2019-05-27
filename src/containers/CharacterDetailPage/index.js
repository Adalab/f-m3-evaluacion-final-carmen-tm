import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Loading from '../../components/Loading';

import './styles.scss';

//For using awesome fonts directly
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faHeart,
	faSkull,
	faSkullCrossbones,
	faScroll,
	faBirthdayCake
} from '@fortawesome/free-solid-svg-icons';
library.add(faHeart, faSkull, faSkullCrossbones, faScroll, faBirthdayCake);

class CharacterDetailPage extends React.Component {
	componentWillUnmount() {
		this.props.resetFiltersState();
	}

	render() {
		const { props } = this;

		const { isFetching, dataArr, match } = props;
		const { characterId } = match.params;

		const getSelectedCharacter = characterId => {
			return dataArr.find(character => character.id === parseInt(characterId));
		};

		//Another way
		// const selectedCharacter = dataArr[characterId - 1];

		return (
			<div className="App__detail">
				<header className="detail__header">
					<Link
						to="/"
						className="detail__title"
						title="Back to the Characters list"
					>
						{'...Home'}
					</Link>
				</header>
				{isFetching ? (
					//If it is fetching(T), show loading component
					<Loading />
				) : (
					<main className="detail-main">
						<aside className="detail-main__aside-left">
							<img
								className="detail-main__image"
								src={getSelectedCharacter(characterId).image}
								alt={getSelectedCharacter(characterId).name}
							/>
						</aside>
						<section className="detail-main__section-right">
							<header>
								<h2 className="character__title">
									{getSelectedCharacter(characterId).name}
								</h2>
							</header>
							{/* <h3>{getSelectedCharacter(characterId).name}</h3> */}
							<p>
								House:{' '}
								{getSelectedCharacter(characterId).house
									? getSelectedCharacter(characterId).house
									: '(No data)'}
							</p>
							<div>
								<span>
									<FontAwesomeIcon icon="birthday-cake" />
								</span>
								<span> Date of Birth: </span>
								{getSelectedCharacter(characterId).dateOfBith
									? getSelectedCharacter(characterId).dateOfBith
									: '(No data)'}
							</div>
							<p>
								Patronus:{' '}
								{getSelectedCharacter(characterId).patronus
									? getSelectedCharacter(characterId).patronus
									: '(No data)'}
							</p>
							{/* <span className="awesome-font">
								<FontAwesomeIcon icon="heart" />
								<FontAwesomeIcon icon="scroll" />
								<FontAwesomeIcon icon="birthday-cake" />
								<FontAwesomeIcon icon="skull-crossbones" />
								<FontAwesomeIcon icon="skull" />
							</span> */}
							<div>
								{getSelectedCharacter(characterId).alive ? (
									<div>
										<span>
											<FontAwesomeIcon icon="heart" />
										</span>
										<span> Alive at the end of the saga</span>
									</div>
								) : (
									<div>
										<span>
											<FontAwesomeIcon icon="skull-crossbones" />
										</span>
										<span> Dead at the end of the saga</span>
									</div>
								)}
							</div>
							{/* <p>
								{getSelectedCharacter(characterId).alive
									? 'Alive at the end of the saga'
									: 'Dead at the end of the saga'}
							</p> */}
						</section>
					</main>
				)}
			</div>
		);
	}
}

CharacterDetailPage.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	dataArr: PropTypes.array.isRequired,
	resetFiltersState: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired
};

export default CharacterDetailPage;
