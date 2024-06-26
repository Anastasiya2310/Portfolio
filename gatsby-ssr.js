import React from "react";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=594d07a33b4e8e0012f0a4c8&product=inline-share-buttons' async='async'></script>
  ]);
};