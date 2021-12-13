import { FaHeart } from 'react-icons/fa'

const Image = ({info}) => {
     return (
        <div>
            <img className='image' src={ info.largeImageURL } alt='Failed To Load...'></img>
            <div className='image-info'>
                <p>By { info.user }</p>
                <p><span style={{color: 'red', fontWeight: 'bold', marginRight: '10px'}}><FaHeart /></span>{ info.likes }</p>
            </div>
        </div>
    )
}

export default Image


