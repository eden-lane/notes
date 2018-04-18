import React, { Component } from 'react';
import { MainSideBar } from './main-side-bar/main-side-bar';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Sidebar } from './Sidebar/Sidebar';

export class App extends Component {
	render() {
		return (
			<div>
                <Header />
                <div>
    				<Sidebar />
                    <Content />
                </div>
			</div>
		)
	}
}
