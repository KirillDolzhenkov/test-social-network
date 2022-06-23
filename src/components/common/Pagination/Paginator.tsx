import React from "react";

import style from "./Pagination.module.css";

//types:
type PaginationPropsType = {
    currentPage: number
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
}

//functional component:
const Pagination: React.FC<PaginationPropsType> = (props) => {

    const {
        pageSize,
        totalUsersCount,
        currentPage,
        onPageChanged,
    } = props;

    //pages for pagination:
    const pagesCount = Math.ceil(totalUsersCount / pageSize); //.ceil rounds a number up to the next largest integer
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        {pages.map(p => <span
            className={
                p === currentPage
                    ? style.selectedPage
                    : ''
            }
            onClick={() =>
                onPageChanged(p)
            }>{p}</span>
        )}
    </div>
}

export {
    Pagination
}