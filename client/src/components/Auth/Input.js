import React from 'react';
import { TextField, Grid, InputAdornment, IconButton } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const Input = ({
	name,
	handleChange,
	label,
	half,
	autoFocus,
	type,
	handleShowPassword,
}) => {
	return (
		<Grid item xs={12} sm={half ? 6 : 12}>
			<TextField
				name={name}
				onChange={handleChange}
				variant='outlined'
				required
				fullWidth
				label={label}
				autoFocus={autoFocus}
				type={type}
				InputProps={
					name === 'password'
						? {
								endAdornment: (
									<InputAdornment position='end'>
										<IconButton
											onClick={handleShowPassword}
										>
											{type === 'password' ? (
												<VisibilityOff />
											) : (
												<Visibility />
											)}
										</IconButton>
									</InputAdornment>
								),
						  }
						: null
				}
			/>
		</Grid>
	);
};

export default Input;

/*'You have created a new client application that uses libraries
 for user authentication or authorization that will soon be deprecated.
  New clients must use the new libraries instead; existing clients must also
   migrate before these libraries are deprecated. See the [Migration Guide]
   (https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information.');*/
