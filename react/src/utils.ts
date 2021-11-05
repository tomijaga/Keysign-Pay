export const getTime = () => {
  const hours = new Date().getHours();
  const minutes = new Date().getMinutes();

  return `${hours >= 10 ? hours : `0${hours}`}:${
    minutes >= 10 ? minutes : `0${minutes}`
  }`;
};

export const waitForKeysignToLoad = (callback: (keysign: any) => void) => {
  let keysignGlobalObj: any;
  let iterations = 0;
  const interval = setInterval(() => {
    iterations += 1;
    keysignGlobalObj = (window as any).tnb_keysign;
    if (keysignGlobalObj || iterations >= 3) {
      callback(keysignGlobalObj);

      clearInterval(interval);
    }
  }, 1000);
};
