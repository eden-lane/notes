import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import styles from './Sidebar.css';

import {NotesTree} from '../../components/NotesTree/NotesTree';
const mapStateToProps = state => ({
    items: state.collections.get('items').toJS()
})


const mapDispatchToProps = dispatch => ({})

const Sidebar = (props) => (
    <Fragment>
        <NotesTree items={props.items}/>
    </Fragment>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Sidebar)
