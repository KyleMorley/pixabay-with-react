import Image from './Image';
import Header from './Header'
import { useState, useEffect } from 'react';

const Services = () => {
    const [images, setImages] = useState([]);
    let [text, setText] = useState('');

    //Fetch Data From Pixabay

   useEffect(() => {
       const getData = async () => {
           const images = await fetchImages();

           setImages(images.hits);
       }

       getData();
   }, [text])

   const fetchImages = async() => {
    const res = await fetch(`https://pixabay.com/api/?key=24786745-3e326e6a7937bd9839c436ee3&q=${ text }&image_type=photo`);

    const data = await res.json();

    return data;
}

   
    return (
        <div>
            <Header searchText={ (text) => setText(text) }/>
               <div className='content-main'>
            {
                images.length > 0 ?
                images.map((image) => (
                    <Image key={ image.id } info={ image }/>
                ))
               :
               <h1 className='image-load'>Loading Images...</h1>
            }
        </div>
        </div>
    )
}

export default Services
