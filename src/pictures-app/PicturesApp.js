import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from '../api'

function PicturesApp() {
    const [imagesList, setImagesList] = useState([])

    const handleSubmit = async (term) => {
        const imgResults = await searchImages(term)
        console.log('imgResults: ', imgResults)
        setImagesList(imgResults)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList imageList={imagesList} />
        </div>
    )
}

export default PicturesApp