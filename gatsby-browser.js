import "normalize.css";

export const onClientEntry = () => {
  if (typeof window !== "undefined") {
    const script = document.createElement("script");
    script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=594d07a33b4e8e0012f0a4c8&product=inline-share-buttons";
    script.async = true;
    document.head.appendChild(script);
  }
};