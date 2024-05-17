

const Bookmark = ({bookmark}) => {
    const {title}=bookmark;
    return (
        <div className="bg-slate-200 px-4 py-3 mx-4 rounded-md mb-6">
                <h3>{title}</h3>    
                
        </div>
    );
};

export default Bookmark;