import PropTypes from 'prop-types';
import { IoBookOutline } from "react-icons/io5";


const Blog = ({ blog, handleAddToCourseName }) => {

    const { image, course_name, details, price, credit } = blog;
    return (
        <div className='w-80 bg-slate-100 m-2 pb-3 mb-4 pl-6 rounded-xl'>
            <img className=' h-36 w-64 mb-2 mt-5 rounded-lg' src={image} alt={`image of the course ${blog}`} />
            <h2 className='text-xl font-bold mb-2'>{course_name}</h2>
            <p className='mb-2 text-sm pr-2'>{details}</p>
            <div className='flex items-center mb-2'>
                <p> $ Price : {price}</p>
                <span className='ml-24'><IoBookOutline /></span>
                <p className='ml-1'>Credit : {credit}hr</p>
            </div>

            <button onClick={() => handleAddToCourseName(blog)} className='bg-blue-500 px-24 py-1 text-xl mb-2 rounded-md text-white'>Select</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToCourseName: PropTypes.func
}

export default Blog;