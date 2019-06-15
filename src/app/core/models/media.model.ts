import { MediaDetailsModel } from './MediaDetailsModel';
import { LinkModel } from './link.model';


export class MediaModel {
  id: any;
  date: Date;
  date_gmt: Date;
  guid: { rendered: string };
  slug: string;
  status: string;
  link: string;
  title: { rendered: string };
  author: any;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: Array<any>;
  description: { rendered: string };
  caption: { rendered: string };
  alt_text: string;
  media_type: string;
  media_datail: MediaDetailsModel;
  post: any;
  source_url: string;
  _links: LinkModel;
}
