# 3 Project Features of the Course Selection App:

- Course Selection with Credit Validation:
The app allows users to select courses while ensuring that the same course cannot be selected twice. When a user attempts to add a duplicate course, a toast notification alerts them that the course is already selected. This enhances the user experience by preventing redundant course selections.

- Total Credit and Remaining Credit Hours Display:
A dynamic feature that tracks the total credit hours of selected courses. If adding a course exceeds the maximum allowable credits (20 hours), a toast notification alerts the user. Additionally, it calculates and displays the remaining credit hours after each course selection, ensuring that the user can track their available credits in real-time.

- Sorted Course List:
After a course is added, the app sorts the selected courses in alphabetical order by course name. This provides a clear and organized view of the selected courses. Sorted lists make it easier for users to view and manage their selections, improving the app's usability.


# State Management in the Project:
# This project uses React’s built-in useState hook to manage the application’s state. Let's break it down:

# blogs State:

# Purpose: Holds the list of all blogs (courses) fetched from the blogs.json file.
Initialization: The state is initialized as an empty array (const [blogs, setBlogs] = useState([]);).
Data Fetching: The blog data is fetched inside a useEffect hook, and the setBlogs function updates the blogs state once the data is loaded from the API.

#  courseName State:

#   Purpose: Stores the list of courses selected by the user.
# Initialization: It is initialized as an empty array (const [courseName, setCourseName] = useState([]);).
# Updating the State: When the user adds a new course, the app checks if the course has already been selected. If not, the course is added to the courseName state, and the list is sorted alphabetically.

#  totalCredits State:

#   Purpose: Tracks the total number of credit hours the user has accumulated by selecting courses.
# Initialization: It is initialized to 0 (const [totalCredits, setTotalCredits] = useState(0);).
# Updating the State: Every time a course is selected, its credits are added to the totalCredits state. If adding the course exceeds the maximum allowed credits (20), the app prevents the course from being added.
