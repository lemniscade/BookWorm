import React from 'react'
import GridRow from '@/components/GridRow'
// import GridColumn from '@/components/GridColumn'
import GridSystem from '@/components/GridSystem'
import Navbar from '@/components/Navbar'
import GridColumn from '@/components/GridColumn'
import '../component_styles/global.scss'
import '../page_styles/HomePage.scss'

export default function HomePage() {
    return (
        <GridSystem>
            <GridRow columns={1}>
                <GridColumn style="underline">
                    Looking for a last minute gift? <b> Click Here for Bookshop Gift Cards! </b> Every purchase financially supports local independent bookstores!
                </GridColumn>
            </GridRow>
            <GridRow columns={1}>
                <Navbar />
            </GridRow>
        </GridSystem >
    )
}
