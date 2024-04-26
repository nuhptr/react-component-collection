import { MenuItem } from "./menu-item"

export function MenuList({ list }: { list: Array<any> }) {
   return (
      <ul className="mt-0 mb-0 list-none">
         {list && list.length && list.map((item, index) => <MenuItem key={index} item={item} />)}
         {!list.length && (
            <div className="flex items-center justify-center mt-10">No data found</div>
         )}
      </ul>
   )
}
