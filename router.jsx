import React from 'react';
import { Route } from 'react-router';

export default (
	<Route>
		<Route exact path="/"/>
		<Route exact path="/contact"/>
		<Route exact path="/albums"/>
		<Route exact path="/associate"/>
		<Route exact path="/presets"/>
		<Route path="/albums/view/:albumKey"/>
		<Route exact path="/articles"/>
		<Route exact path="/articles/:articleKey"/>
		<Route exact path="/tech"/>
	</Route>
);
