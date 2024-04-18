// Single selection
// Multiple selection

import { useState } from "react"

import {
   Wrapper,
   ButtonMultiSelect,
   DivAccordion,
   DivAccordionItem,
   DivAccordionItemTitle,
} from "./index.styles"

import { data } from "./data"

export function Accordion() {
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

      if (findIndexCurrentId === -1) copyMultipleSelected.push(getCurrentId)
      else copyMultipleSelected.splice(findIndexCurrentId, 1)

      setMultipleSelected(copyMultipleSelected)
   }

   return (
      <Wrapper>
         <ButtonMultiSelect onClick={() => setEnableMultiSelect((prev) => !prev)}>
            {!enableMultiSelect ? "Enabled" : "Disabled"} multi select
         </ButtonMultiSelect>

         <DivAccordion>
            {data.length > 0 &&
               data.map((dataItem) => {
                  const handleSelect = enableMultiSelect
                     ? () => handleMultipleSelect(dataItem.id)
                     : () => handleSingleSelect(dataItem.id)

                  const handleIconSelected =
                     selected === dataItem.id || multipleSelected.indexOf(dataItem.id) !== -1
                        ? "-"
                        : "+"

                  const handleContent = (dataItem) => {
                     return enableMultiSelect
                        ? multipleSelected.indexOf(dataItem.id) !== -1 && (
                             <div className="div-accordion-item__content">{dataItem.answer}</div>
                          )
                        : selected === dataItem.id && (
                             <div className="div-accordion-item__content">{dataItem.answer}</div>
                          )
                  }

                  return (
                     <DivAccordionItem key={dataItem.id}>
                        <DivAccordionItemTitle onClick={handleSelect}>
                           <h3 className="div-accordion-item-title__paragraph">
                              {dataItem.question}
                           </h3>
                           <span>{handleIconSelected}</span>
                        </DivAccordionItemTitle>

                        {handleContent(dataItem)}
                     </DivAccordionItem>
                  )
               })}

            {!data && data.length === 0 && <div>No data found!</div>}
         </DivAccordion>
      </Wrapper>
   )
}
