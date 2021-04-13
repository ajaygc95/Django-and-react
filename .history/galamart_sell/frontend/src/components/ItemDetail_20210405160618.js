import React, {useState, useEffect} from 'react'
import React from 'react'

function ItemDetail() {
    useEffect(() => {
        fetchItems()
    }, [])

    const [item, setItem] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'http://localhost:8000/blog/api/todos/'
        )

        const items = await data.json()
        console.log(items)
        setItems(items)
    }


    return (
        <div>
            ITem
        </div>
    )
}

export default ItemDetail
