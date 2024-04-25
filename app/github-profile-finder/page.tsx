"use client"

import { useState, useEffect, FormEvent, useCallback } from "react"

import { User } from "@/app/github-profile-finder/user"

export default function GithubProfileFinderPage() {
   const [username, setUsername] = useState("nuhptr")
   const [user, setUser] = useState(null)
   const [loading, setLoading] = useState(false)

   const fetchUser = useCallback(async () => {
      setLoading(true)
      const response = await fetch(`https://api.github.com/users/${username}`)

      if (response.ok) {
         const data = await response.json()
         setUser(data)
         setUsername("")
      }

      setLoading(false)
   }, [username])

   const handleSubmit = () => {
      fetchUser()
   }

   if (loading)
      return <h1 className="flex items-center justify-center mt-10">Loading data! Please wait</h1>

   return (
      <div className="container p-5 mx-auto rounded-md">
         <div className="flex justify-center gap-5 mb-5">
            <input
               className="p-3 text-base border rounded-md"
               type="text"
               name="searchUsername"
               placeholder="Search..."
               value={username}
               onChange={(e) => setUsername(e.target.value)}
            />
            <button
               className="px-3 py-1 border-none rounded-[8px] bg-green-500 text-white cursor-pointer"
               onClick={handleSubmit}>
               Search
            </button>
         </div>
         {user && <User user={user} />}
      </div>
   )
}
