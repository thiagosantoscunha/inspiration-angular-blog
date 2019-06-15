import { ImageMetaModel } from './image-meta.model';

export class MediaDetailsModel {
  width: number;
  height: number;
  file: string;
  sizes: {};
  image_meta: ImageMetaModel;
}
