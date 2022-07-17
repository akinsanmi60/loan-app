/* eslint-disable no-nested-ternary */
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Box,
  Text,
} from "@chakra-ui/react";
import {
  FaBuilding,
  FaCar,
  FaLaptopHouse,
  FaReceipt,
  FaUserGraduate,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ride from "../../../../assets/hands.jpg";
import routesLinks from "./routes";

function DrawerExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <p onClick={onOpen}>Menu</p>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color=" #16194f">
          <DrawerCloseButton color=" #16194f" fontWeight="900" />
          <Box
            bgImage={ride}
            bgPosition="center"
            backgroundRepeat="no-repeat"
            h="220px"
            paddingLeft="6"
          >
            <Text marginTop="40" fontWeight="900" fontSize="30">
              HUMONI
            </Text>
          </Box>

          <DrawerBody>
            {routesLinks.map(routeLink => {
              const gradIcon = routeLink.icon === "stud";
              const bizIcon = routeLink.icon === "biz";
              const motoIcon = routeLink.icon === "moto";
              const mortIcon = routeLink.icon === "mort";
              const remtIcon = routeLink.icon === "remt";
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
                        ) : null}
                      </Text>
                      <Text>{routeLink.title}</Text>
                    </Box>
                  </Link>
                </Box>
              );
            })}
          </DrawerBody>

          <DrawerFooter>Cancel</DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default DrawerExample;
