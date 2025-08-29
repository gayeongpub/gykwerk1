// components/CustomTabs.tsx
import React from "react";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";

interface TabItem {
  label: string;
  value: string;
  content: React.ReactNode;
}

interface ComTabsProps {
  value: string;
  onChange: (event: React.SyntheticEvent, newValue: string) => void;
  tabs: TabItem[];
}

const ComTabs: React.FC<ComTabsProps> = ({ value, onChange, tabs }) => {
  return (
    <TabContext value={value}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <TabList onChange={onChange} aria-label="custom tabs">
          {tabs.map((tab) => (
            <Tab key={tab.value} label={tab.label} value={tab.value} />
          ))}
        </TabList>
      </Box>
      {tabs.map((tab) => (
        <TabPanel key={tab.value} value={tab.value}>
          {tab.content}
        </TabPanel>
      ))}
    </TabContext>
  );
};

export default ComTabs;


