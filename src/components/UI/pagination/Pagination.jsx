import React, {useMemo} from 'react';
import {getPagesArray} from "../../../utils/page";

const Pagination = ({totalPages, page, changePage}) => {

    let pagesArray = useMemo(() => {
        return getPagesArray(totalPages);
    }, [totalPages])

    return (
        <div className="page__wrapper">
            {
                pagesArray.map(p =>
                    <span key={p} onClick={() => changePage(p)} className={page === p ? 'page page__current' : 'page'}>{p}</span>
                )}
        </div>
    );
};

export default Pagination;