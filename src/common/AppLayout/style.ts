import styled from "styled-components";

const SideWrapper = styled.div`
  border-right: 0.5px solid rgb(230, 227, 227);
  // min-height: 50vh;
  background: var(--dark-primary);
  color: white;

  .top_section {
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;

    .top {
      display: flex;
      align-items: center;
      padding: 20px 15px;
    }

    .logo {
      font-size: 20px;
      font-weight: bold;
      color: white;
    }
    hr {
      height: 0;
      border: 0.5px solid rgb(230, 227, 227);
    }
  }

  .bars {
    display: flex;
    font-size: 25px;
    margin-left: 50px;
  }

  .link {
    margin-top: 15px;
    display: flex;
    padding: 10px 15px;
    gap: 15px;
    transition: all 0.5s;
  }

  .link:hover {
    background: lightskyblue;
    color: #000;
    transition: all 0.5s;
  }

  .active {
    background: lightskyblue;
    color: #000;
  }

  .icon {
    margin-top: 4px;
  }
  .icon,
  .link_text {
    font-size: 18px;
  }
  .btnlogout {
    margin-top: 200px;
    padding: 10px 15px;
  }
  .btn {
    display: flex;
    gap: 15px;
  }
  @media screen and (min-width: 1025px) {
    min-height: 50vh;
    height: auto !important;

    .top_section {
      height: 70px;
      .top h1 {
        font-size: 30px;
      }
    }
    .link {
      .link_text,
      .icon {
        font-size: 22px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export default SideWrapper;

export const TopWrapper = styled.div`
  background: var(--dark-primary);
  height: 60px;
  font-size: 14px;
  color: white;
  margin: 10px;
  // width: 60vw;
  border-radius: 15px;
  .wrapper {
    width: 100%;
    padding: 20px;
    display: flex;
    justify-content: space-around;
    .sideA {
      padding-right: 20px;
      .avatar {
        width: 30px;
        height: 30px;
        border-radius: 50%;
      }
    }
    .sideB {
      display: flex;
      gap: 27px;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        gap: 20px;
        position: relative;

        .icon {
          font-size: 20px;
        }
        .counter {
          width: 15px;
          height: 15px;
          background-color: red;
          border-radius: 50%;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 10px;
          font-weight: bold;
          position: absolute;
          top: -5px;
          right: -5px;
        }
      }
    }
    .mobile_icon {
      font-size: 20px;
    }

    @media screen and (max-width: 425px) {
      .sideA {
        display: none;
      }
    }
    @media screen and (max-width: 375px) {
      gap: 13px;
      .mobile_icon,
      .icon {
        font-size: 22px;
      }
    }
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
`;
