import React, { useState } from 'react';
import { ImagesCollection } from '/imports/db/ImagesCollection';

export const ImageForm = () => {
    const [img, setImg] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (!img) return;

        Meteor.call('images.insert', img);

        setImg('');
    };

    return (
        <form className='image-form' onSubmit={handleSubmit}>
            <input type="image" placeholder="import image" value={img} onChange={(e) => settext(e.target.value)}/>
            <button type="submit">Add image</button>
        </form>
    )
}