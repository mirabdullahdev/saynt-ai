import React from 'react'
import '../../../../public/admin/sass/pages/viewData.scss';
import { Card } from 'react-bootstrap';

const ViewData = (props) => {

    return (
        <div className={`view_data ${props.className}`}>
            <Card>
                <div className='card-header'>
                    {props.title} Information
                </div>
                { props.children }
            </Card>
        </div>

    )
}

export default ViewData;