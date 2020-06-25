import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  // if (true) {
  //   throw new Error("Something went wrong!");
  // }
  return (
    <React.Fragment>
      {robots.map((user, idx) => (
        <Card key={idx} id={user.id} name={user.name} email={user.email} />
      ))}
    </React.Fragment>
  );
};

export default CardList;
