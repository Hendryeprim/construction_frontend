export const projectImageMap = {
  // STRICTLY INDOOR INTERIORS
  'Modern Penthouse': 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80',
  'Coastal Villa Interior': 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80',
  'Nordic Minimalist Loft': 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1920&q=80',
  'The Velvet Lounge': 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1920&q=80',
  'Urban Zen Studio': 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?auto=format&fit=crop&w=1920&q=80', // Indoor bedroom
  'Desert Modern House': 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1920&q=80', // Indoor kitchen
  
  // STRICTLY CONSTRUCTION / EXTERIOR / RAW SITES
  'Apex Corporate Tower': 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80', // Skyscraper exterior
  'Lumina Residences': 'https://images.unsplash.com/photo-1449844908441-8829872d2607?auto=format&fit=crop&w=1920&q=80', // Construction cranes
  'Oasis Museum of Art': 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&w=1920&q=80', // Building construction/scaffolding
  'Echo Valley Bridge': 'https://images.unsplash.com/photo-1531834685032-c34bf0d84c77?auto=format&fit=crop&w=1920&q=80', // Steel framework
  'Silicon Hub Campus': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80', // Concrete building
  'The Obsidian Hotel': 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1920&q=80',

  // ROADS & INFRASTRUCTURE
  'Chennai Metro Arterial Road': 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80',
  'Tidel Park Flyover Extension': 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1920&q=80',
  'ECR Highway Expansion': 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&w=1920&q=80',
  'OMR Service Lane Reconstruction': 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80',

  // REALTY / PLOTS
  'Premium Villa Plots - OMR': 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1920&q=80',
  'Commercial Land - GST Road': 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80',
};

export const getProjectImage = (project) => {
  // If user uploaded an image in CMS, use it
  let cmsImage = project.images?.find(img => img.is_cover)?.image || project.images?.[0]?.image;
  
  if (cmsImage) {
    if (cmsImage.startsWith('/')) {
      cmsImage = `https://api.cjvinfrarealty.com${cmsImage}`;
    }
    return cmsImage;
  }

  // Otherwise, strictly match the exact correct placeholder image based on the title
  if (projectImageMap[project.title]) {
    return projectImageMap[project.title];
  }

  // Fallbacks if no specific title match is found
  if (project.project_type === 'REALTY') {
    return 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80';
  } else if (project.project_type === 'ROADS') {
    return 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80';
  } else if (project.project_type === 'CONSTRUCTION') {
    return 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1920&q=80';
  }
  
  return 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80';
};
