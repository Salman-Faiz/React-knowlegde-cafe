import { BsFillBookmarksFill } from "react-icons/bs";

const Blog = ({ blog }) => {
    return (
        <div className="">
            <div className="flex justify-between gap-16">
                <div className="w-2/3 mt-8">
                    <img className="max-w-5xl w-full rounded-xl" src={blog.cover_img} alt="" />
                    <div className="flex justify-between mt-6">
                        <div className="flex space-x-4">
                            <img src={blog.author_img} alt="" />
                            <div>
                                <h4 className="mt-5 font-semibold">{blog.author_name}</h4>
                                <p>posted date: {blog.date}</p>
                            </div>
                        </div>

                        <div className="flex pr-11">
                            <p className="mt-6 mr-8">Reading Time : {blog.reading_time}</p>
                            <button className="mb-6"><BsFillBookmarksFill></BsFillBookmarksFill></button>
                        </div>
                    </div>
                    <h1 className="text-6xl">{blog.title}</h1>
                </div>


                <div className="w-1/3">bookmarks
                </div>
            </div>
        </div>
    );
};

export default Blog;