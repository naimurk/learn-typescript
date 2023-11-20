{
  // promise ASYNC JAVASCRIPT
  const createPromise = (): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const data: string = "something";
      if (data) {
        resolve(data);
      } else {
        reject("failed to load data");
      }
    });
  };

  // calling createPromise function
  const showData = async () => {
    const data = await createPromise();
    console.log(data);
  };

  showData();

  type S = string[]
  type b = Array<{name: string,}>
  const data:b = [{name: "sayme vaiyya"},{name: "anas vaiyya" }]
//   both are the sam
}
