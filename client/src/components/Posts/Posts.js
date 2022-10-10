import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

export default function Posts({ setCurrentId }) {
	const posts = useSelector((state) => state.posts);
	const classes = useStyles();

	console.log(posts);

	return !posts.length ? (
		<Grid
			className={classes.container}
			container
			style={{ height: '100%' }}
			justifyContent='center'
			alignItems='center'
		>
			<CircularProgress size='3.5rem' />
		</Grid>
	) : (
		<Grid
			className={classes.container}
			container
			alignItems='stretch'
			spacing={3}
		>
			{posts.map((post) => (
				<Grid key={post._id} item xs={12} sm={6}>
					<Post post={post} setCurrentId={setCurrentId} />
				</Grid>
			))}
		</Grid>
	);
}
