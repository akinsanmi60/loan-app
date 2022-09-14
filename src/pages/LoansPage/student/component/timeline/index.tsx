import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaEnvelope,
  FaLandmark,
  FaMoneyBill,
  FaPenAlt,
  FaPersonBooth,
} from "react-icons/fa";
import { timelineElements } from "../../data";
import TimeWrapper, { TimeBox } from "./style";

function Studenttimeline() {
  const IconsStyles = { background: "var(--dark-primary)" };
  return (
    <TimeBox>
      <VerticalTimeline>
        {timelineElements.map(timeline => {
          const personIcon = timeline.icon === "person";
          const moneyIcon = timeline.icon === "money";
          const messageIcon = timeline.icon === "message";
          const bankIcon = timeline.icon === "bank";
          const signIcon = timeline.icon === "sign";
          const paymentIcon = timeline.icon === "payment";
          return (
            <VerticalTimelineElement
              key={timeline.title}
              iconStyle={IconsStyles}
              icon={
                personIcon ? (
                  <FaPersonBooth style={{ color: "var(--neutral-light)" }} />
                ) : moneyIcon ? (
                  <FaMoneyBill style={{ color: "var(--neutral-light)" }} />
                ) : messageIcon ? (
                  <FaEnvelope style={{ color: "var(--neutral-light)" }} />
                ) : bankIcon ? (
                  <FaLandmark style={{ color: "var(--neutral-light)" }} />
                ) : signIcon ? (
                  <FaPenAlt style={{ color: "var(--neutral-light)" }} />
                ) : paymentIcon ? (
                  <FaMoneyBill style={{ color: "var(--neutral-light)" }} />
                ) : (
                  ""
                )
              }
            >
              <TimeWrapper>
                <h1> {timeline.title}</h1>
                <div>
                  <p>{timeline.description}</p>
                </div>
              </TimeWrapper>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </TimeBox>
  );
}

export default Studenttimeline;
