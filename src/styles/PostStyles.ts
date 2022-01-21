import styled from "styled-components";

export const PostStyles = styled.div`
  .loader {
    display: flex;
    justify-content: center;
  }

  .loader {
    margin-top: 40px;
    display: grid;
    place-items: center;
  }
  
  .post {
    margin-top: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: center;
    
    .postContent {
      background: #FFFFFF;
      border-radius: 20px;
      padding: 40px;
      text-decoration: none;

      .postHeader {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
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

      h2 {
        margin-top: 0;
        margin-bottom: 12px;
        font-family: Futura, sans-serif;
        font-weight: 600;
        font-size: 24px;
        line-height: 31px;
        /* identical to box height */

        display: flex;
        align-items: center;

        color: #383838;
      }

      p {
        margin: 0;
        font-size: 14px;
        line-height: 22px;
        letter-spacing: 0.4px;

        display: flex;
        align-items: center;

        color: #383838;
      }
    }
  }
  
  .comments {
    margin-bottom: 40px;
    display: flex;
    justify-content: center;

    .commentsContainer {
      background-color: #fff;
      border-radius: 20px;
      padding: 40px;
      text-decoration: none;
      
      .commentsHeader {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        h3 {
          margin: 0;
          color: #333;
        }
        
        button {
          background-color: transparent;
          border: none;
          outline: none;
          cursor: pointer;
          padding: 0;
          
          font-size: 16px;
          font-weight: 600;
          color: #5E71DD;
        }
      }
    }
  }
  
  .addCommentForm {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
    
    h4 {
      margin-top: 0;
      margin-bottom: 16px;
      font-size: 16px;
      font-weight: 600;
      color: #5E71DD;
    }
    
    input, textarea {
      border: 1px solid #e0e0e0;
      border-radius: 0 16px 16px 16px;
      padding: 16px;
      font-size: 14px;
      line-height: 18px;
    }

    input {
      width: 100%;
      max-width: 300px;
      margin-bottom: 16px;
    }
    
    textarea {
      font-family: inherit;
      width: 100%;
      height: 83px;
      resize: none;
      box-sizing: border-box;
      margin-bottom: 16px;
    }
    
    button {
      width: 120px;
      height: 32px;
      border: 1px solid #5E71DD;
      border-radius: 16px;
      font-size: 16px;
      font-weight: 600;
      background-color: #fff;
      color: #5E71DD;
      display: grid;
      place-items: center;
    }
    
    .buttons {
      display: flex;
      
      button:first-child {
        background-color: #5E71DD;
        color: #fff;
        margin-right: 16px;
      }
    }
  }
`;
