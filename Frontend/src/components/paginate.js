import React from 'react'
import ReactPaginate from 'react-paginate';
//Special thanks to react-paginate for delivering the pagination functionality --> https://www.npmjs.com/package/react-paginate

function paginate(props) {
    const baseStyle="relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-gray-900 rounded-full group bg-white border-2 border-blue-800 "
    const activeStyle ="relative block items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden font-medium text-white rounded-full group bg-gradient-to-br from-purple-600 to-blue-500 hover:text-white"

    if (props.show){
        return (
            <ReactPaginate
            activeClassName={activeStyle}
            breakClassName={'item break-me px-3.5 '.concat(baseStyle)}
            breakLabel={''}
            containerClassName={'pagination inline-flex'}
            disabledClassName={'disabled-page'}
            marginPagesDisplayed={0}
            nextClassName={"item next px-3.5 ".concat(baseStyle)}
            onPageChange={props.onPageChange}
            pageCount={props.pageCount}
            pageClassName={baseStyle}
            pageLinkClassName={'pt-3.5 px-3.5'}
            pageRangeDisplayed={2}
            previousClassName={"item previous px-3.5 ".concat(baseStyle)}
            />
            );
        }
    else{
        return <div/>;
    }
}

export default paginate