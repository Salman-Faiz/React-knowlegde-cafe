import { BsFillBookmarksFill } from "react-icons/bs";

const Blog = ({ blog }) => {
    const { id, cover_img, author_name, title, author_img, reading_time, hashtags, date } = blog;
    return (
        <div className="">
                <div >
                    <img className="max-w-6xl w-full rounded-xl" src={cover_img} alt="" />
                    <div className="flex justify-between mt-6">
                        <div className="flex space-x-4">
                            <img src={author_img} alt="" />
                            <div>
                                <h4 className="mt-5 font-semibold text-2xl">{author_name}</h4>
                                <p>posted date: {date}</p>
                            </div>
                        </div>

                        <div className="flex mr-11">
                            <p className="mt-6 mr-8">Reading Time : {reading_time}</p>
                            <button className="mb-6 text-3xl"><BsFillBookmarksFill></BsFillBookmarksFill></button>
                        </div>
                    </div>
                    <h1 className="text-6xl pt-8">{title}</h1>
                    <p className="pt-10 pb-5">{
                        hashtags.map(hash => <span><a href="" /> #{hash}</span>)
                    }</p>
                    <button className="bg-blue-600 rounded-md px-4 py-3 underline text-xl">Mark as read</button>
                    <hr className="font-bold my-8" />
                </div>

        </div>
    );
};

export default Blog;