import {css} from "lit"

export default css `
.container {
    background-color: #fff8ea;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    width: 22.5%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-top: 50px;
  }

  p{
    font-family: "Patrick Hand", cursive;
  }

  .greeting-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
  }
  .user-name {
    font-size: 40px;
    font-family: "Patrick Hand", cursive;
  }

  .results {
    text-align: center;
    font-family: "Patrick Hand", cursive;
    font-size: 30px;
  }

  .winner {
    text-align: center;
    font-family: "Patrick Hand", cursive;
    font-size: 20px;
  }

  .btn-container {
    margin-top: 30px;
    display: flex;
    gap: 10px;
  }

  button {
    background-color: #65647c;
    width: 70px;
    height: 50px;
    border-radius: 5px;
    border: 1px solid #815b5b;
    font-size: 20px;
  }

  .result-container {
    margin-top: 30px;
    display: flex;
    gap: 40px;
  }

  .item-selected {
    font-size: 40px;
  }
`
