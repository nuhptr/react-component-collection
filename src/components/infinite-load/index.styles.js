import styled from "styled-components"

export const LoadMoreContainer = styled.div`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   gap: 20px;

   & .product-container {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1rem;
   }

   & .product {
      padding: 20px;
      background-color: greenyellow;
      border-radius: 1.2rem;
      display: flex;
      flex-direction: column;

      & img {
         width: 200px;
         height: 200px;
      }
   }
`
