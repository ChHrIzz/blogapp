import { Grid, TextField, Typography,Button } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';



const Addblog = ({props,update}) => {
    var location = useLocation();
    const[post,setPost] = useState({title:'',post:'',image:''});
    const navigate = useNavigate()

    useEffect(()=>{
        if (location.state!=null) {
          setPost({...post,title:location.state.val.title,
                           post:location.state.val.post,
                           image:location.state.val.image})  
        }else{
           setPost( {...post,title:'',post:'',image:''})
        }
    },[])

    const postHandler =(e)=>{
    setPost({...post,[e.target.name]:e.target.value})
   }
   
   const addPost=()=>{
    if (location.state != null){
        var upId = location.state.val._id

        axios.put("http://localhost:3008/api/edit/"+upId,post)
        .then((res)=>{
            if(res.data.message =="blog updated"){
                alert(res.data.message)
                navigate('/view')

            }
            else{
                alert("user not found")
            }
        })
    }else{
    console.log('btn clicked',post)
    axios.post("http://localhost:3008/api/addblog",post)
    .then((res)=>{
        alert(res.data.message)
        navigate('/view')
    })
.catch((err)=>{
    console.log(err)
})
    }
}
  return (
    <div style={{margin:'6%'}}>
        <Typography variant='h3' color="green">ADD BLOG</Typography>
        <br/><br />
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label='post title' name='title' value={post.title} fullWidth onChange={postHandler}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <TextField variant='outlined' label='Type a post' name='post' value={post.post} fullWidth multiline rows={5} onChange={postHandler}/>
            </Grid>
            <Grid item xs={12} sm={6} md={6}>
                <TextField variant='outlined' label='Image URL' name='image' value={post.image} fullWidth onChange={postHandler}/>
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
                <Button variant='contained' color='secondary' onClick={addPost}>submit</Button>
            </Grid>
        </Grid>
    </div>
  )
}

export default Addblog