import React from "react";

import { useFormikContext } from "formik";

import Button from "../../UI/Button";

const submitButton = (props) => {
  const { handleSubmit } = useFormikContext();

  return (
    <Button
      text={props.text}
      width={props.width}
      design={props.design}
      style={props.style}
      onPress={() => handleSubmit()}
      disabled={props.disabled}
    />
  );
};

export default submitButton;
