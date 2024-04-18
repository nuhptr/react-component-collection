import styled from "styled-components"

export const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.2rem;
   height: 100vh;
   width: 100vw;
   justify-content: center;
   align-items: center;
`

export const ButtonMultiSelect = styled.button`
   border: none;
   background-color: greenyellow;
   color: black;
   font-weight: 400;
   padding: 1rem;
   border-radius: 8px;
   cursor: pointer;
   text-transform: uppercase;

   &:hover {
      background-color: rgb(157, 235, 40);
   }
`

export const DivAccordion = styled.div`
   width: 500px;
`
export const DivAccordionItem = styled.div`
   background-color: greenyellow;
   margin-bottom: 10px;
   padding: 2rem 2rem;

   & .div-accordion-item__content {
      color: black;
      height: auto;
      text-align: left;
      line-height: 1.5;
      margin-top: 8px;
      letter-spacing: -0.1px;
   }
`

export const DivAccordionItemTitle = styled.div`
   color: black;
   display: flex;
   justify-content: space-between;
   align-items: center;
   cursor: pointer;

   & .div-accordion-item-title__paragraph {
      font-weight: 400;
      font-size: 20px;
      letter-spacing: -0.5px;
   }
`
