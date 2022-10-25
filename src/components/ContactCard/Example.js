import React from "react";
import { ContactCard } from "./ContactCard";

const Example = () => {
  return (
    <ContactCard header="text" collapsed={false}>
      <div>Something</div>
    </ContactCard>
  );
};

export default Example;
