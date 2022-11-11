import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../../components/Shared/NavBar/NavBar";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const EditReview = () => {
    const [reviewData, setReviewData] = useState([]);
    const [reviews, setReviews] = useState({});
    const [image, setImage] = useState(null);
    const {user} = useContext(AuthContext);

    console.log(reviewData,'reviewData')
    const params = useParams();
    console.log(params,'params edit review')

    useEffect(() => {
        const fetchdata = async () => {
            const res = await fetch(`https://cleaning-service-server.onrender.com/review/${params.id}`);
            const newData = await res.json();

            setReviewData(newData);
        };

        fetchdata();
    }, [params.id]);

    const handleBlur = (e) => {
        const newReview = { ...reviews };
        newReview[e.target.name] = e.target.value;
        setReviews(newReview);
    };

    const handleImage = (e) => {
        const newImage = e.target.files[0];
        setImage(newImage);
    };

    const handleUpdate = (e) => {
        e.preventDefault();
        console.log(params,'review')
        const formData = new FormData();
        formData.append("image", user?.photoURL);
        formData.append("name", reviews.name);
        formData.append("review", reviews.review);
        

        // const requestOptions = {
        //     method: 'PUT',
        //     body: formData
        // };
        // fetch('https://reqres.in/api/articles/1', requestOptions)
        //     .then(response => response.json())
        //     .then(data => element.innerHTML = data.updatedAt );

        fetch(`https://cleaning-service-server.onrender.com/update/review/${params.id}`, {
            method: "POST",
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    console.log(data);
                    alert("Review updated successfully");
                    e.target.reset();
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <Navbar></Navbar>
            <h1 className="text-center text-primary mb-5 fw-bolder">Service</h1>
            <div className="col-md-6 mx-auto">
                <h1 className="text-center">Edit Review </h1>
                <form onSubmit={handleUpdate}>
                    <input
                        onBlur={handleBlur}
                        className="form-control "
                        name="name"
                        placeholder="Name"
                        value={reviewData.name}
                    />
                    <br />
                    <input
                        onBlur={handleBlur}
                        className="form-control"
                        name="review"
                        placeholder="review"
                        value={reviewData.review}
                    />{" "}
                    <br />
                    {/*<input*/}
                    {/*    onChange={handleImage}*/}
                    {/*    name="exampleRequired"*/}
                    {/*    className="form-control"*/}
                    {/*    type="file"*/}
                    {/*/>*/}
                    {/*<br />*/}
                    <input type="submit" value="Update Review" />
                </form>
            </div>
        </div>
    );
};

export default EditReview;
