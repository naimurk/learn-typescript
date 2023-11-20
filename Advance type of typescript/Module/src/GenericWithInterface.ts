{
  //    Generic with interface

  //   1)
  interface User<x> {
    laptopName: string;
    bradn: string;
    price: number;
    watch: x;
  }

  interface poorInterface {
    name: string;
    releaseData: number;
  }

  const poorUsr: User<poorInterface> = {
    laptopName: "laptop",
    bradn: "asus",
    price: 345,
    watch: {
      name: "apple",
      releaseData: 2000 / 343 / 34,
    },
  };

  // 2) multiple parameter
  interface multiple<x = null, y = null> {
    laptopName: string;
    bradn: string;
    price: number;
    watch: x;
    car?: y;
  }

  //   borolox type
  type BoroloxWatch = {
    name: string;
    price: number;
  };
  interface BoroloxCar {
    name: string;
    price: number;
  }
  const borolox: multiple<BoroloxWatch, BoroloxCar> = {
    bradn: "apple",
    laptopName: "laptop",
    price: 245,
    watch: {
      name: "sf",
      price: 12323,
    },
  };

  type chtoloxWatch = {
    name: string;
  };

  const chotoLox: multiple<chtoloxWatch>= {
    car: null,
    bradn: "apple",
    laptopName: "laptop",
    price: 12323,
    watch: {
        name: "sf"
    }
  }
}
