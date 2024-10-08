import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header(){
  const {user} = useContext(UserContext);
  return (
      
        <header className="flex  justify-between">
          <Link to={'/'} className="flex item-center gap-1 ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
<path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
</svg>

<span className="font-bold text-xl">BuyNRent</span>
          </Link>
          <div className='flex gap-2 border border-gray-400 rounded-full px-4 py-2 shadow-md shadow-gray-300'>
            <div className='flex'>Anywhere</div>
            <div className="flex border-l border-grey-300 "></div>
            <div className='flex'>Any week</div>
            <div className="flex border border-l-grey-300"></div>
            <div className='flex'>Add guest</div>
            <button className='p-2 bg-primary rounded-full text-white'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
<path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>

            </button>
          </div>
          {/* <div className='flex'>
            <div className='py-2'>Airbnb your Home</div>
            <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>

              </div> 
          </div> */}
          <Link to={user?'/account':'/login'} className="flex gap-2 border border-gray-400 rounded-full px-4 py-2 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
<path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

            <div className='p-2 bg-gray-500 text-white rounded-full border border-gray-500'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4  overflow-hidden">
<path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
</svg>



            </div>
            {!!user && (
           <div>
            {user.name}
           </div> 
          )}
          </Link>
        </header>
    );
}
