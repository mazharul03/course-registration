import PropTypes from 'prop-types';


const Blog = ({ blog }) => {

    const { image, course_name, details, price, credit } = blog;
    return (
        <div className='w-80 bg-slate-50 m-2 mb-4 pl-6 rounded-xl'>
            <img className=' h-36 w-64 mb-2 mt-5 rounded-lg' src={image} alt={`image of the course ${blog}`} />
            <h2 className='text-xl font-bold mb-2'>{course_name}</h2>
            <p className='mb-2 text-sm'>{details}</p>
            <div className='flex justify-between pr-6 mb-2'>
                <p> $ Price : {price}</p>
                <p>  credit : {credit}hr</p>
            </div>
            <button className='bg-blue-500 px-24 py-1 text-xl mb-2 rounded-md text-white'>Select</button>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;