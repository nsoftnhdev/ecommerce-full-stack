import React from 'react'

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">Subscribe now & get 20% off</p>
      <p className="text-gray-400 mt-3">
        we used to lay them out and rool our bodies up into them and act like the blankets were our prom dresses
      </p>
      <form onSubmit={onSubmitHandler} className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
        <input 
          type="email" 
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none" 
          required
        />
        <button 
          type="submit"
          className="bg-black text-white text-xs px-10 py-4"
        >
            SUBSCRIBE
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
