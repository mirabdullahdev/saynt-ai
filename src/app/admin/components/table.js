"use client";
import { faEdit, faEllipsisV, faEye, faSearch, faSort, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col, Dropdown, Form, InputGroup, Row, Table } from 'react-bootstrap';
import '../../../../public/admin/sass/pages/table.scss';


const TableCom = (props) => {
    const {
        top_spacing
    } = props;


    return (
        <div className={`table_area ${top_spacing && top_spacing}`}>
            <Row>
                <Col xxl={12} xl={12} lg={12} md={12} sm={12} xs={12}>
                    <Card>
                        {props.children}
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default TableCom;