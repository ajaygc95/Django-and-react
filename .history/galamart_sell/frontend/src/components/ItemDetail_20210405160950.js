import React, {useState, useEffect} from 'react'

function ItemDetail({match}) {
    useEffect(() => {
        fetchItems()
    }, [])

    const [item, setItem] = useState([])

    const fetchItems = async () => {
        const data = await fetch(
            `http://localhost:8000/blog/api/todos/${match.id}`
        )

        const items = await data.json()
        console.log(items)
        setItem(items)
    }


    return (
        <div>
            {item.}
        </div>
    )
}

export default ItemDetail
