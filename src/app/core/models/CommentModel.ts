export class CommentModel {
  id: any;
  post: any;
  parent: any;
  author: any;
  author_name: string;
  author_url: string;
  date: Date;
  date_gmt: Date;
  content: { rendered: string };
  link: string;
  status: string;
  type: string;
  author_avatar_urls: { 24: string; 48: string; 96: string; };
  meta: any[];
  _links: any;

  responses?: CommentModel[];
}
