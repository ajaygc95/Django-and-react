import React from 'react'

function ItemDetail() {
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
