
export interface CarType {
  id: number;
  name: string;
  additionalInfo?: CarTypeAdditionalInfo;
}

export interface CarTypeAdditionalInfo {
  id: number;
  promoBannerImageUrl: string;
}
