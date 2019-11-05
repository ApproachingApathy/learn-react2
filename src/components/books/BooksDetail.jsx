import React from 'react'

import { useParams } from 'react-router-dom'

export default function BooksDetail() {
    let { id } = useParams(); 
    return (
        <div>
            {"book " + id}
        </div>
    )
}