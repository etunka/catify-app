import React from 'react';


export default function Form() {
    return (
        <form action="POST">
            <input className="w-full p-2 focus:outline-none h-20 border border-turquoise border-opacity-50 rounded" type="text" placeholder="new entry" maxLength="200" />
            <button className="block py-1 px-2 my-2 text-white bg-turquoise rounded" type="submit">Submit</button>
        </form>
    )
}