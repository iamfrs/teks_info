import { hasData } from "node_custom_utils";

export const getPaginationValues = (
  pageNumber: string,
): {
  skip: number;
  limit: number;
} => {
  const page = parseInt(pageNumber);
  if (isNaN(page) || page < 1) {
    throw new Error("Invalid page number, start with 1");
  }
  const limit: number = parseInt(process.env.PAGINATION_LIMIT ?? "0");
  const skip = (page - 1) * limit;
  return { skip, limit };
};
