import React from 'react';
import Form from 'react-bootstrap/Form';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
const Search = ({setSearch,setRating}) => {
  return (
    <div> <Form>
    <Form.Group className="mb-3" >

      <Form.Control type="search" placeholder="tape Title to find your Movie..." 
      onChange={(e)=>{setSearch(e.target.value)}} />
    </Form.Group>
    <Typography component="legend"><h5 style={{color:'white'}}>Search by Rating</h5></Typography>
      <Rating
        name="simple-controlled"
      max={10}
      value={null}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
      />
  </Form>
  
  
  </div>
  )
}

export default Search