import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
  } from 'reactstrap';
import { registerUser } from '../../redux/actions/userAction';
import {useNavigate} from "react-router-dom"

function AddProduct() {
  const [modal,setModal]=useState(false)
  const[name,setName]=useState("")
  const[description,setDescription]=useState("")
  const[price,setPrice]=useState("")
  const[quantity,setQuantity]=useState("")

const toggle=()=>{
  setModal(!modal)
}
const dispatch=useDispatch()
const navigate=useNavigate()
const register=()=>{
  const newUser={name,description,price,quantity}
  dispatch(registerUser(newUser))
  toggle()
  navigate("/foodList")
}   
  return (
    <div style={{ padding: '0 15px' }}>
    <NavLink  href="#" onClick={toggle}>
      Add New Food 
    </NavLink>
    <Modal  isOpen={modal}>
      <ModalHeader>New Food</ModalHeader>
      <ModalBody>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Input
              type="text"
     onChange={(event)=>setName(event.target.value)}
     
              name="name"
              id="name"
              placeholder="Name"
              className="mb-3"
          
            />
            <Label for="description">Description</Label>
            <Input
              type="text"
              onChange={(event)=>setDescription(event.target.value)}
              name="description"
              id="description"
              placeholder="description"
              className="mb-3"
          
            />
            <Label for="price">Price</Label>
            <Input
              type="price"
              onChange={(event)=>setPrice(event.target.value)}
              name="price"
              id="price"
              placeholder="price"
       
            />
            <Label for="quantity">Quantity</Label>
            <Input
              type="quantity"
              onChange={(event)=>setQuantity(event.target.value)}
              name="quantity"
              id="quantity"
              placeholder="quantity"
              className="mb-3"
 
            />
            <Button
              color="dark"
              style={{ marginTop: '2rem' }}
              block
onClick={register}
            >
              Add 
            </Button>
          </FormGroup>
        </Form>
      </ModalBody>
    </Modal>
  </div>
  )
}

export default AddProduct