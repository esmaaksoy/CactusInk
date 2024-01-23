import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import NotFound from "../Pages/NotFound";
import ScrollToTop from "../Pages/ScroolToTop";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Detail from "../Pages/Detail";
import Dashboard from "../Pages/Dashboard";
import PrivateRouter from "./PrivateRouter";
import NewBlog from "../Pages/NewBlog";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />{" "}
          <Route path="detail/:id" element={<Detail />} />
          <Route path="" element={<PrivateRouter />}>
            <Route path="new-blog" element={<NewBlog />} />
          </Route>
        </Route>

        <Route path="/auth" element={<Login />} />
      </Routes>
    </>
  );
};

export default AppRouter;
