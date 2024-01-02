import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Contact from '../pages/Contact';
import About from '../pages/About';
import News from '../pages/News';
import Project from '../pages/Project';
import { People } from '@mui/icons-material';

const router = createBrowserRouter([
    { path: '/', element: <HomePage /> },
    { path: '/contact', element: <Contact /> },
    { path: '/about', element: <About /> },
    { path: '/news', element: <News /> },
    { path: '/projects', element: <Project /> },
    { path: '/people', element: <People /> }
]);

export default router;