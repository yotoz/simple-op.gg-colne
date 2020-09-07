import React from 'react';
import AboutList from './AboutList/AboutList';
import './styles.scss';

import { useParams } from 'react-router-dom';

const About = () => {
	const params = useParams();
	const { target } = params;
	return (
		<div className="AboutList">
			<div>
				<h1>ID: {target}</h1>
			</div>
			<AboutList />
		</div>
	);
};

export default About;
