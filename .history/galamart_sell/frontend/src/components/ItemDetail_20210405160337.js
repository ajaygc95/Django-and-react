import React, {useState, useEffect} from 'react'

function ItemDetail({match}) {
    useEffect(() => {
        fetchItems()
    }, [])

    const [item, setItem] = useState([])

    const fetchItems = async () => {

    }

    return (
        <div>
            ITem
        </div>
    )
}

export default ItemDetail
