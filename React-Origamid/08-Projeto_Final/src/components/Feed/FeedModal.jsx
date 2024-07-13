import React, { useEffect } from 'react'
import styles from './FeedModal.module.css'
import useFetch from '../../Hooks/useFetch'
import { PHOTO_GET } from '../../api/Api'
import Error from '../Helper/Error'
import Loading from '../Helper/Loading'
import PhotoContent from '../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto}) => {
    const { data, loading, error, request } = useFetch()

    useEffect(() => {
        const { url, options } = PHOTO_GET(photo.id)
        request(url, options)
    }, [])

    const handleOutsideClick = (event) => {
      if (event.target === event.currentTarget) {
        setModalPhoto(null)
      }
    }

    return (
        <div className={styles.modal} onClick={handleOutsideClick}>
            {error && <Error>{error}</Error>}
            {loading && <Loading />}
            {data && <PhotoContent data={data} />}
        </div>
    )
}

export default FeedModal