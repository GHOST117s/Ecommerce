import React from 'react'
import Link from 'next/link'


const register = () => {
  return (
    <div>
        <div className="flex justify-center items-center h-screen bg-gray-100">
                <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md mt-4">
                    <h2 className="text-center text-2xl font-bold mb-6">
                        REGISTRATION PAGE
                    </h2>
                    <form encType="multipart/form-data" >
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2" req>Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                
                                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                placeholder="Enter Name" 
                            />
                        </div>
                       
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                              
                                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                placeholder="Enter email" 
                                 />
                            
                        </div>
                      
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Password</label>
                            <input
                                type="password"
                               
                                name="password"
                                
                                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                placeholder="Enter password" 
                                />
                         
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
                            <input
                                type="password"
                               
                                name="password_confirmation"
                                
                                className="w-full px-3 py-2 border border-gray-400 rounded-lg shadow-sm focus:outline-none focus:border-blue-500"
                                placeholder="Enter password" 
                                />
                         
                        </div>
                      

                            <div className='flex justify-center'>

                        <button  type='submit'  className="group relative inline-block focus:outline-none focus:ring border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75 hover:bg-sky-200 ..." >   Sign Up  </button>
                            </div>
                    </form>
                    <div className="mt-3 text-center">
                        <Link className="text-blue-500 hover:underline" href="/login">Already Have an Account?Sign In</Link>
                    
                    </div>
                </div>
            </div>
      
    </div>
  )
}

export default register
