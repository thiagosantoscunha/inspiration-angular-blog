import { SelfModel } from './SelfModel';
import { CollectionModel } from './CollectionModel';
import { AboutModel } from './AboutModel';
import { AuthorModel } from './AuthorModel';
import { ReplyModel } from './ReplyModel';
export interface LinksModel {
  self: SelfModel[];
  collection: CollectionModel[];
  about: AboutModel[];
  author: AuthorModel[];
  replies: ReplyModel[];
}

