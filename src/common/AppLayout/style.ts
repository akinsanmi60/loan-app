import styled from "styled-components";

const SideWrapper = styled.div`
  //   flex: 1;
  border-right: 0.5px solid rgb(230, 227, 227);
  min-height: 100vh;
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
`;
export default SideWrapper;

export const TopWrapper = styled.div`
  background: var(--purple-primary);
  height: 51px;
  border-bottom: 1.5px solid rgb(231, 228, 228);
  display: flex;
  align-items: center;
  font-size: 14px;
  color: white;
  .wrapper {
    width: 100%;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .sideB {
      display: flex;
      align-items: center;
      .item {
        display: flex;
        align-items: center;
        margin-right: 20px;
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
        .avatar {
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }
  }
`;