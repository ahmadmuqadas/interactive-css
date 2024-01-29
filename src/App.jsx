import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Quiz from './Quiz';
import QuizNavbar from './QuizNavbar';



const routes = createBrowserRouter(createRoutesFromElements(
  <>
  <Route  path='/' element={<QuizNavbar/>}>
  <Route path='/' element={<Quiz/>}/>
  </Route>
  </>
))

function App() {
  return (
  <>
<RouterProvider router={routes}/>
  </>
  );
}

export default App;
