import styled from "styled-components";

export const PostItemStyles = styled.a`
  height: 180px;
  background: #FFFFFF;
  border-radius: 20px;
  padding: 40px;
  text-decoration: none;

  .postHeader {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .name {
    text-transform: capitalize;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 4px;
    color: #444;
  }

  .email {
    font-size: 12px;
    margin-bottom: 4px;
    color: #555;
    text-transform: lowercase;
  }

  h3 {
    margin-top: 0;
    margin-bottom: 12px;
    font-family: Futura, sans-serif;
    font-weight: 600;
    font-size: 20px;
    line-height: 26px;
    letter-spacing: 0.4px;
    display: flex;
    align-items: center;
    color: #383838;
  }
  
  p {
    margin: 0;
    font-size: 14px;
    line-height: 20px;
    display: flex;
    align-items: center;
    color: #383838;
  }
`;
