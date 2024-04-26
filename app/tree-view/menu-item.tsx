"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"

import { MenuList } from "@/app/tree-view/menu-list"

export function MenuItem({ item }: { item: any }) {
   const [displayCurrentChildren, setDisplayCurrentChildren] = useState<{ [key: string]: boolean }>(
      {}
   )

   const handleToggleChildren = (getCurrentLabel: string) => {
      setDisplayCurrentChildren({
         ...displayCurrentChildren,
         [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
      })
   }

   console.log(displayCurrentChildren)

   return (
      <li>
         <div className="flex items-center gap-5 text-white cursor-pointer">
            <p>{item.label}</p>
            {item && item.children && item.children.length && (
               <span onClick={() => handleToggleChildren(item.label)}>
                  {displayCurrentChildren[item.label] && <Minus color="#fff" size={24} />}
                  {!displayCurrentChildren[item.label] && <Plus color="#fff" size={24} />}
               </span>
            )}
         </div>

         {item &&
            item.children &&
            item.children.length > 0 &&
            displayCurrentChildren[item.label] && <MenuList list={item.children} />}
      </li>
   )
}
