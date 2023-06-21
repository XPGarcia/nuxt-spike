export interface ModelBrand {
    id: number;
    name: string;
  }
  
  export interface Brand {
    id: number;
    name: string;
    promo_banner_image_url?: string | null
    logo_image_url?: string | null
    models?: ModelBrand[]
  }
  
  