import React, {useState} from 'react'
import SearchBar from './components/SearchBar'
import ImageList from './components/ImageList'
import searchImages from '../api'

function PicturesApp() {
    const [imagesList, setImagesList] = useState([])

    const handleSubmit = (term) => {
        const imgResponse = searchImages(term)
        console.log(imgResponse)


        // setImagesList(await searchImages(term))
        // console.log('list:', imagesList)
    }

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            {/* <ImageList imageList={imagesList} /> */}
        </div>
    )
}

export default PicturesApp