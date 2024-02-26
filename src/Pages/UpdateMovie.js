import {React,useState} from 'react';
import{Form,Button} from'react-bootstrap';
import Rating from '@mui/material/Rating';
import { useParams ,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { updateMovie } from '../Redux/movieSlice';


const UpdateMovie = () => {
    const dispatch=useDispatch();
    const navigate=useNavigate();
 const {id}=useParams();
 const {myMovies}=useSelector((state)=>state.movie);
 const specifecMovie=myMovies?.filter((el)=>el._id===id)
    const [newMovie,setNewMovie]=useState(specifecMovie)
    const changeHandler=(e)=>{
        setNewMovie({...newMovie,[e.target.name]:e.target.value})
    };

    const updateHandler=(e)=>{
        e.preventDefault();
        dispatch(updateMovie({id,newMovie}));
        navigate("/")
    }



  return (
    <div>
        {specifecMovie?.map((el)=>  
        <Form style={{marginLeft:'20px' }}  >
            <h2>Movie To Update : </h2>
<br/>
<Form.Group className="mb-3" >
  <Form.Label>
      Movie Title
  </Form.Label>
  <Form.Control type="text" placeholder="Enter title" 
      name="movieTitle" 
    defaultValue={el.movieTitle}
  onChange={changeHandler}
   />
 
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Description</Form.Label>
  <Form.Control type="text" placeholder="..." 
  name="descreption"
  defaultValue={el.descreption}
  onChange={changeHandler}
   />
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>PosterUrl</Form.Label>
  <Form.Control type="text" placeholder="..." 
  name="posterUrl"
  defaultValue={el.posterUrl}
  onChange={changeHandler}
/>
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>trailler</Form.Label>
  <Form.Control type="text" placeholder="..."
   name="trailler" 
   defaultValue={el.trailler}
   onChange={changeHandler} />
</Form.Group>

<Form.Group className="mb-3" >
  <Form.Label>category</Form.Label>
  <Form.Control type="text" placeholder="..."
   name="category" 
   defaultValue={el.category}
   onChange={changeHandler}/>
</Form.Group>

<Rating
  name="simple-controlled"
  max={10}
  value={el.rate}
  onChange={(event, newValue) => {
    setNewMovie({...newMovie, rate:newValue});
  }}

/>
<br/>
<Button onClick={updateHandler}>Update </Button>
<Link to={"/"}>
<Button>cancel</Button>
</Link>


</Form>

)}
        
         </div>
  )
}

export default UpdateMovie