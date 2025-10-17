"use client";
import { faEdit, faEllipsisV, faEye, faSearch, faSort, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import '../../../../public/admin/sass/pages/table.scss';


const TableBody = (props) => {
    return (
        <div className='card-body'>
            <div className="table_main">
                {props.children}
            </div>
        </div>
    )
}

export default TableBody;