import React from 'react';


export default function User({ image, name }) {
    return (
        <div className="user flex items-center mb-4">
            <img alt="user" className="user__image rounded-full w-12 h-12" src={image} />
            <span className="font-medium ml-2 text-sm text-black">{name}</span>
        </div>
    )
}