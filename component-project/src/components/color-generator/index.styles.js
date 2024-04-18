import styled from "styled-components"

export const SectionStyled = styled.section`
   width: 100vw;
   height: 100vh;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   gap: 2rem;
   background-color: ${(props) => props.color};
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
   color: #fff;
   border-radius: 12px;
   background: rgba(255, 255, 255, 0.2);
   backdrop-filter: blur(5px);
   -webkit-backdrop-filter: blur(5px);
   border: 1px solid rgba(255, 255, 255, 0.3);
   cursor: pointer;

   &:hover {
      background: rgba(255, 255, 255, 0.4);
      color: #000;
   }
`

export const ParagraphStyled = styled.p`
   font-size: 3rem;
   color: #fff;
   letter-spacing: -0.4px;
   font-weight: 400;
`
export const HeadingStyled = styled.h1`
   font-size: 6rem;
   color: #fff;
   letter-spacing: -0.5px;
   font-weight: 700;
`
