import axios from "axios";

export const getProducts = async (search: string = "", page: number = 1) => {
  try {
    const res = await axios.get(
      `https://stageapibc.monkcommerce.app/admin/shop/product?search=${search}&page=${page}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
