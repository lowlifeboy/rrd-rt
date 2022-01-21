import styled from "styled-components";

export const PostsStyles = styled.div`
  .banner {
    width: 100%;
    height: 300px;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  
  .posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 40px;
    }
  }
  
  .loader,
  .filterContainer,
  .paginationContainer {
    display: flex;
    justify-content: center;
  }
  
  .loader {
    margin-top: 40px;
    display: grid;
    place-items: center;
  }
  
  .filter {
    width: 100%;
    max-width: 1100px;
    display: flex;
    align-items: center;
    padding: 16px 40px;
    margin: 40px 0;
    background: #FFFFFF;
    border-radius: 20px;
    
    & > span {
      margin-right: 24px;
      font-size: 14px;
      color: #555;
    }
    
    .authorsList {
      width: 240px;
      position: relative;
      display: flex;
      flex-direction: column;
      font-size: 14px;

      button {
        height: 28px;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        font-weight: 600;
        color: #333;
      }
      
      .selectedFilter {
        color: #5E71DD;
      }

      .buttonsList {
        width: 100%;
        padding: 16px;
        position: absolute;
        top: -16px;
        left: -16px;
        display: flex;
        flex-direction: column;
        background-color: #fff;
        border-radius: 16px;
        box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.05);
        
        button:last-child {
          border-bottom: none;
        }
      }
    }
  }
  
  .pagination {
    margin: 40px 0;
    width: 100%;
    max-width: 1100px;
    display: flex;
    justify-content: center;
    justify-self: center;
    gap: 8px;
    
    .dots {
      display: flex;
      align-items: center;
      
      .dot {
        margin: 0 2px;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: #5E71DD;
      }
    }

    button {
      background: #fff;
      border-radius: 10px;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 0;
      width: 40px;
      height: 50px;
      box-sizing: border-box;

      font-size: 20px;
      line-height: 30px;
      color: #626262;

      &.active {
        border: 1px solid #5E71DD;
        color: #5E71DD;
      }
    }
  }
`;
