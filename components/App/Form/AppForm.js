import React from "react";
import { useFormikContext } from "formik";

import Input from "../../UI/Input";
import ErrorMessage from "../UI/ErrorMessage";

const AppForm = ({ name, ...otherProps }) => {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <Input
        onChangeText={handleChange(name)}
        onBlur={() => setFieldTouched(name)}
        {...otherProps}
      />
      {<ErrorMessage error={errors[name]} visible={touched[name]} />}
    </>
  );
};

export default AppForm;
