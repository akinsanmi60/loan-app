import React from "react";
import ourValues from "../data";
import { ValueWrapper } from "../style";

function CompanyValue() {
  return (
    <div>
      <ValueWrapper>
        <div className="values">
          {ourValues.map(ourValue => {
            return (
              <div className="value-container">
                <div className="title">
                  <h3>{ourValue.title}</h3>
                  <h4>{ourValue.subTitle}</h4>
                </div>
                <div className="descrip">
                  <p>{ourValue.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </ValueWrapper>
    </div>
  );
}

export default CompanyValue;
