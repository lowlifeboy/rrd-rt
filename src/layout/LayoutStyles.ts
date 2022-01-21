import styled from "styled-components";

export const LayoutStyles = styled.div`
  min-height: 100vh;
  background-color: rgba(93, 113, 221, 0.05);
  display: flex;
  flex-direction: column;
  
  header {
    height: 70px;
    background-color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    
    a {
      svg {
        margin-top: 8px;
      }
    }
  }
  
  .banner {
    width: 100%;
    height: 300px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .childrenWrapper {
    flex-grow: 1;
  }

  footer {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(93, 113, 221, 0.05);
    font-family: "Futura", sans-serif;
    color: rgba(47, 34, 34, 0.4);
  }
`;
