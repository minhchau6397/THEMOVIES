import React from 'react'

import AddMovie from '../../components/admin/AddMovie'
import AddCinema from '../../components/admin/AddCinema'

export default function AddData() {
    return (
        <div className="container" style={{textAlign: "center"}}>
            <AddMovie />
            <hr />
            <AddCinema />
        </div>
    )
}
