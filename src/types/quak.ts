interface Comment {
  _id: string;
  user: Author;
  comment: string;
}

interface Author {
  _id: string;
  name: string;
  username: string;
}

interface Quak {
  _id: string;
  likes: number;
  content: string;
  user: Author;
  comments: Array<Comment>;
  createdAt: string;
  updatedAt: string;
}

export type { Author, Comment, Quak };
