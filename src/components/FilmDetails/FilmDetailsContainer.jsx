import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import FilmDetails from "./FilmDetails";

const FilmDetailsContainer = () => {
	return (
		<div>
			<FilmDetails />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	}
}

let withRouterComponent = withRouter(FilmDetailsContainer)

export default connect(mapStateToProps, mapDispatchToProps)(withRouterComponent);