import React from 'react'
import '../component_styles/SearchBar.scss'
import GridColumn from './GridColumn'
import Magnify from '../../public/images/Magnify'
export default function SearchBar() {
    return (
        <GridColumn style="search-bar">
            <input type="text" placeholder="Ara..." className="search-input" />
            <button className="search-button">
                <Magnify />
            </button>
        </GridColumn>
    )
}
