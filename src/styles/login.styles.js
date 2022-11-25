import {css} from "lit"

export default css `
.container {
    background-color: #fff8ea;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
  }

  .app-title {
    font-family: "Alfa Slab One", cursive;
    text-align: center;
  }

  .form-login {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .input-user {
    background-color: rgb(242, 230, 205);
    color: #9e7676;
    width: 90%;
    height: 3rem;
    font-size: 1rem;

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
    border-radius: 0.3rem;
    font-size: 1rem;
    color: black;
    width: 60%;
  }

  p {
    font-family: "Patrick Hand", cursive;
    font-size: 30px;
  }
`
