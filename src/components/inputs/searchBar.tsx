import Link from "next/link";
import React, { useEffect } from "react";

const SearchBar = ({
    searchToken,
    setSearchToken,
    baseURL,
}: {
    searchToken: string;
    setSearchToken: React.Dispatch<React.SetStateAction<string>>;
    baseURL: string;
}) => {
    useEffect(() => {
        return () => setSearchToken("");
    }, [setSearchToken]);

    return (
        <div className="flex gap-4 w-full">
            <input
                type="text"
                value={searchToken}
                onChange={(e) => setSearchToken(e.target.value)}
                placeholder="Search for Public APIs..."
                className="input input-bordered w-full focus:border-primary focus:ring-primary"
            />
            <Link
                href={`${baseURL}?search=${searchToken}`}
                className="btn btn-primary"
            >
                Search
            </Link>
        </div>
    );
};

export default SearchBar;
