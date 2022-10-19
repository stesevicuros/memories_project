import React, { useEffect, useState } from 'react';
import { AppBar, Avatar, Button, Toolbar, Typography } from '@material-ui/core';
import memoriesLogo from '../../images/memories-Logo.png';
import memoriesText from '../../images/memories-Text.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import decode from 'jwt-decode';

import useStyles from './styles';

const Navbar = () => {
	const classes = useStyles();
	const [user, setUser] = useState(
		JSON.parse(localStorage.getItem('profile'))
	);
	const dispatch = useDispatch();
	const history = useHistory();
	const location = useLocation();

	const logout = () => {
		dispatch({ type: 'LOGOUT' });

		history.push('/');

		setUser(null);
	};

	useEffect(() => {
		const token = user?.token;

		if (token) {
			const decodedToken = decode(token);
			if (decodedToken.exp * 1000 < new Date().getTime()) logout();
		}

		setUser(JSON.parse(localStorage.getItem('profile')));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location]);

	return (
		<AppBar className={classes.appBar} position='static' color='inherit'>
			<Link to='/' className={classes.brandContainer}>
				<img src={memoriesText} alt='icon' height='45px' />
				<img
					className={classes.image}
					src={memoriesLogo}
					alt='memories'
					height='40px'
				/>
			</Link>
			<Toolbar className={classes.toolbar}>
				{user ? (
					<div className={classes.profile}>
						<Avatar
							className={classes.purple}
							alt={user.result.name}
							src={user.result.imageUrl}
						>
							{user.result.name.charAt(0)}
						</Avatar>
						<Typography className={classes.userName} variant='h6'>
							{user.result.name}
						</Typography>
						<Button
							variant='contained'
							className={classes.logout}
							color='secondary'
							onClick={logout}
						>
							Logout
						</Button>
					</div>
				) : (
					<Button
						component={Link}
						to='/auth'
						variant='contained'
						color='primary'
					>
						Sign In
					</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
