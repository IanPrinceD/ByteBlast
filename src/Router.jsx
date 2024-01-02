
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import {
  AboutScreen,
  ContactScreen,
  HomeScreen,
  LogInScreen,
  SignUpScreen,
} from './Screens';
import App from './App';

const Router = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
        <Route index="*" element={<HomeScreen />}></Route>
        <Route path="about" element={<AboutScreen />}></Route>
        <Route path="contact" element={<ContactScreen />}></Route>
        <Route path="login" element={<LogInScreen />}></Route>
        <Route path="signup" element={<SignUpScreen />}></Route>
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Router;
