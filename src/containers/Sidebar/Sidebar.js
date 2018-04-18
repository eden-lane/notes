import React, { Component } from 'react';
import styles from './sidebar.css';

export class Sidebar extends Component {
    render() {
        return (
            <div className={styles.root}>
                <b>Sidebar</b>
            </div>
        )
    }
}
