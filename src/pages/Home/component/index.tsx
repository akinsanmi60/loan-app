/* eslint-disable no-nested-ternary */
import React from "react";
import {
  FaCloudDownloadAlt,
  FaHandHoldingUsd,
  FaLocationArrow,
  FaPeopleCarry,
  FaPortrait,
  FaUserGraduate,
} from "react-icons/fa";
import { eligibilty } from "./data";
import Box from "./style";

function ReasonComp() {
  return (
    <Box>
      <div className="req-contain">
        {eligibilty.map(item => {
          const registerIcon = item.icon === "register";
          const gradIcon = item.icon === "grad";
          const peopleIcon = item.icon === "people";
          const usdIcon = item.icon === "bank";
          const cloudIcon = item.icon === "power";
          const sendIcon = item.icon === "telegram";
          return (
            <div key={item.title} className="box">
              <div className="box-con">
                <div className="icon">
                  {gradIcon ? (
                    <FaUserGraduate className="iconstyle" />
                  ) : usdIcon ? (
                    <FaHandHoldingUsd className="iconstyle" />
                  ) : peopleIcon ? (
                    <FaPortrait className="iconstyle" />
                  ) : registerIcon ? (
                    <FaPeopleCarry className="iconstyle" />
                  ) : cloudIcon ? (
                    <FaCloudDownloadAlt className="iconstyle" />
                  ) : sendIcon ? (
                    <FaLocationArrow className="iconstyle" />
                  ) : null}
                </div>
              </div>
              <div className="description">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Box>
  );
}

export default ReasonComp;
