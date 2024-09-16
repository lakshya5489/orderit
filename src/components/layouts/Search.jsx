import React from 'react'
import { CiSearch } from "react-icons/ci";


export default function Search() {
    return (
        <form>
            <div className="input-group">
                <input type="text" placeholder="Search your favourite restaurant" id="searach-field" className="form-control" />
                <div className="input-group-append">
                    <button id="search_btn" className="btn"><CiSearch /></button>
                </div>
            </div>
        </form>
    );
}
