import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script 
      type='text/javascript' 
      src='https://platform-api.sharethis.com/js/sharethis.js#property=667bf64dd99dc7001ae46dc9&product=sop' 
      async='async'
    />,
  ]);
};