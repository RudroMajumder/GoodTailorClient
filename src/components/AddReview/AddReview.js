import React, { useState,useContext,useEffect } from 'react';
import Sidebar from '../Shared/Sidebar/Sidebar';
import { FcMenu} from "react-icons/fc";
import Navbar from '../Shared/Navbar/Navbar';
import { useForm } from "react-hook-form";
import { UserContext } from '../../App';

const AddReview = () => {
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const { register, handleSubmit, formState: { errors } }  = useForm();
    const [loggedInUser] = useContext(UserContext);
    const [review,setReview] = useState({}); 
    
    const handleSidebar = () =>{
        if(!sidebarOpen){
            setSidebarOpen(true);
        }else{
            setSidebarOpen(false);
        }
    }
    const toggleStyle={
        backgroundColor:"#3A4256"
    }
    const handleBlur = (e) =>{
        const userReview = {...review};
        userReview[e.target.name] = e.target.value;
        setReview(userReview)
    }
    // console.log(review)
    const onSubmit = data =>{
        const userReview = {...loggedInUser,...review};
        fetch('https://dry-brook-25151.herokuapp.com/addReview',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(userReview)
        })
        .then( res => res.json())
        .then(data => {
            if(data){
                alert("Thanks For Your Valuable Review")
            }
        })
    }
    return (
        <section>
            <Navbar ></Navbar>
            <div className="row">
                <div className="col-sm-2 col-md-2">
                    <FcMenu size={"50px"} onClick={handleSidebar} style={toggleStyle} className="toggle"/>
                    <Sidebar sidebarOpen={sidebarOpen}></Sidebar>
                </div>
                <div className="col-sm-10 com-md-10 mt-5 p-5">
                    <h2>Add a Review</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group  mt-3">
                        <input type="text" {...register("name")} name="review" placeholder="Add Your Review" className="form-control" onBlur={handleBlur}/>
                        {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <input type="submit" className="btn btn-success mt-3 text-white"/>
                </form>
                </div>
            </div>
        </section>
    );
};

export default AddReview;