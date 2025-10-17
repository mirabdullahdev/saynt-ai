import { Card } from 'react-bootstrap';
import '../../../../public/admin/sass/pages/userForm.scss';


const FormCom = (props) => {
  const {
    top_spacing
  } = props;


  return (
    <div className={`right_inner ${top_spacing && top_spacing}`}>
      <Card>
        <div className='card-heading'>
          Create New {props.title} Here
        </div>
        <div className='card-body'>
          { props.children }
        </div>
      </Card>
    </div>
  )
}

export default FormCom;