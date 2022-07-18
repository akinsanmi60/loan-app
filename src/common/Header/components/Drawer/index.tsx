/* eslint-disable no-nested-ternary */
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  FaBars,
  FaBriefcase,
  FaBuilding,
  FaCar,
  FaLaptopHouse,
  FaNewspaper,
  FaQuestion,
  FaReceipt,
  FaRocketchat,
  FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ride from "../../../../assets/hands.jpg";
// import { Bars } from "../Navigation/style";
import routesLinks from "./routes";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box onClick={onOpen}>
        <Box display="flex" color=" #16194f">
          <Text marginTop="-1" marginRight="2" fontWeight="800">
            Menu
          </Text>
          <FaBars />
        </Box>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color=" #16194f">
          <DrawerCloseButton color=" #16194f" fontWeight="900" fontSize="15" />
          <Box
            bgImage={ride}
            bgPosition="center"
            backgroundRepeat="no-repeat"
            h="220px"
            paddingLeft="6"
          >
            <Text marginTop="130px" fontWeight="900" fontSize="30">
              HUMONI
            </Text>
            <Text marginTop="-1">+234813759225</Text>
          </Box>

          <DrawerBody>
            {routesLinks.map(routeLink => {
              const gradIcon = routeLink.icon === "stud";
              const bizIcon = routeLink.icon === "biz";
              const motoIcon = routeLink.icon === "moto";
              const mortIcon = routeLink.icon === "mort";
              const remtIcon = routeLink.icon === "remt";
              const pressIcon = routeLink.icon === "press";
              const qusetIcon = routeLink.icon === "ques";
              const caseIcon = routeLink.icon === "career";
              const chatIcon = routeLink.icon === "chat";
              return (
                <Box key={routeLink.title}>
                  <Link to={routeLink.path}>
                    <Box display="flex" borderBottomWidth="1px" padding="2">
                      <Text paddingRight="3" marginTop="1">
                        {gradIcon ? (
                          <FaUserGraduate className="iconstyle" />
                        ) : bizIcon ? (
                          <FaBuilding className="iconstyle" />
                        ) : motoIcon ? (
                          <FaCar />
                        ) : mortIcon ? (
                          <FaLaptopHouse />
                        ) : remtIcon ? (
                          <FaReceipt />
                        ) : pressIcon ? (
                          <FaNewspaper />
                        ) : qusetIcon ? (
                          <FaQuestion />
                        ) : caseIcon ? (
                          <FaBriefcase />
                        ) : chatIcon ? (
                          <FaRocketchat />
                        ) : null}
                      </Text>
                      <Text>{routeLink.title}</Text>
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
