import React from 'react'
import { Route } from 'react-router-dom'

const AdminLayout = props => {
    return (
        <>
            {props.children}
        </>
    )
}

export default function AdminTemplate({ Component, ...props }) {
    return (
        <Route
            {...props}
            render={propsComponent => (
                <AdminLayout>
                    <Component {...propsComponent} />
                </AdminLayout>
            )}
        />
    )
}
