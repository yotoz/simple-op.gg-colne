import React from 'react';
import { useParams } from 'react-router-dom';

const Posts = () => {
	const params = useParams();
	const { target } = params;
	return target !== 'main' ? (
		<div>id: {target}'s Post</div>
	) : (
		<h1>Posts Main</h1>
	);
};

export default Posts;
