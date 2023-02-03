import React from "react";
import Link from "next/link";

interface Props {
    maxPageNumber?: number;
    currentPageNumber: number;
    whatPage?: string;
}

export const Pagination: React.FC<Props> = React.memo((props) => {
    const { maxPageNumber, currentPageNumber, whatPage } = props;
    const prevPage = currentPageNumber - 1;
    const nextPage = currentPageNumber + 1;

    const previousLinkHref = `/${whatPage}/page/${prevPage}`;
    const nextLinkHref = `/${whatPage}/page/${nextPage}`;

    return (
        <div className="flex">
            {currentPageNumber !== 1 && (
                <Link href={previousLinkHref} className="mr-5 hover:text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </Link>
            )}
            {currentPageNumber !== maxPageNumber && (
                <Link href={nextLinkHref} className="hover:text-green-500">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </Link>
            )}
        </div>
    );
});

Pagination.displayName = "Pagination";