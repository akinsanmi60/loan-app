import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import PaystackIntegration from "../tabs/Paystack";
import CreditCard from "../tabs/Card";

function TabNav() {
  return (
    <Tabs size="lg" variant="line" align="center" isLazy>
      <TabList mb="25px" outline="none">
        <Tab>PayStack</Tab>
        <Tab>Stripe</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <PaystackIntegration />
        </TabPanel>
        <TabPanel>
          <CreditCard />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}

export default TabNav;
