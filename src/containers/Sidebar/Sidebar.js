import React from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.css';
import { openCollection } from '../../actions/collections';

import { NotesTree } from '../../components/NotesTree/NotesTree';
const mapStateToProps = state => ({
    items: state.collections.get('items').toJS()
})


const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id) => {
        dispatch(openCollection(id))
    }
})

const Sidebar = (props) => {

    return <div className={styles.root}>
        <NotesTree items={props.items} onClick={props.onClick}/>
    </div>
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
