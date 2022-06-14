/* eslint-disable no-nested-ternary */
import React from "react";
import {
  FaChartBar,
  FaLandmark,
  FaMoneyBill,
  FaPeopleCarry,
  FaRegistered,
} from "react-icons/fa";
import BusinessFaq from "./component/faq";
import Businesstimeline from "./component/timeline";
import eligibilty from "./data";
import Businesswrapper, { ImageWrapper, InnerLayout } from "./style";

function Business() {
  return (
    <Businesswrapper>
      <div>
        <ImageWrapper />
      </div>
      <div className="who">
        <h2>Why We Do It</h2>
        <p>
          We are specialist, impact-driven financier. We help entrepreneurs
          succeed by providing them expert advice, continuous guidance, and
          financing to grow their businesses. We believe that business need more
          than finance to succeed. And that growing small businesses to create
          sustainable jobs is the most powerful driver of social and economic
          development that truly improves people’s lives.
        </p>
      </div>

      <div className="requirement">
        <h1>Are we eligible</h1>
        <div className="req-contain">
          {eligibilty.map(item => {
            const registerIcon = item.icon === "register";
            const moneyIcon = item.icon === "money";
            const peopleIcon = item.icon === "people";
            const bankIcon = item.icon === "bank";
            const chartIcon = item.icon === "power";
            return (
              <div key={item.title}>
                <div className="box">
                  <div className="box-con">
                    <div className="icon">
                      {registerIcon ? (
                        <FaRegistered className="iconstyle" />
                      ) : moneyIcon ? (
                        <FaMoneyBill className="iconstyle" />
                      ) : bankIcon ? (
                        <FaLandmark className="iconstyle" />
                      ) : peopleIcon ? (
                        <FaPeopleCarry className="iconstyle" />
                      ) : chartIcon ? (
                        <FaChartBar className="iconstyle" />
                      ) : null}
                    </div>
                  </div>
                  <div className="description">
                    <h1>{item.title}</h1>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="requirement">
        <h1>Are we eligible</h1>
        <Businesstimeline />
      </div>

      <div className="studfaq">
        <InnerLayout>
          <h2 className="faqtitle">
            Frequently Asked Questions About Business Loan.
          </h2>
          <BusinessFaq />
        </InnerLayout>
      </div>
    </Businesswrapper>
  );
}

export default Business;
