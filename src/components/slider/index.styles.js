import styled from "styled-components"

export const Container = styled.div`
   position: relative;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1rem;
   width: 100vw;
   height: 100vh;

   & .arrow {
      position: absolute;
      width: 2rem;
      height: 2rem;
      color: greenyellow;
      filter: drop-shadow(0px 0px 5px #555);
      cursor: pointer;

      &-left {
         left: 24rem;
      }

      &-right {
         right: 24rem;
      }
   }

   & .current-image {
      border-radius: 0.5rem;
      box-shadow: 0px 0px 7px #666;
      width: 50%;
      height: 50%;
   }

   & .circle-indicators {
      display: flex;
      position: absolute;
      bottom: 15rem;

      & .current-indicator {
         background-color: greenyellow;
         opacity: 0.5;
         height: 12px;
         width: 12px;
         border-radius: 50%;
         border: none;
         outline: none;
         margin: 0 0.3rem;
         cursor: pointer;

         &.inactive-indicator {
            background-color: white;
         }
      }
   }

   & .hide-current-image {
      display: none;
   }
`
