import { createStore } from 'redux'
import * as types from '../constants/action-types.js'
import * as matchers from 'jest-immutable-matchers'
import { Map, List } from 'immutable'

import reducer from './collections'

let store

describe('collections reducer', () => {
    beforeEach(() => {
        jest.addMatchers(matchers)
        store = createStore(reducer)
    })

    it('should return the initial state', () => {
        const state = store.getState()
        const expected = Map({ itemsById: Map(), allItems: List([]) })
        expect(state).toEqualImmutable(expected)
    })

    it('should add root collections to allItems and in the dictionary', () => {
        const data = [
            {
                objectId: 'A',
                title: 'title A'
            },
            {
                objectId: 'B',
                title: 'B'
            }
        ]
        const action = {
            type: types.FETCH_NODES_SUCCESS,
            parentId: null,
            data
        }
        store.dispatch(action)
        const state = store.getState()
        const expected = Map({
            "itemsById": Map({
                A: Map(data[0]),
                B: Map(data[1])
            }),
            "allItems": List(['A', 'B'])
        })
        expect(state).toEqualImmutable(expected)
    })

    it('should add nested collections to dictionary but not to allItems', () => {
        const data = [
            {
                objectId: 'B',
                title: 'B',
                parentId: 'A'
            }
        ]
        const action = {
            type: types.FETCH_NODES_SUCCESS,
            parentId: 'A',
            data
        }
        store.dispatch(action)
        const state = store.getState()
        const expected = Map({
            itemsById: Map({
                B: Map(data[0])
            }),
            allItems: List([])
        })
        expect(state).toEqualImmutable(expected)
    })
})
