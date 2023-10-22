import { createSlice } from '@reduxjs/toolkit';

// authSlice
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
  },
  reducers: {
    setLogin: (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
      },
      setLogout: (state) => {
        state.user = null;
        state.token = null;
      },
  },
});

export const { login, logout } = authSlice.actions;

// courseSlice
const courseSlice = createSlice({
  name: 'course',
  initialState: {
    courses: [],
    enrolledCourses: [],
  },
  reducers: {
    setCourses(state, action) {
      // Set the list of courses
      state.courses = action.payload;
    },
    enrollCourse(state, action) {
      // Enroll in a course
      const { courseId } = action.payload;
      const course = state.courses.find((c) => c.id === courseId);
      if (course) {
        state.enrolledCourses.push(course);
      }
    },
  },
});

export const { setCourses, enrollCourse } = courseSlice.actions;

// userSlice
const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: null,
    enrolledStudents: [],
  },
  reducers: {
    setUserDetails(state, action) {
      // Set user details
      state.userDetails = action.payload;
    },
    setEnrolledStudents(state, action) {
      // Set the enrolled students for a teacher
      state.enrolledStudents = action.payload;
    },
  },
});

    //blogsSlice
export const { setUserDetails, setEnrolledStudents } = userSlice.actions;
const blogSlice = createSlice({
  name: 'blog',
  initialState: {
    blogs: [],
  },
  reducers: {
    setBlogs(state, action) {
      // Set the list of blogs
      state.blogs = action.payload;
    },
    addBlog(state, action) {
      // Add a new blog
      const newBlog = action.payload;
      state.blogs.push(newBlog);
    },
    removeBlog(state, action) {
      // Remove a blog
      const blogId = action.payload;
      state.blogs = state.blogs.filter((blog) => blog.id !== blogId);
    },
  },
});

export const { setBlogs, addBlog, removeBlog } = blogSlice.actions;

// dashboardSlice
const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    enrolledClasses: [],
    availableClasses: [],
    zoomMeetingLinks: {},
  },
  reducers: {
    setEnrolledClasses(state, action) {
      // Set the enrolled classes for a user
      state.enrolledClasses = action.payload;
    },
    setAvailableClasses(state, action) {
      // Set the available classes
      state.availableClasses = action.payload;
    },
    setZoomMeetingLink(state, action) {
      // Set the zoom meeting link for a class
      const { classId, zoomLink } = action.payload;
      state.zoomMeetingLinks[classId] = zoomLink;
    },
  },
});

export const { setEnrolledClasses, setAvailableClasses, setZoomMeetingLink } = dashboardSlice.actions;

// adminSlice
const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    totalStudents: 0,
    totalTeachers: 0,
    totalClasses: 0,
    teacherRequests: [],
  },
  reducers: {
    setTotalStudents(state, action) {
      // Set the total number of students
      state.totalStudents = action.payload;
    },
    setTotalTeachers(state, action) {
      // Set the total number of teachers
      state.totalTeachers = action.payload;
    },
    setTotalClasses(state, action) {
      // Set the total number of classes
      state.totalClasses = action.payload;
    },
    setTeacherRequests(state, action) {
      // Set the teacher requests
      state.teacherRequests = action.payload;
    },
    acceptTeacherRequest(state, action) {
      // Accept a teacher request
      const { requestId } = action.payload;
      const requestIndex = state.teacherRequests.findIndex((req) => req.id === requestId);
      if (requestIndex !== -1) {
        state.teacherRequests[requestIndex].status = 'accepted';
      }
    },
    rejectTeacherRequest(state, action) {
      // Reject a teacher request
      const { requestId } = action.payload;
      const requestIndex = state.teacherRequests.findIndex((req) => req.id === requestId);
      if (requestIndex !== -1) {
        state.teacherRequests[requestIndex].status = 'rejected';
      }
    },
  },
});

export const {
  setTotalStudents,
  setTotalTeachers,
  setTotalClasses,
  setTeacherRequests,
  acceptTeacherRequest,
  rejectTeacherRequest,
} = adminSlice.actions;

// Combine all the reducers
const rootReducer = {
  auth: authSlice.reducer,
  course: courseSlice.reducer,
  user: userSlice.reducer,
  dashboard: dashboardSlice.reducer,
  admin: adminSlice.reducer,
};

export default rootReducer;
