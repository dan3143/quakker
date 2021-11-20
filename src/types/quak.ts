interface Comment {
  _id: string;
  user: Author;
  comment: string;
}

interface Author {
  name: string;
  username: string;
  email: string;
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
