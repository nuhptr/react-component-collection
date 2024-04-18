// Single selection
// Multiple selection

import { useState } from "react"

import {
   Wrapper,
   ButtonMultiSelect,
   DivAccordion,
   DivAccordionContent,
   DivAccordionItem,
   DivAccordionItemTitle,
   HeadingTitleQuestion,
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
                             <DivAccordionContent>{dataItem.answer}</DivAccordionContent>
                          )
                        : selected === dataItem.id && (
                             <DivAccordionContent>{dataItem.answer}</DivAccordionContent>
                          )
                  }

                  return (
                     <DivAccordionItem key={dataItem.id}>
                        <DivAccordionItemTitle onClick={handleSelect}>
                           <HeadingTitleQuestion>{dataItem.question}</HeadingTitleQuestion>
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
