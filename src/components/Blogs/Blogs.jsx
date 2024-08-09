import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (

        <div className="flex w-full max-w-7xl mx-auto">

            <div className="flex flex-wrap md:w-4/5">

                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}>
                    </Blog>)
                }
            </div>

            <div className="md:w-1/5">
                <div>
                    <h2>Courses Name</h2>
                </div>
            </div>
        </div>
    );
};

export default Blogs;