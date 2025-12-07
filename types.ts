export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectPhase {
  title: string;
  description: string;
  images: ImageAsset[];
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  phases: {
    inspiration: ProjectPhase;
    brainstorm: ProjectPhase;
    research: ProjectPhase;
    experiments: ProjectPhase;
    application: ProjectPhase;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  medium: string;
  description?: string;
  images: ImageAsset[];
}