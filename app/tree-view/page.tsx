import { MenuList } from "@/app/tree-view/menu-list"
import { menus } from "@/app/tree-view/data"

export default function TreeViewPage() {
   return (
      <div className="max-w-sm min-h-screen bg-green-500">
         <MenuList list={menus} />
      </div>
   )
}
