import React, {useState, useEffect} from 'react'

function Shop() {

    useEffect(()=> {
        fetchItems()
    })

    const [items, setItems] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            'http://localhost:8000/blog/api/todos/'
        )

        const items = await data.json()
        console.log(items)
    }

    return (
        <div>
            <h2
        </div>
    )
}

export default Shop
