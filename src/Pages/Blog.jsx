import React from 'react'
import PostWrapper from "../Components/Post/PostWrapper";
import { Helmet } from 'react-helmet-async';
export default function Blog() {
    
const postData = [
    {
      img: "images/blog1.jpg",
      title: "Creating a Safe and Healthy Environment: The Benefits of Installing an Air Purifier in Dental Clinics",
      date: "April 26, 2023",
      author: "Dr Bhojani",
      authorLink: "",
      subTitle:
        "Installing an air purifier like Mars Purifier in a dental clinic improves air quality, enhances staf...",
      postLink: "/post/post_details",
    },
    
  ];
  
  return (
    <>
    <Helmet>
      <title>Read Our Expert Tips, Guides & Dental Blogs</title>
      <meta name="description" content="Explore expert dental tips, guides, and blogs created to help you maintain a healthy and confident smile. Read our latest articles now." />
    </Helmet>
    <div className="st-height-b125 st-height-lg-b80" id="home"></div>

    <PostWrapper data={postData} />
    <div className="st-height-b125 st-height-lg-b80" id="home"></div>
    </>
  )
}
