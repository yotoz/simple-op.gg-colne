import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';
import { BsFilePost } from 'react-icons/bs';
import {
	RiQuestionnaireFill,
	RiLoginBoxLine,
} from 'react-icons/ri';

import './styles.scss';

const NavBar = () => {
	const refNavHome = useRef(null);
	const refNavPosts = useRef(null);
	const refNavAbout = useRef(null);
	const refNavSign = useRef(null);

	return (
		<div className="nav-bar">
			<div className="nav-container">
				<div className="nav-home">
					<FaHome
						className="nav-icons"
						onClick={(e) => {
							refNavHome.current.click();
						}}
					/>
					<Link to="/home" ref={refNavHome}>
						Home
					</Link>
				</div>
				<div className="nav-posts">
					<BsFilePost
						className="nav-icons"
						onClick={() => {
							refNavPosts.current.click();
						}}
					/>
					<Link to="/posts" ref={refNavPosts}>
						Posts
					</Link>
				</div>
				<div className="nav-about">
					<RiQuestionnaireFill
						className="nav-icons"
						onClick={() => {
							refNavAbout.current.click();
						}}
					/>
					<Link to="/about" ref={refNavAbout}>
						About
					</Link>
				</div>
				<div className="nav-sign">
					<RiLoginBoxLine
						className="nav-icons"
						onClick={() => {
							refNavSign.current.click();
						}}
					/>
					<Link to="/sign" ref={refNavSign}>
						Sign
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NavBar;
