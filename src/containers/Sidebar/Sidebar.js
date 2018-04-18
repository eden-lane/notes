import React from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.css';

import {NotesTree} from '../../components/NotesTree/NotesTree';
const mapStateToProps = state => ({
    items: state.collections.get('items').toJS()
})


const mapDispatchToProps = dispatch => ({})

const Sidebar = (props) => (
    <div className={styles.root}>
        <NotesTree items={props.items}/>
    </div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
