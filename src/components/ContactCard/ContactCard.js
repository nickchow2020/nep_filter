import React from "react";

//Create Component here
export const ContactCard = ({ header, name, children, collapsed }) => {
  return (
    <div className="card__row">
      <header>{header}</header>
      {collapsed ? null : <div>{children}</div>}
    </div>
  );
};
