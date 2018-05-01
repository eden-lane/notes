import React from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.css';
import { selectNode, openCollection } from '../../actions/collections';

import { NotesTree } from '../../components/NotesTree/NotesTree';

const mapStateToProps = state => {
    const { collections } = state
    return {
        items: collections.get('allItems').map(id => {
            return collections.getIn(['itemsById', id])
        }).toJS()
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: (id) => {
        // dispatch(selectNode(id))
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
