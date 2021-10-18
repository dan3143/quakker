const getPrettyDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = +Date.now();
    const difference = (now - +date) / 1000; // Time in seconds
    if (difference < 60) {
      return "just now";
    } else if (difference < 3600) {
      // Less than an hour ago
      return Math.trunc(difference / 60) + "min";
    } else if (difference < 86400) {
      // Less than a day ago
      return Math.trunc(difference / 3600) + "h";
    } else if (difference < 172800) {
      return "Yesterday";
    } else {
      var language = "en-us"; // TODO: use navigator.language || navigator.userLanguage;
      return date.toLocaleDateString(language, { year: "numeric", day: "numeric", month: "short" });
    }
  };
  
  const formatNumber = (number: number) => {
    const suffix = number > 999 ? "K" : number > 999999 ? "M" : "";
    const numberFormatted =
      number > 999
        ? (number / 1000).toFixed(1)
        : number > 999999
        ? (number / 1_000_000).toFixed(1)
        : number;
    return `${numberFormatted}${suffix}`;
  };
  
  export { getPrettyDate, formatNumber };
  