export const loadScript = function(url, location = document.body) {
  //FIXME: Only Append script if not yet appended
  return new Promise(resolve => {
    const scriptTag = document.createElement("script");
    scriptTag.src = url;

    scriptTag.onload = resolve;
    scriptTag.onreadystatechange = resolve;

    location.appendChild(scriptTag);
  });
};
