import client from "./client";

export const getHeader = async () => {
  try {
    const { data } = await client.get("/navbar");
    return data;
  } catch (error) {
    console.error("Error fetching header data:", error);
    throw error; // Ensure the error is thrown to handle it in the component
  }
};

export const updateHeader = async (navbarData) => {
  try {
    const { data } = await client.patch(`/navbar`, navbarData);
    return data;
  } catch (error) {
    console.error("Error updating header data:", error);
    throw error;
  }
};
