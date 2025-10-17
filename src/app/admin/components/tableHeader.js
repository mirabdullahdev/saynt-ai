"use client";
import '../../../../public/admin/sass/pages/table.scss';


const TableHeader = (props) => {
    return (
        <div className='card-header'>
            <div className='header_left'>
                <div className='heading'>Here Is Your {props.title} Listing!</div>
            </div>
            <div className='header_right'>
                {props.children}
            </div>
        </div>
    )
}

export default TableHeader;