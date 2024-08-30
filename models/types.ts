export interface FeatureContentInterface {
  id: number;
  title: string;
  image: string;
  description: DescriptionInterface[];
  conclusion?: string;
}

export interface DescriptionInterface {
  title: string;
  description: string;
}