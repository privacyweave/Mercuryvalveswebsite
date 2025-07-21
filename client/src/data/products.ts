export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  subcategory?: string;
  image: string;
  slug: string;
  featured?: boolean;
}

export const productCategories = {
  "DI, CI Valves": {
    name: "DI, CI Valves",
    subcategories: [
      "Butterfly Valve",
      "Air Valve", 
      "Foot Valve",
      "Strainer Valve",
      "Gate Valve",
      "Check Valve",
      "Float Control Valve",
      "Flow Control Valve", 
      "Pressure Relief Valve",
      "Pressure Reducing Valve"
    ],
    subCategories: {
      "Butterfly Valve": [
        "Wafer (DI/CI)",
        "Concentric Flanged", 
        "Double Eccentric Flanged"
      ],
      "Air Valve": [
        "Single Chamber Flanged",
        "Single Chamber Screwed",
        "Single Chamber Ball Type",
        "Double Chamber",
        "H40 Isolating",
        "Double Kinetic"
      ],
      "Foot Valve": [
        "Ball Type Flanged",
        "Ball Type Screwed"
      ],
      "Strainer Valve": [
        "Y Type Flanged & Screwed",
        "Basket Type"
      ],
      "Gate Valve": [
        "Rising Stern Seated",
        "Non Rising Stern Seated",
        "Metal Seated", 
        "Actuator Type",
        "CI Sluice Valve"
      ],
      "Check Valve": [
        "Single Wafer",
        "Dual Plate Wafer",
        "Dual Plate Flanged", 
        "Swing",
        "Swing With Rubber Disc",
        "Ball",
        "NRV Reflux Valve",
        "Tilting Disc"
      ]
    }
  },
  "Butterfly Valve": {
    name: "Butterfly Valve",
    parent: "DI, CI Valves",
    subcategories: [
      "Wafer (DI/CI)",
      "Concentric Flanged",
      "Double Eccentric Flanged"
    ]
  },
  "Air Valve": {
    name: "Air Valve",
    parent: "DI, CI Valves",
    subcategories: [
      "Single Chamber Flanged",
      "Single Chamber Screwed",
      "Single Chamber Ball Type",
      "Double Chamber",
      "H40 Isolating",
      "Double Kinetic"
    ]
  },
  "Foot Valve": {
    name: "Foot Valve",
    parent: "DI, CI Valves",
    subcategories: [
      "Ball Type Flanged",
      "Ball Type Screwed"
    ]
  },
  "Strainer Valve": {
    name: "Strainer Valve",
    parent: "DI, CI Valves",
    subcategories: [
      "Y Type Flanged & Screwed",
      "Basket Type"
    ]
  },
  "Gate Valve": {
    name: "Gate Valve",
    parent: "DI, CI Valves",
    subcategories: [
      "Rising Stern Seated",
      "Non Rising Stern Seated",
      "Metal Seated",
      "Actuator Type",
      "CI Sluice Valve"
    ]
  },
  "Check Valve": {
    name: "Check Valve",
    parent: "DI, CI Valves",
    subcategories: [
      "Single Wafer",
      "Dual Plate Wafer",
      "Dual Plate Flanged",
      "Swing",
      "Swing With Rubber Disc",
      "Ball",
      "NRV Reflux Valve",
      "Tilting Disc"
    ]
  },
  "Float Control Valve": {
    name: "Float Control Valve",
    parent: "DI, CI Valves",
    subcategories: []
  },
  "Flow Control Valve": {
    name: "Flow Control Valve",
    parent: "DI, CI Valves",
    subcategories: []
  },
  "Pressure Relief Valve": {
    name: "Pressure Relief Valve",
    parent: "DI, CI Valves",
    subcategories: []
  },
  "Pressure Reducing Valve": {
    name: "Pressure Reducing Valve",
    parent: "DI, CI Valves",
    subcategories: []
  },
  "DI, CI Pipes & Fittings": {
    name: "DI, CI Pipes & Fittings",
    subcategories: [
      "Socket",
      "Double Flange Pipe",
      "Cast Iron Double Flange Pipes",
      "Puddle Wall Casting",
      "Slotted Pipe",
      "Cast Iron Pipe", 
      "Fittings"
    ]
  },
  "Gun Metal Valves & SS Valves": {
    name: "Gun Metal Valves & SS Valves",
    subcategories: [
      "Gun Metal Valves",
      "SS Valves"
    ]
  },
  "HDPE Pipes & Fittings": {
    name: "HDPE Pipes & Fittings",
    subcategories: []
  },
  "Galvanized Iron Pipes & Fittings": {
    name: "Galvanized Iron Pipes & Fittings",
    subcategories: []
  },
  "M.S Pipes & Fittings": {
    name: "M.S Pipes & Fittings", 
    subcategories: [
      "Square",
      "Round",
      "Rectangle", 
      "Round Bar",
      "TMT Bar",
      "Flat Bar",
      "Angle",
      "Fittings"
    ]
  },
  "House Service Connection": {
    name: "House Service Connection",
    subcategories: []
  },
  "Manhole Cover": {
    name: "Manhole Cover",
    subcategories: []
  },
  "Ductile Iron Grating": {
    name: "Ductile Iron Grating", 
    subcategories: []
  },
  "Water Meter": {
    name: "Water Meter",
    subcategories: [
      "Multi Jet Magnetic Drive Hot & Cold Water Meter",
      "Single Jet Magnetic Drive",
      "Horizontal Woltman Magnetic Drive", 
      "Electro Magnetic Flow",
      "AMR",
      "Ultrasonic"
    ]
  },
  "UPVC Agriculture Pipes / Fittings": {
    name: "UPVC Agriculture Pipes / Fittings",
    subcategories: []
  },

};

export const productsData: Product[] = [
  // DI, CI Valves - Butterfly Valve Category
  {
    id: 1,
    name: "Wafer (DI/CI)",
    description: "Butterfly valve with wafer design for DI/CI applications featuring cast iron, ductile iron construction",
    category: "Butterfly Valve",
    subcategory: "Wafer (DI/CI)",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Butterfly-valve-wafer-Product.png",
    slug: "wafer-di-ci",
    featured: true
  },
  {
    id: 2,
    name: "Concentric Flanged",
    description: "Concentric flanged butterfly valve for industrial applications",
    category: "Butterfly Valve",
    subcategory: "Concentric Flanged", 
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Butterfly-valve-concentric-flanged-product.png",
    slug: "concentric-flanged"
  },
  {
    id: 3,
    name: "Double Eccentric Flanged",
    description: "Double eccentric flanged butterfly valve for high-performance applications",
    category: "Butterfly Valve",
    subcategory: "Double Eccentric Flanged",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Butterfly-valve-double-eccentric-flanged-product.png",
    slug: "double-eccentric-flanged"
  },

  // Air Valve Category
  {
    id: 4,
    name: "Single Chamber Flanged",
    description: "Single chamber flanged air valve for water systems",
    category: "Air Valve",
    subcategory: "Single Chamber Flanged",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Air-valve-Single-chamber-flanged-product.png",
    slug: "single-chamber-flanged"
  },
  {
    id: 5,
    name: "Single Chamber Screwed",
    description: "Single chamber screwed air valve for small diameter pipes",
    category: "Air Valve",
    subcategory: "Single Chamber Screwed",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Air-valve-single-chamber-screwed-product.png",
    slug: "single-chamber-screwed"
  },
  {
    id: 6,
    name: "Single Chamber Ball Type",
    description: "Single chamber ball type air valve",
    category: "Air Valve",
    subcategory: "Single Chamber Ball Type",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Air-valve-Single-chamber-ball-type-product.png",
    slug: "single-chamber-ball-type"
  },
  {
    id: 7,
    name: "Double Chamber",
    description: "Double chamber air valve for enhanced performance",
    category: "Air Valve",
    subcategory: "Double Chamber",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/product-8.png",
    slug: "double-chamber"
  },
  {
    id: 8,
    name: "H40 Isolating",
    description: "H40 isolating air valve",
    category: "Air Valve",
    subcategory: "H40 Isolating",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/product.png",
    slug: "h40-isolating"
  },
  {
    id: 9,
    name: "Double Kinetic",
    description: "Double kinetic air valve for dynamic applications",
    category: "Air Valve",
    subcategory: "Double Kinetic",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/air-valve-double-kinetic-product.png",
    slug: "double-kinetic"
  },

  // Foot Valve Category
  {
    id: 10,
    name: "Ball Type Flanged",
    description: "Ball type flanged foot valve for suction lines",
    category: "Foot Valve",
    subcategory: "Ball Type Flanged",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/air_valve-foot_valve-product-removebg-preview.png",
    slug: "ball-type-flanged"
  },
  {
    id: 11,
    name: "Ball Type Screwed",
    description: "Ball type screwed foot valve for small installations",
    category: "Foot Valve",
    subcategory: "Ball Type Screwed",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/foot-valve-ball-type-screwd-product.png",
    slug: "ball-type-screwed"
  },

  // Strainer Valve Category
  {
    id: 12,
    name: "Y Type Flanged & Screwed",
    description: "Y type flanged and screwed strainer valve for filtration",
    category: "Strainer Valve",
    subcategory: "Y Type Flanged & Screwed",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/strainer-y-type-flanged-product.png",
    slug: "y-type-flanged"
  },
  {
    id: 13,
    name: "Basket Type",
    description: "Basket type strainer valve for debris removal",
    category: "Strainer Valve",
    subcategory: "Basket Type",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/strainer-basket-type-product.png",
    slug: "basket-type"
  },

  // HDPE Pipes & Fittings
  {
    id: 42,
    name: "HDPE Pipes & Fittings",
    description: "High-density polyethylene pipes conforming to IS 4984 for water supply and irrigation",
    category: "HDPE Pipes & Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/hdpe-pipes1.png",
    slug: "hdpe-pipes-fittings",
    featured: true
  },

  // Galvanized Iron Pipes & Fittings
  {
    id: 43,
    name: "Galvanized Iron Pipes & Fittings",
    description: "Corrosion-resistant galvanized iron pipes for water distribution",
    category: "Galvanized Iron Pipes & Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/gi-pipe-fitting.png",
    slug: "galvanized-iron-pipes-fittings"
  },



  // House Service Connection
  {
    id: 52,
    name: "House Service Connection",
    description: "Complete house service connection solutions for water supply",
    category: "House Service Connection",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd13.png",
    slug: "house-service-connection",
    featured: true
  },

  // Manhole Cover
  {
    id: 53,
    name: "Manhole Cover",
    description: "Durable manhole covers for municipal and industrial use",
    category: "Manhole Cover",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd14.png",
    slug: "manhole-cover",
    featured: true
  },

  // Ductile Iron Grating
  {
    id: 54,
    name: "Ductile Iron Grating",
    description: "High-quality ductile iron gratings for drainage and industrial applications",
    category: "Ductile Iron Grating",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/image.psd15.png",
    slug: "ductile-iron-grating",
    featured: true
  },



  // UPVC Agriculture Pipes / Fittings
  {
    id: 61,
    name: "UPVC Agriculture Pipes / Fittings",
    description: "Specialized UPVC pipes and fittings for agricultural irrigation systems",
    category: "UPVC Agriculture Pipes / Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/pvc1.png",
    slug: "upvc-agriculture-pipes-fittings",
    featured: true
  },


  // Air Valve Category
  {
    id: 66,
    name: "Double Chamber Screwed",
    description: "Double chamber screwed air valve",
    category: "Air Valve",
    subcategory: "Double Chamber Screwed",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Butterfly-valve-wafer-Product.png",
    slug: "double-chamber-screwed"
  },
  // Foot Valve Category
  // Strainer Valve Category
  // Gate Valve Category
  // Check Valve Category
  // Control Valves


  {
    id: 92,
    name: "M.S Pipes & Fittings",
    description: "Mild steel pipes for structural applications",
    category: "M.S Pipes & Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/06/ms-steel.png",
    slug: "ms-pipes-fittings"
  },






  // Gun Metal Valves & SS Valves
  {
    id: 103,
    name: "GM Ball Valve",
    description: "Gun metal ball valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "Gun Metal Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/gun-metal-valve-gun-metal-ball-valve-product.png",
    slug: "gm-ball-valve",
    featured: true
  },
  {
    id: 104,
    name: "GM Gate Valve",
    description: "Gun metal gate valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "Gun Metal Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gun-metal-valve-gun-metal-gate-valve-product-3.png",
    slug: "gm-gate-valve"
  },
  {
    id: 105,
    name: "GM Globe Valve",
    description: "Gun metal globe valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "Gun Metal Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gun-metal-valve-gun-metal-globe-valve-product-2.png",
    slug: "gm-globe-valve"
  },
  {
    id: 106,
    name: "Pressure Reducing Check Valve",
    description: "Gun metal pressure reducing check valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "Gun Metal Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/image-2.png",
    slug: "pressure-reducing-check-valve-gm"
  },
  {
    id: 107,
    name: "Horizontal Check Valve",
    description: "Gun metal horizontal check valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "Gun Metal Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gun-metal-valve-horizontal-check-valve-product.png",
    slug: "horizontal-check-valve-gm"
  },
  {
    id: 108,
    name: "Vertical Check Valve",
    description: "Gun metal vertical check valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "Gun Metal Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/image-3.png",
    slug: "vertical-check-valve-gm"
  },
  {
    id: 109,
    name: "SS Ball Valve",
    description: "Stainless steel ball valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "SS Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/stainless-steel-valve-stainless-steel-ball-valve-product.png",
    slug: "ss-ball-valve"
  },
  {
    id: 110,
    name: "CP Ball Valve",
    description: "Chrome plated ball valve for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "SS Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/stainless-steel-valve-stainless-steel-cp-ball-valve-product-1.png",
    slug: "cp-ball-valve"
  },
  {
    id: 111,
    name: "Cast Iron Ball Valve Screwed",
    description: "Cast iron ball valve screwed type for home applications with size range 15mm to 100mm",
    category: "Gun Metal Valves & SS Valves",
    subcategory: "SS Valves",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/stainless-steel-valve-cast-iron-ball-valve-screwed-product-1.png",
    slug: "cast-iron-ball-valve-screwed"
  },

  // DI, CI Pipes & Fittings
  {
    id: 112,
    name: "Socket",
    description: "Ductile iron pipe socket with superior mechanical properties including 420 MPa minimum tensile strength and 10% minimum elongation at break",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Socket",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/ductile-iron-pipe-socket-product.png",
    slug: "socket",
    featured: true
  },
  {
    id: 113,
    name: "Double Flange Pipe",
    description: "Ductile iron double flange pipe suitable for vertical pipelines, overhead tanks and elevated service reservoirs with flanged connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Double Flange Pipe",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/ductile-iron-pipe-double-flange-product-1.png",
    slug: "double-flange-pipe",
    featured: true
  },
  {
    id: 114,
    name: "Cast Iron Double Flange Pipes",
    description: "Cast iron double flange pipes manufactured as per IS 7181 Class B standards with cast iron pipe and flange construction",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Cast Iron Double Flange Pipes",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/ductile-iron-pipe-cast-iron-double-flange-pipes-product.png",
    slug: "cast-iron-double-flange-pipes"
  },
  {
    id: 115,
    name: "Puddle Wall Casting",
    description: "Specialized ductile iron puddle wall casting pipes designed for water containment and infrastructure applications",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Puddle Wall Casting",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/ductile-iron-pipe-puddle-wall-casting-pipe-product.png",
    slug: "puddle-wall-casting"
  },
  {
    id: 116,
    name: "Slotted Pipe",
    description: "Ductile iron slotted pipe designed for drainage and filtration applications with precision-engineered slots",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Slotted Pipe",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/ductile-iron-pipe-slotted-pipe-product.png",
    slug: "slotted-pipe"
  },
  {
    id: 117,
    name: "Cast Iron Pipe",
    description: "Cast iron earth pipe made from gray cast iron, historically used for water transmission and sewage systems. Ideal for earthing applications with low resistivity and high conductivity",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Cast Iron Pipe",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/cast-iron-pipe-product.png",
    slug: "cast-iron-pipe"
  },
  {
    id: 118,
    name: "Double Socket Bend 90°",
    description: "DI/CI double socket bend 90° fitting for pipe direction changes with secure socket connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fiitings-double-socket-bend-90%C2%B0-product-5.png",
    slug: "double-socket-bend-90",
    featured: true
  },
  {
    id: 119,
    name: "Double Socket Bend 45°",
    description: "DI/CI double socket bend 45° fitting for gradual pipe direction changes",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fiitings-double-socket-bend-45%C2%B0-product.png",
    slug: "double-socket-bend-45"
  },
  {
    id: 120,
    name: "Double Socket Bend 22.5°",
    description: "DI/CI double socket bend 22.5° fitting for minor pipe direction adjustments",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-double-socket-bend-22.5%C2%B0-product.png",
    slug: "double-socket-bend-22-5"
  },
  {
    id: 121,
    name: "Double Socket Bend 11.25°",
    description: "DI/CI double socket bend 11.25° fitting for precise pipe alignment",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-double-socket-bend-11.25%C2%B0-product.png",
    slug: "double-socket-bend-11-25"
  },
  {
    id: 122,
    name: "Double Socket Duck Foot Bend 90°",
    description: "DI/CI double socket duck foot bend 90° for specialized pipeline connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-double-socket-duck-foot-bend-90%C2%B0-product.png",
    slug: "double-socket-duck-foot-bend-90"
  },
  {
    id: 123,
    name: "Double Socket Concentric Tapers (Reducer)",
    description: "DI/CI double socket concentric tapers reducer for pipe size transitions",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-socket-concentric-tapers-reducer-product.png",
    slug: "double-socket-concentric-tapers-reducer"
  },
  {
    id: 124,
    name: "Flanged Spigot Tail Piece",
    description: "DI/CI flanged spigot tail piece for flange to socket connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-flanged-spigot-tail-piece-product.png",
    slug: "flanged-spigot-tail-piece"
  },
  {
    id: 125,
    name: "Flanged Socket Tail Piece",
    description: "DI/CI flanged socket tail piece for socket to flange connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-flanged-socket-tail-piece-product.png",
    slug: "flanged-socket-tail-piece"
  },
  {
    id: 126,
    name: "Double Flange Bend 90°",
    description: "DI/CI double flange bend 90° for flanged pipeline direction changes",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-flange-bend-90%C2%B0-product.png",
    slug: "double-flange-bend-90"
  },
  {
    id: 127,
    name: "Double Flange Bend 45°",
    description: "DI/CI double flange bend 45° for flanged pipeline direction changes",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-flange-bend-45%C2%B0-product.png",
    slug: "double-flange-bend-45"
  },
  {
    id: 128,
    name: "Double Flange Bend 22.5°",
    description: "DI/CI double flange bend 22.5° for flanged pipeline direction changes",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-flange-bend-22.5%C2%B0-product.png",
    slug: "double-flange-bend-22-5"
  },
  {
    id: 129,
    name: "Double Flange Bend 11.25°",
    description: "DI/CI double flange bend 11.25° for precise flanged pipeline alignment",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-flange-bend-11.25%C2%B0-product.png",
    slug: "double-flange-bend-11-25"
  },
  {
    id: 130,
    name: "Blank Flange",
    description: "DI/CI blank flange for pipeline termination and maintenance access",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-blank-flange-product.png",
    slug: "blank-flange"
  },
  {
    id: 131,
    name: "Double Flange Duck Foot Bend 90°",
    description: "DI/CI double flange duck foot bend 90° for specialized flanged connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-flange-ducj-foot-bend-90%C2%B0-product.png",
    slug: "double-flange-duck-foot-bend-90"
  },
  {
    id: 132,
    name: "Double Flange Concentric Tapers (Reducer)",
    description: "DI/CI double flange concentric tapers reducer for flanged pipe size transitions",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-double-flange-concentric-tapers-reducer-product.png",
    slug: "double-flange-concentric-tapers-reducer"
  },
  {
    id: 133,
    name: "All Socket Tees",
    description: "DI/CI all socket tees for three-way socket pipe connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-all-socket-tees-product.png",
    slug: "all-socket-tees"
  },
  {
    id: 134,
    name: "Flange on Double Socket Tees",
    description: "DI/CI flange on double socket tees for mixed connection types",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fitings-flange-on-double-socket-tees-product.png",
    slug: "flange-on-double-socket-tees"
  },
  {
    id: 135,
    name: "All Flanges Tees",
    description: "DI/CI all flanges tees for three-way flanged pipe connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-all-flanges-tees-product.png",
    slug: "all-flanges-tees"
  },
  {
    id: 136,
    name: "Collars",
    description: "DI/CI collars for pipe joint reinforcement and connection",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-collars-product.png",
    slug: "collars"
  },
  {
    id: 137,
    name: "MJ Collars",
    description: "DI/CI mechanical joint collars for secure pipe connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-mjcollars-product.png",
    slug: "mj-collars"
  },
  {
    id: 138,
    name: "Bell Mouth",
    description: "DI/CI bell mouth fitting for smooth water flow transitions",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-bell-mouth-product.png",
    slug: "bell-mouth"
  },
  {
    id: 139,
    name: "Dismantling Joint",
    description: "DI/CI dismantling joint for easy pipe maintenance and removal",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-dismantling-joint-product.png",
    slug: "dismantling-joint"
  },
  {
    id: 140,
    name: "All Socket Cross",
    description: "DI/CI all socket cross for four-way socket pipe connections",
    category: "DI, CI Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/di-ci-fittings-all-socket-cross-product.png",
    slug: "all-socket-cross"
  },

  // M.S Pipes & Fittings
  {
    id: 141,
    name: "Square (MS)",
    description: "Mild steel square pipes for construction and industrial applications",
    category: "M.S Pipes & Fittings",
    subcategory: "Square",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/mild-steel-pipe-square-product.png",
    slug: "ms-square",
    featured: true
  },
  {
    id: 142,
    name: "Round (MS/GI)",
    description: "Round mild steel and galvanized iron pipes for diverse applications",
    category: "M.S Pipes & Fittings",
    subcategory: "Round",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/01/mild-steel-pipe-round-product.png",
    slug: "ms-round"
  },
  {
    id: 143,
    name: "Rectangle (MS/GI)",
    description: "Rectangular mild steel pipes for structural and construction use",
    category: "M.S Pipes & Fittings",
    subcategory: "Rectangle",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/mild-steel-pipe-rectangle-product.png",
    slug: "ms-rectangle"
  },
  {
    id: 144,
    name: "Round Bar (MS/GI)",
    description: "Round steel bars for manufacturing and construction reinforcement",
    category: "M.S Pipes & Fittings",
    subcategory: "Round Bar",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/mild-steel-pipe-round-bar-product.png",
    slug: "ms-round-bar"
  },
  {
    id: 145,
    name: "TMT Bar (MS/GI)",
    description: "Thermo-mechanically treated bars for earthquake-resistant construction",
    category: "M.S Pipes & Fittings",
    subcategory: "TMT Bar",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/mild-steel-pipe-tmt-bar-product.png",
    slug: "ms-tmt-bar"
  },
  {
    id: 146,
    name: "Flat Bar (MS/GI)",
    description: "Flat steel bars for fabrication and construction applications",
    category: "M.S Pipes & Fittings",
    subcategory: "Flat Bar",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/mild-steel-pipe-flat-bar-product.png",
    slug: "ms-flat-bar"
  },
  {
    id: 147,
    name: "Angle (MS/GI)",
    description: "Steel angle bars for structural support and corner reinforcement",
    category: "M.S Pipes & Fittings",
    subcategory: "Angle",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/mild-steel-pipe-angle-product.png",
    slug: "ms-angle"
  },
  {
    id: 148,
    name: "M.S Fittings",
    description: "Comprehensive range of mild steel fittings for pipe connections",
    category: "M.S Pipes & Fittings",
    subcategory: "Fittings",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/mild-steel-fitting-elbow-product.png",
    slug: "ms-fittings",
    featured: true
  },

  // Water Meter
  {
    id: 149,
    name: "Multi Jet Magnetic Drive Hot & Cold Water Meter",
    description: "Advanced multi jet water meter for hot and cold water measurement",
    category: "Water Meter",
    subcategory: "Multi Jet Magnetic Drive Hot & Cold Water Meter",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/1.-NBDMH.png",
    slug: "multi-jet-magnetic-drive",
    featured: true
  },
  {
    id: 150,
    name: "Single Jet Magnetic Drive",
    description: "Compact single jet water meter for residential applications",
    category: "Water Meter",
    subcategory: "Single Jet Magnetic Drive",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Water-meter-single-jet-water-meter-nbsjm-15-1-product-1.png",
    slug: "single-jet-magnetic-drive"
  },
  {
    id: 151,
    name: "Horizontal Woltman Magnetic Drive",
    description: "High capacity horizontal Woltman water meter for large applications",
    category: "Water Meter",
    subcategory: "Horizontal Woltman Magnetic Drive",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Water-meter-horizontal-woltman-magnetic-drive-product-1.png",
    slug: "horizontal-woltman-magnetic-drive"
  },
  {
    id: 152,
    name: "Electro Magnetic Flow",
    description: "Intelligent electromagnetic flow meter for industrial applications",
    category: "Water Meter",
    subcategory: "Electro Magnetic Flow",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Water-meter-electro-magnetic-flow-product.png",
    slug: "electro-magnetic-flow",
    featured: true
  },
  {
    id: 153,
    name: "AMR",
    description: "Automatic meter reading system for remote water monitoring",
    category: "Water Meter",
    subcategory: "AMR",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/Water-meter-amr-product-1.png",
    slug: "amr"
  },
  {
    id: 154,
    name: "Ultrasonic",
    description: "Non-contact ultrasonic water meter for high precision measurement",
    category: "Water Meter",
    subcategory: "Ultrasonic",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/water-meter-ultrasonic-product.png",
    slug: "ultrasonic"
  },
  // Gate Valve Products
  {
    id: 155,
    name: "Rising Stern Seated",
    description: "Resilient wedge gate valve with rising stem design for water applications",
    category: "Gate Valve",
    subcategory: "Rising Stern Seated",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gate-valve-rising-sterm-seated-product.png",
    slug: "rising-stern-seated"
  },
  {
    id: 156,
    name: "Non Rising Stern Seated",
    description: "Gate valve with non-rising stem design for compact installation",
    category: "Gate Valve",
    subcategory: "Non Rising Stern Seated",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gate-valve-non-rising-sterm-seated-product.png",
    slug: "non-rising-stern-seated"
  },
  {
    id: 157,
    name: "Metal Seated",
    description: "Metal seated gate valve for high temperature applications",
    category: "Gate Valve",
    subcategory: "Metal Seated",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gate-valve-metal-seated-product.png",
    slug: "metal-seated"
  },
  {
    id: 158,
    name: "Actuator Type",
    description: "Gate valve with actuator for automated operation",
    category: "Gate Valve",
    subcategory: "Actuator Type",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gate-valve-acutuator-type-product.png",
    slug: "actuator-type"
  },
  {
    id: 159,
    name: "CI Sluice Valve",
    description: "Cast iron sluice valve for water distribution systems",
    category: "Gate Valve",
    subcategory: "CI Sluice Valve",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/gate-valve-ci-sluice-valve-product-1.png",
    slug: "ci-sluice-valve"
  },
  // Check Valve Products
  {
    id: 160,
    name: "Single Wafer",
    description: "Single wafer check valve for space-saving installation",
    category: "Check Valve",
    subcategory: "Single Wafer",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/check-valve-single-wafer-product.png",
    slug: "single-wafer"
  },
  {
    id: 161,
    name: "Dual Plate Wafer",
    description: "Dual plate wafer check valve for low pressure drop",
    category: "Check Valve",
    subcategory: "Dual Plate Wafer",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/check-valve-dual-plate-wafer-product.png",
    slug: "dual-plate-wafer"
  },
  {
    id: 162,
    name: "Dual Plate Flanged",
    description: "Dual plate flanged check valve for high pressure applications",
    category: "Check Valve",
    subcategory: "Dual Plate Flanged",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/check-valve-dual-plate-flanged-product.png",
    slug: "dual-plate-flanged"
  },
  {
    id: 163,
    name: "Swing",
    description: "Swing check valve for water distribution systems",
    category: "Check Valve",
    subcategory: "Swing",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/check-valve-swing-product.png",
    slug: "swing"
  },
  {
    id: 164,
    name: "Swing With Rubber Disc",
    description: "Swing check valve with rubber disc for tight sealing",
    category: "Check Valve",
    subcategory: "Swing With Rubber Disc",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/check-valve-swing-check-valve-with-rubber-disc-product.png",
    slug: "swing-with-rubber-disc"
  },
  {
    id: 165,
    name: "Ball",
    description: "Ball check valve for low pressure applications",
    category: "Check Valve",
    subcategory: "Ball",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/check-valve-ball-product.png",
    slug: "ball"
  },
  {
    id: 166,
    name: "NRV Reflux Valve",
    description: "Non-return reflux valve for preventing reverse flow",
    category: "Check Valve",
    subcategory: "NRV Reflux Valve",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/check-valve-NRV-reflux-valve-product.png",
    slug: "nrv-reflux-valve"
  },
  {
    id: 167,
    name: "Tilting Disc",
    description: "Tilting disc check valve for large diameter applications",
    category: "Check Valve",
    subcategory: "Tilting Disc",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/check-valve-tilting-disc-product.png",
    slug: "tilting-disc"
  },
  // Control Valve Products
  {
    id: 168,
    name: "Float Control Valve",
    description: "Float control valve for automatic water level control",
    category: "Float Control Valve",
    image: "https://mercuryvalves.in/wp-content/uploads/2023/12/float-control-valve-product.png",
    slug: "float-control-valve"
  },
  {
    id: 169,
    name: "Flow Control Valve",
    description: "Flow control valve for regulating flow rates",
    category: "Flow Control Valve",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/flow-control-valve-product.png",
    slug: "flow-control-valve"
  },
  {
    id: 170,
    name: "Pressure Relief Valve",
    description: "Pressure relief valve for system safety and protection",
    category: "Pressure Relief Valve",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/pressure-relief-valve-product.png",
    slug: "pressure-relief-valve"
  },
  {
    id: 171,
    name: "Pressure Reducing Valve",
    description: "Pressure reducing valve for pressure regulation",
    category: "Pressure Reducing Valve",
    image: "https://mercuryvalves.in/wp-content/uploads/2024/02/pressure-reducing-valve-product.png",
    slug: "pressure-reducing-valve"
  }
];
