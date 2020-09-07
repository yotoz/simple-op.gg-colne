import React, { useState, useReducer } from 'react';
import { useHistory } from 'react-router-dom';

//style
import './styles.scss';

//image
import TitleImage from '../../resources/titleImage.png';

const searchReducer = (state, action) => {
	return {
		...state,
		[action.name]: action.value,
	};
};

const Home = () => {
	const postsSample = useState([
		{
			id: 0,
			title: 'title 1',
			content: 'content 1',
		},
		{
			id: 1,
			title: 'title 2',
			content: 'content 2',
		},
		{
			id: 2,
			title: 'title 3',
			content: 'content 3',
		},
		{ id: 3, title: 'title 4', content: 'content 4' },
		{
			id: 4,
			title: 'title 5',
			content: 'content 5',
		},
		{
			id: 5,
			title: 'title 6',
			content: 'content 6',
		},
		{
			id: 6,
			title: 'title 7',
			content: 'content 7',
		},
		{
			id: 7,
			title: 'title 8',
			content: 'content 8',
		},
		{
			id: 8,
			title: 'title 9',
			content: 'content 9',
		},
		{
			id: 9,
			title: 'title 10',
			content: 'content 10',
		},
		{
			id: 10,
			title: 'title 11',
			content: 'content 11',
		},
		{
			id: 11,
			title: 'title 12',
			content: 'content 12',
		},
	]);
	const [state, dispatch] = useReducer(searchReducer, {
		nickname: '',
	});
	const { nickname } = state;
	const history = useHistory();

	const searchOnChange = (e) => {
		dispatch(e.target);
	};

	const handleSearchClick = () => {
		const regex = /^[\w|가-힣|\s]+$/;

		if (regex.test(nickname)) {
			const _nickname = nickname.trim();

			history.push('/about/' + _nickname);
		} else {
			//잘못된 입력
		}
	};

	const handleSearchEnter = (e) => {
		if (e.key === 'Enter') {
			handleSearchClick();
		}
	};

	const handleOnClickPost = (e) => {
		history.push(`/posts/${e.target.id}`);
	};

	const handleOnClickPostsMain = () => {
		history.push('/posts');
	};

	return (
		<div className="home">
			<div className="home-logo-container">
				<img
					className="home-logo-image"
					src={TitleImage}
					alt="logo"
				/>
			</div>
			<div className="home-search-container">
				<div className="home-search-form">
					<input
						className="home-search-box"
						type="text"
						placeholder="소환사 명"
						name="nickname"
						value={nickname}
						onChange={searchOnChange}
						onKeyDown={handleSearchEnter}
					/>
					<button
						className="home-search-button"
						type="submit"
						onClick={handleSearchClick}>
						<i className="sprite-site sprite-42" />
					</button>
				</div>
			</div>
			<div>
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
				<br />
			</div>
			<div className="home-posts-table">
				<div className="home-posts-caption">
					<div className="home-posts-title">
						<h1
							className="home-posts-title-text"
							onClick={handleOnClickPostsMain}>
							Posts
						</h1>
					</div>
				</div>
				{Object.keys(postsSample[0]).map((idx) => {
					return idx % 2 === 0 ? (
						<div key={idx} className="home-posts-table-row">
							<div
								className="home-posts-table-cell"
								onClick={handleOnClickPost}>
								<div className="home-posts-table-cell-container">
									<div
										className="home-posts-table-cell-content"
										id={postsSample[0][idx].id}>
										Title: {postsSample[0][idx].title},
										Content:
										{` ` + postsSample[0][idx].content}
									</div>
								</div>
							</div>
							<div
								className="home-posts-table-cell"
								onClick={handleOnClickPost}>
								<div className="home-posts-table-cell-container">
									<div
										className="home-posts-table-cell-content"
										id={postsSample[0][Number(idx) + 1].id}>
										{postsSample[0].length > Number(idx) + 1
											? `Title: ${
													postsSample[0][Number(idx) + 1]
														.title
											  }, Content: ${
													postsSample[0][Number(idx) + 1]
														.content
											  }`
											: undefined}
									</div>
								</div>
							</div>
						</div>
					) : undefined;
				})}
			</div>
		</div>
	);
};

export default Home;
