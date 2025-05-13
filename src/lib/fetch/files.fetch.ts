import axios from "axios";

// Make sure to set the baseURL correctly
const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || "http://localhost:3000", // Adjust to your server's URL
});

export async function getFiles({ currentPage, page }: { page: string; currentPage: number }) {
  if (page === "subscription") {
    return { files: [] };
  }

  try {
    const res = await axiosInstance.get(`/api/v1/files/${page}`, {
      params: {
        page: currentPage,
      },
    });

    return res.status === 200 ? res.data.data : { files: [] };
  } catch (error) {
    console.error("Error fetching files:", error);
    return { files: [] }; // Return empty array on error
  }
}

export const searchFiles = async (search: string) => {
  if (!search.trim()) return [];

  try {
    const res = await axiosInstance.get("/api/v1/files/", {
      params: {
        search,
      },
    });

    if (res.status === 200) {
      return res.data.data;
    }

    return [];
  } catch (error) {
    console.error("Error in searchFiles:", error);
    throw new Error("Failed to fetch search results.");
  }
};