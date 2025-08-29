"use client";

import React, { useState } from "react";
import ComTab from "@/components/com/Tab";

const App: React.FC = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const tabItems = [
    { label: "Item One", value: "1", content: <div>Item One Content</div> },
    { label: "Item Two", value: "2", content: <div>Item Two Content</div> },
    { label: "Item Three", value: "3", content: <div>Item Three Content</div> },
  ];

  return (
    <div className="in">
      <h1>도메인 퍼블리스트</h1>
      <div>
        <ComTab value={value} onChange={handleChange} tabs={tabItems} />
      </div>
    </div>
  );
};

export default App;
