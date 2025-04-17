//SDK利用準備
import { createClient } from "microcms-js-sdk";
const client = createClient({
  serviceDomain: import.meta.env.MICROCMS_SERVICE_DOMAIN,
  apiKey: import.meta.env.MICROCMS_API_KEY,
});

//型定義
export type Category = {
  id: string;
  'cate-name': string;
};

export type Blog = {
  id: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  revisedAt: string;
  title: string;
  content: string;
  category: Category[];
};
export type BlogResponse = {
  totalCount: number;
  offset: number;
  limit: number;
  contents: Blog[];
};

//APIの呼び出し
export const getBlogs = async (queries?: any) => {
  return await client.get<BlogResponse>({ 
    endpoint: "blogs", 
    queries: {
      depth: 2,
      ...queries,
    }, 
  });
};

export const getBlogDetail = async (blogId: string, queries?: any) => {
  return await client.getListDetail<Blog>({
    endpoint: "blogs",
    contentId: blogId,
    queries: {
      depth: 2,
      ...queries,
    },
  });
};

export const getCategories = async () => {
  return await client.getList<Category>({
    endpoint: "category",
  });
};
