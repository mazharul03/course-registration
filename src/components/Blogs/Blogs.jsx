import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [courseName, setCourseName] = useState([]);
    const [totalCredits, setTotalCredits] = useState(0);
    const maxCredits = 20;

    const showToast = (message) => {
        alert(message); // Replace this with a custom toast if needed
    };

    const handleAddToCourseName = (course) => {
        // Check if the course is already selected
        if (courseName.some(c => c.id === course.id)) {
            showToast('This course is already selected!');
            return;
        }

        // Calculate new total credits if the course is added
        const newTotalCredits = totalCredits + course.credit;
        if (newTotalCredits > maxCredits) {
            showToast('Total credits cannot exceed 20!');
            return;
        }

        const newCourseList = [...courseName, course];

        setCourseName(newCourseList);
        setTotalCredits(newTotalCredits);

        const remainingCredits = maxCredits - newTotalCredits;
        if (remainingCredits < 0) {
            showToast('Credit Hour Remaining cannot be less than 0!');
        }
    };

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, []);

    return (
        <div className="flex w-full max-w-7xl mx-auto">
            <div className="flex flex-wrap md:w-4/5">
                {blogs.map(blog => (
                    <Blog
                        key={blog.id}
                        handleAddToCourseName={handleAddToCourseName}
                        blog={blog}
                    />
                ))}
            </div>
            <div className="md:w-1/5 mt-2">
                <div className="bg-slate-100 rounded-xl p-4">
                    <h3 className="font-bold text-base text-blue-500 border-b-2 pb-2">Credit Hour Remaining {maxCredits - totalCredits} hr</h3>
                    <h2 className="font-bold text-2xl">Course Name</h2>
                    <ol className="list-decimal pl-3 ">
                        {courseName.map(item => (
                            <li className="pb-2" key={item.id}>
                                {item.course_name}
                            </li>
                        ))}
                    </ol>

                    <h3 className="border-t-2 pt-2">Total Credits: {totalCredits}</h3>

                </div>
            </div>
        </div>
    );
};

export default Blogs;