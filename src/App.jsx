import './App.css'
import Blogs from './components/Blogs/Blogs'
import Courses from './components/Courses/Courses'

function App() {


  return (
    <>
      <h1 className='text-4xl font-bold text-center my-6'>Course Registration</h1>
      <div className='md:flex'>
        <Blogs></Blogs>
        <Courses></Courses>

      </div>


    </>
  )
}

export default App
