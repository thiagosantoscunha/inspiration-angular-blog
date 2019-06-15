import { GuidModel } from './GuidModel';
import { TitleModel } from './TitleModel';
import { ContentModel } from './ContentModel';
import { ExcerptModel } from './ExcerptModel';
import { LinksModel } from './LinksModel';

export interface PostModel {
    id: number;
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
    author: number;
    featured_media: number;
    comment_status: string;
    ping_status: string;
    sticky: boolean;
    template: string;
    format: string;
    meta: any[];
    categories: number[];
    tags: number[];
    _links: LinksModel;
}
