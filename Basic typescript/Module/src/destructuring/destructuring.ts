{
  // 1) object destructuring with name alias

  const objectWithNameAlias = {
    address: "aman bazaar ",
    contactNo: 9234234,
    name: {
      firstName: "himel",
      midleName: "mezba",
    },
  };

  const {
    address,
    contactNo,
    name: { firstName: hisFirstName },
  } = objectWithNameAlias;

  // note: here is nested object destructuring with name alias

  // 2) array destructuring with rest operator

  const arr:string[] = ["sayem", "himel", "mezba", "sihat", "jabed", "jashed"];

  const [normal, b, bestfriendName, ...otherNameRestArray] = arr;
  // note : here is array destructuring with rest operator


//   important note : we can not declare any type when we destructuring 
}
