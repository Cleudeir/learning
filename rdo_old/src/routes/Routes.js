
import React, {useContext} from 'react';
import {Context} from '../contexts/Context';
import Auth from './Auth';
import NoAuth from './NoAuth';

export default function Routes() {
	const {signed} = useContext(Context);
	function verificador() {
		if (signed) {
			return <Auth/>;
		}

		return <NoAuth/>;
	}

	return verificador();
}

