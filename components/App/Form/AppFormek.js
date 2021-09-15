import React from "react";

import { Formik } from "formik";

//this component is mainly take values that enterd and submit after pass it in validationSchema

const AppFormek = ({ initialValues, onSubmit, validationSchema, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
};

export default AppFormek;
