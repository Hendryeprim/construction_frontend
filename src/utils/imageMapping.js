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
};

export const getProjectImage = (project) => {
  // If user uploaded an image in CMS, use it
  const cmsImage = project.images?.find(img => img.is_cover)?.image || project.images?.[0]?.image;
  if (cmsImage) return cmsImage;

  // Otherwise, strictly match the exact correct placeholder image based on the title
  return projectImageMap[project.title] || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80';
};
