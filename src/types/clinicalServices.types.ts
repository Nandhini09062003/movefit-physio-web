export type ServiceTone = 'red' | 'dark';

export type CategoryKey = 'spine' | 'joint' | 'fitness' | 'virtual';
export type ServiceSide = 'left' | 'center' | 'right';
export type ViewMode = 'showcase' | 'matrix';

export interface ClinicalService {
  id: string;
  title: string;
  category: string;
  categoryKey: CategoryKey;
  desc: string;
  img: string;
  side: ServiceSide;
  imageBadge?: string;
  detailsHeading?: string;
  details?: string[];
}