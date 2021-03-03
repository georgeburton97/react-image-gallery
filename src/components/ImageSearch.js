import React, {useState} from 'react'

const ImageSearch = ({searchText}) => {

    const [text, setText] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();

        searchText(text);
    }

    return (
        <div className='max-w-sm rounded overflow-hidden my-10 mx-auto'>
            <form onSubmit={onSubmit} className='w-72 md:w-full mx-auto'>
                <div className="flex items-center border-b border-b-2 border-blue-600 py-2">
                    <input onChange={e => setText(e.target.value)} type="text" placeholder="Search Image Name..." className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"/>
                    <button className="flex-shrink-0 bg-blue-600 hover:bg-blue-800 border-blue-600 hover:border-blue-800 text-sm border-4 text-white py-1 px-2 rounded" type="submit">
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ImageSearch;
