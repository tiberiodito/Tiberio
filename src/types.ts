export type ResourceFormat = 'canva' | 'drive' | 'pdf' | 'svg' | 'video' | 'ebook';

export type ResourceCategory = 
  | 'all'
  | 'canva_main'
  | 'boxes_molds'
  | 'bonuses'
  | 'video_courses'
  | 'school_labels'
  | 'sublimation_crafts'
  | 'coloring_books'
  | 'invitations';

export type OccasionFilter = 
  | 'all'
  | 'first_year'
  | 'girls'
  | 'boys'
  | 'baby_shower'
  | 'easy_starter'
  | 'school'
  | 'sublimation';

export interface ResourceSubLink {
  label: string;
  labelPt?: string;
  url: string;
  format?: ResourceFormat;
}

export interface ResourceItem {
  id: string;
  title: string;
  subtitle?: string;
  category: ResourceCategory;
  format: ResourceFormat;
  formatLabel: string;
  badge?: string;
  description: string;
  actionUrl: string;
  actionText: string;
  subLinks?: ResourceSubLink[];
  iconName: string;
  isBonus?: boolean;
  bonusNumber?: number;
  featured?: boolean;
  difficulty?: 'Fácil' | 'Medio' | 'Avanzado';
  estimatedTime?: string;
  tags: string[];
  occasions?: string[];
  paperRecommended?: string;
}

export interface VideoTutorial {
  id: string;
  title: string;
  titlePt?: string;
  description: string;
  descriptionPt?: string;
  youtubeId: string;
  youtubeUrl: string;
  duration: string;
  category: string;
  categoryPt?: string;
  keyTakeaways: string[];
  keyTakeawaysPt?: string[];
}

export interface PaperGuideItem {
  name: string;
  grammage: string;
  finish: string;
  bestFor: string[];
  printerType: string;
  motherTip: string;
  score: number;
}

export interface PartyPlan {
  childName: string;
  childAge: number | string;
  partyDate: string;
  theme: string;
  estimatedGuests: number;
  budget?: string;
  checkedTasks: string[];
  customTasks: { id: string; text: string; done: boolean }[];
}

export interface AIPartyIdeaResponse {
  themeName: string;
  colorPalette: { name: string; hex: string; role: string }[];
  invitationPhrases: { style: string; text: string }[];
  boxCandyFillings: { boxType: string; suggestedTreats: string[] }[];
  partyActivities: string[];
  recommendedPackItems: string[];
  printTips: string;
}
