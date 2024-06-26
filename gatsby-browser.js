import "normalize.css";

export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=667bf64dd99dc7001ae46dc9&product=inline-share-buttons";
    script.async = true;
    document.head.appendChild(script);
  }
};