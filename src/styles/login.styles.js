import { css } from "lit";

export default css`
  .container {
    background-color: #fff8ea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 85px;
    
  }

  .app-title {
    font-family: "Alfa Slab One", sans-serif;
    text-align: center;
  }

  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .input-user {
    background-color: rgb(242, 230, 205);
    color: #9e7676;
    width: 90%;
    height: 3rem;
    font-size: 20px;
    border-radius: 0.3rem;
    border: 1px solid #9e7676;
    text-align: center;
  }

  .input-user::placeholder {
    color: #9e7676;
    font-size: 0.7rem;
    text-align: center;
    align-content: center;
  }

  .btn-submit {
    background-color: #815b5b;
    border: 0.5rem solid #815b5b;
    border-radius: 3px;
    font-size: 1rem;
    color: white;
    width: 60%;
    cursor: pointer;
  }

  p {
    font-family: "Patrick Hand", sans-serif;
    font-size: 20px;
    cursor: pointer;
    border: 1px solid black;
    padding: 10px;
    border-radius: 3px;
  }

  p:hover {
    color: #ffe15d;
  }

  @media (min-width: 1200px) {
    .container {
      gap: 40px;
    }

    .form-login {
      gap: 70px;
    }

    .input-user {
      font-size: 35px;
    }

    .app-title {
      font-size: 50px;
    }

    p {
      font-size: 40px;
      border: 1px solid black;
      padding: 10px;
      border-radius: 3px;
    }

    .btn-submit {
      height: 50px;
    }
  }
`;
