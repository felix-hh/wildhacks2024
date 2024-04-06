import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  waitForNone,
} from "recoil";
import { bookDetailsIdState, homePageQueryState } from "atoms";
import {
  fetchBookDetailsById,
  fetchBookRatingsById,
  fetchBooks,
} from "lib/http";

// export interface BookProps {
//   id: string;
//   title: string;
//   type: string;
//   publishedAt: string;
//   stock: number;
//   price: string;
//   authors: { author: AuthorType }[];
//   averageRating: number;
//   ratings: number;
// }

const myResponse = {
  content: [
    id: 'myid';
    title: 'harry potter';
    type: 'fantasy';
    publishedAt: '1982';
    stock: 4;
    price: '15.23';
    authors: { author: AuthorType }[];
    averageRating: 10;
    ratings: 10;
  ]
   total = length(content)

}


export const homePageQuery = selector({
  key: "homePage",
  get: async ({ get }) => {
    const { page, size, type, sort } = get(homePageQueryState);
    const response = await fetchBooks({ page, size, type, sort });
    // return response;
    return myResponse;
  },
});

export const bookInfoQuery = selector({
  key: "BookInfoQuery",
  get: async ({ get }) => {
    const bookID = get(bookDetailsIdState);
    const response = await fetchBookDetailsById(bookID);
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});

export const bookRatingQuery = selector({
  key: "BookRatingQuery",
  get: async ({ get }) => {
    const bookID = get(bookDetailsIdState);
    if (!bookID) {
      throw new Error('Required bookID');
    }
    const response = await fetchBookRatingsById(bookID);
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});
