import React, { Component } from 'react';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import Sidebar from './Sidebar/Sidebar';

export class App extends Component {
	render() {
		return (
			<div style={{ margin: '20px auto', width: '60%', height: '90%' }}>
                <Header />
                <div style={{ display: 'flex' }}>
    				<Sidebar />
                    <Content />
                </div>
            </div>
        )
    }
}
