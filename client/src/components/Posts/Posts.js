import React from 'react';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';
export default function Posts() {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	console.log(posts);

	return (
		<>
			<h1 className={classes.something}>POSTS</h1>
			<Post />
			<Post />
		</>
	);
}
