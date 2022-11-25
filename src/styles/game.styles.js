import {css} from "lit"


export default css `
.container {
    background-color: #fff8ea;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .header {
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 30px;
  }

  p{
    font-family: "Patrick Hand", sans-serif;
  }

  .greeting-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: -10px;
  }
  .user-name {
    font-size: 40px;
    font-family: "Patrick Hand", sans-serif;
  }

  .results {
    text-align: center;
    font-family: "Patrick Hand", sans-serif;
    font-size: 30px;
  }

  .winner {
    text-align: center;
    font-family: "Patrick Hand", sans-serif;
    font-size: 20px;
  }

  .btn-container {
    margin-top: 30px;
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    width: 70%;
    justify-content: center;
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

  @media (min-width: 1200px) {
    button {
      height: 80px;
      width: 100px;
    }
    .header {
      width: 65%;
justify-content: space-between
    }

    .btn-container{
      width:90%;
      gap: 30px;
    }
  }
`
