import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {
    // console.log(bookmarks);
    return (
        <div className="w-1/3 ">
            <h4 className="ps-4 py-4 text-3xl bg-slate-300 border-2 border-purple-400 text-purple-500 rounded-lg">Spent time on reading:</h4>
            <div className="bg-gray-400 mt-8 pb-8 pt-5 font-semibold rounded-xl ">
                <h3 className="text-3xl mb-4 ps-4">BookMarks {bookmarks.length}</h3>
             {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
             }
            </div>
        </div>
    );
};
Bookmarks.propTypes={
    newBookmarks:PropTypes.array
}

export default Bookmarks;