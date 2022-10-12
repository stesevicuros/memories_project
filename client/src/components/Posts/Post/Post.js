import React, { useState } from 'react';
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
	CircularProgress,
} from '@material-ui/core';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { deletePost, likePost } from '../../../actions/posts';
import { useDispatch } from 'react-redux';

import useStyles from './styles';

export default function Post({ post, setCurrentId }) {
	// const [likeCount, setLikeCount] = useState(post.likeCount);
	const [deleteBool, setDeleteBool] = useState(false);
	const dispatch = useDispatch();
	const classes = useStyles();

	const handleDelete = () => {
		dispatch(deletePost(post._id));
		setDeleteBool(true);
	};

	const handleLike = () => {
		dispatch(likePost(post._id));
		// setLikeCount(likeCount + 1);
	};

	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={post.selectedFile}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Typography variant='h6'>{post.name}</Typography>
				<Typography variant='body2'>
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button
					style={{ color: 'white' }}
					size='small'
					onClick={() => setCurrentId(post._id)}
				>
					<MoreHorizIcon fontSize='medium' />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant='body2' color='textSecondary'>
					{post.tags.map((tag) => `#${tag} `)}
				</Typography>
			</div>
			<Typography className={classes.title} variant='h5' gutterBottom>
				{post.title}
			</Typography>
			<CardContent>
				<Typography variant='body1' color='textSecondary' component='p'>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					size='small'
					color='primary'
					style={{ display: 'flex', alignItems: 'flex-start' }}
					onClick={handleLike}
				>
					<ThumbUpAltIcon fontSize='small' />
					&nbsp;Like&nbsp;{post.likes}
				</Button>
				{!deleteBool ? (
					<Button
						size='small'
						style={{
							display: 'flex',
							alignItems: 'flex-start',
							color: '#ff1010',
						}}
						onClick={handleDelete}
					>
						<DeleteIcon fontSize='small' />
						Delete
					</Button>
				) : (
					<CircularProgress
						size='1.5rem'
						style={{ color: '#ff1010' }}
					/>
				)}
			</CardActions>
		</Card>
	);
}
