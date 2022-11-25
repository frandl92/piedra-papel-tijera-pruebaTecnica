import { css } from "lit";

export default css`
  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;
    margin: auto;
    margin-top: 30px;
    width: 60%;
  }
  iron-icon {
    cursor: pointer;
  }

  iron-icon:hover {
    color: #ffe15d;
  }

  @media (min-width: 1200px) {
    .container {
      width: 90%;
    }
    iron-icon {
      height: 60px;
      width: 60px;
    }
  }
`;
