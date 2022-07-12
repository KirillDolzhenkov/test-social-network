import React, {useEffect, useState} from "react";

import styles from "./Pagination.module.css";

//types:
type PaginationPropsType = {
    currentPage: number
    onPageChanged: (p: number) => void
    totalUsersCount: number
    pageSize: number
    portionSize: number
}

//functional component:
const Pagination: React.FC<PaginationPropsType> = (props) => {
    const {
        pageSize,
        totalUsersCount: totalItemsCount, //need to rename
        currentPage,
        onPageChanged,
        portionSize,
    } = props;

    //pages for pagination:
    const pagesCount = Math.ceil(totalItemsCount / pageSize); //.ceil rounds a number up to the next largest integer
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    //portions for pagination:
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState(1);
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionPageNumber = portionNumber * portionSize

    //save current users portion:
    useEffect(()=>setPortionNumber(Math.ceil(currentPage/portionSize)), [currentPage]);

    return <div>
        {portionNumber > 1 &&
            <button onClick={() => setPortionNumber(portionNumber - 1)}>&#8249;</button>
        }
        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => <span
                className={
                    p === currentPage
                        ? `${styles.main} ${styles.selectedPage}`
                        : styles.main
                }
                onClick={() =>
                    onPageChanged(p)
                }>{p}</span>
            )}
        {portionCount > portionNumber &&
            <button onClick={() => setPortionNumber(portionNumber + 1)}>&#8250;</button>
        }

    </div>
}

export {
    Pagination
}