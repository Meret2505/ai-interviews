import Agent from "@/components/Agent";
import React from "react";

type Props = {};

const InterviewPage = (props: Props) => {
  return (
    <>
      <h3>Interview Generation</h3>
      <Agent userName="You" userId="1" type="generation" />
    </>
  );
};

export default InterviewPage;
