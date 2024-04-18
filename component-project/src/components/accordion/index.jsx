// Single selection
// Multiple selection

import { useState } from "react"

import "./styles.css"
import { data } from "./data"

export default function Accordion() {
   const [selected, setSelected] = useState(null)
   const [multipleSelected, setMultipleSelected] = useState([])

   const [enableMultiSelect, setEnableMultiSelect] = useState(false)

   const handleSingleSelect = (getCurrentId) => {
      const selectedId = selected === getCurrentId ? null : getCurrentId

      setSelected(selectedId)
   }

   const handleMultipleSelect = (getCurrentId) => {
      let copyMultipleSelected = [...multipleSelected]
      const findIndexCurrentId = copyMultipleSelected.indexOf(getCurrentId)

      if (findIndexCurrentId === -1) {
         copyMultipleSelected.push(getCurrentId)
      } else {
         copyMultipleSelected.splice(findIndexCurrentId, 1)
      }

      setMultipleSelected(copyMultipleSelected)
   }

   return (
      <div className="wrapper">
         <button className="btn-multiselect" onClick={() => setEnableMultiSelect((prev) => !prev)}>
            {!enableMultiSelect ? "Enabled" : "Disabled"} multi select
         </button>

         <div className="accordion">
            {data.length > 0 &&
               data.map((dataItem) => (
                  <div className="accordion-item" key={dataItem.id}>
                     <div
                        onClick={
                           enableMultiSelect
                              ? () => handleMultipleSelect(dataItem.id)
                              : () => handleSingleSelect(dataItem.id)
                        }
                        className="accordion-title">
                        <h3 className="accordion-title__question">{dataItem.question}</h3>
                        <span>
                           {selected === dataItem.id || multipleSelected.indexOf(dataItem.id) !== -1
                              ? "-"
                              : "+"}
                        </span>
                     </div>
                     {enableMultiSelect
                        ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                             <div className="accordion-content">{dataItem.answer}</div>
                          )
                        : selected === dataItem.id && (
                             <div className="accordion-content">{dataItem.answer}</div>
                          )}
                  </div>
               ))}

            {!data && data.length === 0 && <div>No data found!</div>}
         </div>
      </div>
   )
}
