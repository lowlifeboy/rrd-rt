import styled from "styled-components";

export const CommentStyles = styled.div`
  position: relative;
  margin-bottom: 20px;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 0 16px 16px 16px;
  
  .isNewStatus {
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-bottom-right-radius: 16px;
    background-color: #5E71DD;
  }
  
  .trash {
    position: absolute;
    top: 16px;
    right: 16px;
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    
    svg {
      filter: invert(100%) sepia(2%) saturate(1094%) hue-rotate(200deg) brightness(106%) contrast(73%);
      
      &:hover {
        filter: invert(62%) sepia(18%) saturate(674%) hue-rotate(295deg) brightness(107%) contrast(84%);
      }
    }
  }

  .commentHeader {
    display: flex;
    flex-direction: column;
    margin-bottom: 4px;
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

  .commentBody {
    font-size: 14px;
    color: #222;
  }
`;
