import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import memories from './images/memories.png';
import useStyles from './styles';
import Navbar from './components/Navbar/Navbar';

export default function App() {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Container maxidth='lg'>
			<Navbar />
			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
						container
						justifyContent='space-between'
						alignItems='stretch'
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form
								currentId={currentId}
								setCurrentId={setCurrentId}
							/>
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
}
