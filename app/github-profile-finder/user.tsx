interface IUser {
   user: {
      avatar_url: string
      followers: number
      following: number
      public_repos: number
      name: string
      login: string
      created_at: Date
   }
}

export function User({ user }: IUser) {
   const createdAt = new Date(user.created_at)
   const formattedDate = `${createdAt.getDate()} ${createdAt.toLocaleString("en-us", {
      month: "short",
   })} ${createdAt.getFullYear()}`

   return (
      <div className="flex flex-col max-w-md px-5 py-8 mx-auto mt-10 border rounded-xl">
         <div>
            <img
               src={user.avatar_url}
               className="h-[150px] aspect-square rounded-full mx-auto"
               alt="User"
            />
         </div>

         <div className="flex flex-col items-center gap-1 mt-5 tracking-tight">
            <a
               className="text-lg font-bold text-green-500"
               href={`https://github.com/${user.login}`}>
               {user.name || user.login}
            </a>
            <p className="m-0 text-gray-400">User joined on {formattedDate}</p>
         </div>

         <div className="flex items-start justify-center mt-5 tracking-tight gap-x-6">
            <div className="flex justify-center gap-2 text-lg font-medium">
               <p>Public Repos</p>
               <p className="text-green-500">{user.public_repos}</p>
            </div>
            <div className="flex justify-center gap-2 text-lg font-medium">
               <p>Followers</p>
               <p className="text-indigo-500">{user.followers}</p>
            </div>
            <div className="flex justify-center gap-2 text-lg font-medium">
               <p>Following</p>
               <p className="text-fuchsia-500">{user.following}</p>
            </div>
         </div>
      </div>
   )
}
