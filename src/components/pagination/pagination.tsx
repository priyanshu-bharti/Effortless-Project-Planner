import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

const Pagination = ({
    baseURL,
    totalPages,
    page,
}: {
    baseURL: string;
    totalPages: number;
    page: number;
}) => {
    return (
        <>
            {totalPages > 1 && (
                <div className="btn-group col-span-full mx-auto">
                    <Link
                        href={
                            page > 1
                                ? `${baseURL}/?page=${page - 1}`
                                : `${baseURL}/?page=${1}`
                        }
                        className={`btn btn-accent btn-square ${
                            page === 1 && "cursor-not-allowed btn-disabled"
                        }`}
                    >
                        <RiArrowLeftLine className="text-xl" />
                    </Link>
                    <button className="btn btn-accent ">Page {page}</button>
                    <Link
                        href={
                            page < totalPages
                                ? `${baseURL}/?page=${page + 1}`
                                : `${baseURL}/?page=${totalPages}`
                        }
                        className={`btn btn-accent btn-square ${
                            page === totalPages && "cursor-not-allowed btn-disabled"
                        }`}
                    >
                        <RiArrowRightLine className="text-xl" />
                    </Link>
                </div>
            )}
        </>
    );
};

export default Pagination;
