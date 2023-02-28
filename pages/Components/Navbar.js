import Link from 'next/link'
import React from 'react'
import { useEffect,useState } from 'react'
import { useRouter } from 'next/router';




const navbar = () => {

  const [user, setUser] = useState(null);
  const router = useRouter();
  
  useEffect(() => {
    const userFromLocalStorage = localStorage.getItem("user");
    if (userFromLocalStorage) {
      setUser(userFromLocalStorage);
    }
  }, []);

  function handleLogout() {
    // Remove the user from local storage
    localStorage.removeItem("user");

    router.push('/login');


    // Update the state to reflect that the user is no longer logged in
    setUser(null);
  }

  return (
    <div>
        <header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href='/categories' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-red-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl">Ecommerce</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/userDetails" className="mr-5 hover:text-gray-900">Dashboard</Link>
     
    </nav>
    <div className="sm:flex ml-auto  sm:gap-2">

    {user ? (
            <button
              className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
                Login
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>
          )}



 

</div>
  
  </div>
</header>
      
    </div>
  )
}

export default navbar
