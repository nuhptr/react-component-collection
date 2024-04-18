import styled from "styled-components"

export const Container = styled.div`
   height: 100vh;
   width: 100vw;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
   background-color: #fff;
`
export const ContainerContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   color: #fff;
   font-size: 60px;
`
export const ContainerButton = styled.div`
   display: flex;
   justify-content: center;
   gap: 1rem;

   @media (max-width: 768px) {
      flex-direction: column;
   }
`
export const ButtonStyled = styled.button`
   padding: 1rem;
   font-size: 1rem;
   letter-spacing: -0.2px;
   color: #000;
   border-radius: 12px;
   background: rgba(173, 255, 47, 0.5);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   border: 1px solid rgba(173, 255, 47, 0.8);
   cursor: pointer;

   &:hover {
      background: rgba(173, 255, 47);
   }
`

export const ParagraphStyled = styled.p`
   font-size: 3rem;
   color: #000;
   letter-spacing: -0.4px;
   font-weight: 400;
`
export const HeadingStyled = styled.h1`
   font-size: 6rem;
   color: ${(props) => props.color};
   letter-spacing: -0.5px;
   font-weight: 700;
`
