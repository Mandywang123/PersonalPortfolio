
export interface ImageAsset {
  src: string;
  alt: string;
  caption?: string;
}

export interface Artwork {
  id: string;
  title: string;
  year: string; // Added year property
  category: string;
  description: string;
  image: string;
}

export interface ArtworkGroup {
  groupTitle: string;
  artworks: Artwork[];
}

export interface PortfolioModule {
  id: string;
  moduleTitle: string;
  moduleEnTitle: string;
  groups: ArtworkGroup[];
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
  description: string;
  tags: string[];
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
  medium: string;
  description?: string;
  images: ImageAsset[];
}
