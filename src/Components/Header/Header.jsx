import profilePhoto from '../../../public/images/profiledemo.jpg'

function Header() {
    return (
        <div className='mx-32 mt-8'>
            <div className='flex justify-between '>
             <h3 className='text-4xl font-semibold'>Knowledge Cafe</h3>
            <img className='w-14 h-14 rounded-full' src={profilePhoto} alt="" />
        </div>
        <hr className='mt-4 mb-3 text-black'/>
        </div>
    );
}

export default Header;