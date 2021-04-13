import React, {useState, useEffect} from 'react'

function ItemDetail({match}) {
    useEffect(() => {
        fetchItems()
        console.log(match)
    }, [])

    const [item, setItem] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost:8000/blog/api/todos/${match.id}`
        )

        const items = await data.json()
        setItem(items)
    }


    return (
        <div>
            {item.title}
        </div>
    )
}

export default ItemDetail
