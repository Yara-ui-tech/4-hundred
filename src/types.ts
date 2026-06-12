export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  bulletPoints: string[];
  image: string;
  iconName: string;
  category: 'construction' | 'interiors' | 'utility' | 'planning';
}

export interface QuoteInquiry {
  id: string;
  clientName: string;
  email: string;
  phone: string;
  serviceType: string;
  projectBudget: number;
  message: string;
  timestamp: string;
  status: 'Received' | 'Assigned' | 'Reviewing';
}

export interface CoreValue {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: 'construction' | 'interiors' | 'utility' | 'renovations';
  location: string;
  description: string;
}
