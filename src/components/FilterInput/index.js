import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const FilterInput = props => {
	const { inputType, name, onChangeFilter, valueFilter } = props;
	return (
		<div>
			<label htmlFor={name}>{name.toUpperCase()} </label>
			<input
				type={inputType}
				name={name}
				id={name}
				onChange={onChangeFilter}
				value={valueFilter}
			/>
		</div>
	);
};

FilterInput.propTypes = {
	inputType: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	onChangeFilter: PropTypes.func.isRequired,
	valueFilter: PropTypes.string //Not required yet
};

export default FilterInput;