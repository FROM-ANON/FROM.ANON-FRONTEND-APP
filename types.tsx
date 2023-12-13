export interface MailType {
  mailId: number;
  userId: number;
  mailPaperId: number;
  text: string;
  createdTime?: string;
  isRead?: boolean;
}

export interface UserType {
  userId: number;
  instaUserId: number;
  instaId: string;
  pro?: boolean;
}

export interface MailPaperType {
  id: number;
  pro: boolean;
  isFavorite?: boolean;
}

export interface FavoriteMPType {
  id: number;
  userId: number;
  mailPaperId: number;
}
