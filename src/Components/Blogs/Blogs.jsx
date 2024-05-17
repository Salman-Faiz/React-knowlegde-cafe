import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({handleBookmarks}) => {
    const [blogs, setBlogs] = useState([]);
   

    useEffect(() => {
        fetch('build.json')
            .then(res => res.json())
            // .then(data => console.log(data));
            .then(data => setBlogs(data));

    }, [])

    

    return (
        <div className=" w-2/3">
           {
            blogs.map((blog,idx) => <Blog blog={blog}
            key={idx}
            handleBookmarks={handleBookmarks}
            ></Blog>)
           }
        </div>
    );
};

export default Blogs;