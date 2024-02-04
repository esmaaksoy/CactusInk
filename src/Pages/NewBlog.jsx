import BlogForm from "../components/BlogForm";
import { Helmet } from 'react-helmet';
const NewBlog = () => {
  return (
    <>
    <Helmet>
        <title>New Blog | CactusInk Blog</title>
        <meta name="description" content="Your page description" />
      </Helmet>
      <div className="m-2 sm:mx-20 sm:my-10 bg-[#AED1B2] p-3 sm:p-10 min-h-screen">
        <BlogForm />
      </div>
    </>
  );
};
export default NewBlog;
