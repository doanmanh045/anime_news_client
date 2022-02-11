import React from 'react';
import BlogCharacter from './BlogCharacter';
export default function Character() {
    return (
        <div className='section character container'>
            <div className='big__wrapper'>
                <BlogCharacter categoryTitle={'Nhân vật'} />
                <BlogCharacter categoryTitle={'Review & Spolier'} />
                <BlogCharacter categoryTitle={'FanMade'} />
            </div>
        </div>
    )
}
