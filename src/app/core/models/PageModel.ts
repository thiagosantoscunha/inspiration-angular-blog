import { GuidModel } from './GuidModel';
import { TitleModel } from './TitleModel';
import { ContentModel } from './ContentModel';
import { ExcerptModel } from './ExcerptModel';

export interface PageModel {
  id: any;
  date: Date;
  date_gmt: Date;
  guid: GuidModel;
  modified: Date;
  modified_gmt: Date;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: TitleModel;
  content: ContentModel;
  excerpt: ExcerptModel;
  author: any;
  featured_media: any;
  parent: any;
  menu_order: any;
  comment_status: string;
  ping_status: string;
  template: string;
  meta: [];
  _links: any;
  acf: any;
}
