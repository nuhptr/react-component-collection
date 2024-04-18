// Single selection
// Multiple selection

import { useState } from "react"

import { data } from "./data"

export default function Accordion() {
   const [selected, setSelected] = useState()

   const handleSingleSelect = (getCurrentId) => {}

   return (
      <div className="wrapper">
         <div className="accordion">
            {data &&
               data.length > 0 &&
               data.map((dataItem) => (
                  <div className="item" key={dataItem.id}>
                     <div onClick={() => handleSingleSelect(dataItem.id)} className="title">
                        <h3>{dataItem.question}</h3>
                        <span>+</span>
                     </div>
                  </div>
               ))}

            {!data && data.length === 0 && <div>No data found!</div>}
         </div>
      </div>
   )
}
