/* eslint-disable no-nested-ternary */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  FaBusinessTime,
  FaMoneyBill,
  FaPenAlt,
  FaPersonBooth,
  FaPhoneAlt,
  FaUserFriends,
} from "react-icons/fa";
import { timelineElements } from "../../data";
import TimeWrapper, { TimeBox } from "./style";

function Businesstimeline() {
  const IconsStyles = { background: "var(--dark-primary)" };
  return (
    <TimeBox>
      <VerticalTimeline>
        {timelineElements.map(timeline => {
          const personIcon = timeline.icon === "person";
          const callIcon = timeline.icon === "call";
          const moneyIcon = timeline.icon === "money";
          const peopleIcon = timeline.icon === "people";
          const signIcon = timeline.icon === "sign";
          const businessIcon = timeline.icon === "business";
          return (
            <VerticalTimelineElement
              key={timeline.title}
              iconStyle={IconsStyles}
              icon={
                personIcon ? (
                  <FaPersonBooth style={{ color: "var(--neutral-light)" }} />
                ) : callIcon ? (
                  <FaPhoneAlt style={{ color: "var(--neutral-light)" }} />
                ) : signIcon ? (
                  <FaPenAlt style={{ color: "var(--neutral-light)" }} />
                ) : moneyIcon ? (
                  <FaMoneyBill style={{ color: "var(--neutral-light)" }} />
                ) : peopleIcon ? (
                  <FaUserFriends style={{ color: "var(--neutral-light)" }} />
                ) : businessIcon ? (
                  <FaBusinessTime style={{ color: "var(--neutral-light)" }} />
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

export default Businesstimeline;
