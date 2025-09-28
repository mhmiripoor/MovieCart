import React from "react";

const Search = ({ searchTerm, setSearchTerm }) => {
    return (
        <div className="search">
            {/* <img src="./public/search.svg" alt="" srcset="" /> */}

            <input className="text-black border-black rounded-4xl p-5 w-full" type="text" placeholder="Search from site" name="" id=""
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} 
            />

        </div>
    )
}

export default Search