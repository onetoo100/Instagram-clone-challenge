import names from "random-names-generator";
import clienteAxios from "../config/axios";

const getRandomData = async (amount, category, typeData) => {
  try {
    const imagenes = await getRandomImages(amount, category);

    imagenes.map((e) => {
      switch (typeData) {
        case "swiperCards":
          cards.push({ image: e.webformatURL, name: names.random() });
          break;
        case "suggestions":
          suggestions.push({
            image: e.webformatURL,
            name: names.random(),
            followText: `Followed by ${names.random()}, ${names.random()}`,
          });
          break;
        case "profile":
          profileImg.push({
            image: e.webformatURL,
            name: names.random(),
          });
          break;
        default:
          break;
      }
      return null;
    });

    return cards;
  } catch (error) {
    console.log(error);
  }
};

const getRandomImages = async (imagesPerPage = 3, category) => {
  const key = "27058216-94b508cfd62f1ec2c58e5069a";
  const url = `https://pixabay.com/api/?key=${key}&q=${category}&per_page=${imagesPerPage}`;
  const result = await clienteAxios.get(url);

  return result.data.hits;
};

export const cards = [getRandomData(10, "animals", "swiperCards")];
export const suggestions = [getRandomData(5, "cars", "suggestions")];
export const profileImg = [getRandomData(3, "profile", "profile")];
