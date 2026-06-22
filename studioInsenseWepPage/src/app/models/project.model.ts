import { ProjectImage } from "./projectImage.model";

export interface Project {
  id: number,
  titleHu: string,
  descriptionHu: string,
  titleEng: string,
  descriptionEng: string,
  cardTitleHu: string,
  cardTitleEng: string,
  cardImg: string,
  images: ProjectImage[]
}
