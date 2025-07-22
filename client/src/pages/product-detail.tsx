import { useParams } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import { productCategories } from "@/data/products";
import ZoomMagnifier from "@/components/ui/zoom-magnifier";

interface ProductDetail {
  id: string;
  name: string;
  category: string;
  mainImage: string;
  specifications?: {
    size?: string;
    material?: string;
    application?: string;
    dimensions?: string;
    threads?: string;
    finish?: string;
    pressureTest?: string;
    alignment?: string;
    marking?: string;
    [key: string]: string | undefined;
  };
  features?: string[];
  applicationsTable?: Record<string, string[]>;
  pipeSizesTable?: { size: string; length: string; }[];
  fittingsTable?: { no: string; product: string; sizes: string; }[];
  fittingImages?: { name: string; image: string; }[];
  partsAndMaterials?: {
    no: string;
    part: string;
    material: string;
  }[];
  technicalDrawings?: string[];
  dimensionPdfUrl?: string;
  dimensionPdfUrls?: string[];
  additionalImages?: string[];
  variants?: {
    name: string;
    image: string;
    specifications?: {
      size?: string;
      material?: string;
      application?: string;
      pressureRating?: string;
      certification?: string;
      color?: string;
      shape?: string;
      loadBearing?: string;
      outletSize?: string;
      strapSize?: string;
      lpm?: string;
      dimension?: string;
      clipRing?: string;
      thrustRing?: string;
      oRing?: string;
      insert?: string;
      [key: string]: string | undefined;
    };
    drawing?: string;
    dimensionImage?: string;
    dimensionPdfUrl?: string;
  }[];
}

const productDetails: Record<string, ProductDetail> = {
  "wafer-di-ci": {
    id: "wafer-di-ci",
    name: "Wafer (DI/CI)",
    category: "Butterfly Valve",
    mainImage: "/Images/DI CI VALVES/Butter fly valve/wafer valve/Butterfly-valve-wafer-Product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Cast iron,Ductile iron,Carbon steel,Stainless steel" },
      { no: "2", part: "Seat", material: "NBR, EPDM, PTFE, Viton, Neoprene Hypalon, Silicon" },
      { no: "3", part: "Lower shaft", material: "Stainless steel 416, 316, 304" },
      { no: "4", part: "Disc", material: "Ductile iron+Ni (Nylon/Epoxy), Cf8 CF8+PTFE (PFA) CF8M, CF8M+PTFE(PFA)" },
      { no: "5", part: "Upper shaft", material: "Stainless steel 416, 316, 304" },
      { no: "6", part: "Locating Pin", material: "Carbon steel" },
      { no: "7", part: "Bushing", material: "PTFE" },
      { no: "8", part: "O ring", material: "NBR, EPDM" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Butter fly valve/wafer valve/drawing-1-5-600x740.jpg",
      "/Images/DI CI VALVES/Butter fly valve/wafer valve/drawing-2-5-600x740.jpg",
      "/Images/DI CI VALVES/Butter fly valve/wafer valve/Butterfly-valve-wafer-drawing-3-600x740 (1).jpg"
    ],
    dimensionPdfUrl: "/pdf/Dimension (2).pdf",
  },
  "concentric-flanged": {
    id: "concentric-flanged",
    name: "Concentric Flanged",
    category: "Butterfly Valve",
    mainImage: "/Images/DI CI VALVES/Butter fly valve/Concentric Fanged/Butterfly-valve-concentric-flanged-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Seat", material: "NBR, EPDM" },
      { no: "3", part: "Shaft", material: "Stainless steel 416, 316, 304" },
      { no: "4", part: "Disc", material: "Ductile iron+Ni, Cf8, CF8M, Bronze" },
      { no: "5", part: "Pin", material: "Stainless steel" },
      { no: "6", part: "Bushing", material: "PTFE, Bronze" },
      { no: "7", part: "O ring", material: "NBR, EPDM" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Butter fly valve/Concentric Fanged/drawing-2-6.jpg",
      "/Images/DI CI VALVES/Butter fly valve/Concentric Fanged/Butterfly-valve-concentric-flanged-drawing-3-1.jpg",
      "/Images/DI CI VALVES/Butter fly valve/Concentric Fanged/drawing-1-6.jpg"
    ],
    dimensionPdfUrl: "/pdf/Dimension-1.pdf"
  },
  "double-eccentric-flanged": {
    id: "double-eccentric-flanged",
    name: "Double Eccentric Flanged",
    category: "Butterfly Valve",
    mainImage: "/Images/DI CI VALVES/Butter fly valve/double ecentric flanged/Butterfly-valve-double-eccentric-flanged-product.png",
    partsAndMaterials: [
      { no: "1", part: "Gear box", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Packing gland", material: "QALg-2" },
      { no: "3", part: "Adjusting bush", material: "QAL9-2" },
      { no: "4", part: "Shaft bearing", material: "QAL9-2" },
      { no: "5", part: "Upper shaft", material: "SS420" },
      { no: "6", part: "Body", material: "Ductile iron" },
      { no: "7", part: "Disc seal ring", material: "EPDM" },
      { no: "8", part: "Retainer ring", material: "SS304" },
      { no: "9", part: "Expansion pin", material: "SS420" },
      { no: "10", part: "Disc", material: "Ductile iron" },
      { no: "11", part: "Lower shaft", material: "SS420" },
      { no: "12", part: "Shaft cover", material: "Ductile iron" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Butter fly valve/double ecentric flanged/drawing-1-7.jpg",
      "/Images/DI CI VALVES/Butter fly valve/double ecentric flanged/drawing-2-7.jpg"
    ],
    dimensionPdfUrl: "/pdf/Dimension-2.pdf"
  },
  "hdpe-pipes-fittings": {
    id: "hdpe-pipes-fittings",
    name: "HDPE Pipes & Fittings",
    category: "HDPE Pipes & Fittings",
    mainImage: "/Images/HDPE PIPE AND FITTINGS/Hdpe-pipe-and-fitting-hdpe-pipe-drawing-768x165.jpg",
    specifications: {
      material: "High Density Polyethylene conforming to IS 4984",
      application: " Strong and durable, Light weight, Long lasting and maintenance free",
      size: "20mm to 630mm"
    },
    features: [
      "High dependability and tested service effectiveness",
      "Outstanding resistance to chemicals and corrosion",
      "High-quality flow characteristics",
      "Superior impact resistance",
      "Extended service life",
      "Can be joined via coupling joint, butt, electro, socket, fusion, or flange"
    ],
    pipeSizesTable: [
      { size: "20 to 50 mm", length: "In coil of 100, 200, 500 & 1000 meter" },
      { size: "63 to 75 mm", length: "In coil of 100, 200 & 300 meter" },
      { size: "90 to 110 mm", length: "In coil of 50, 100 meter. In straight length of 6 to 12 meter" },
      { size: "125 to 630 mm", length: "Straight Length 6 to 12 meter" }
    ],
    fittingsTable: [
      { no: "1", product: "Coupled bend", sizes: "63mm, 75mm, 90mm & 110mm" },
      { no: "2", product: "Coupled tee", sizes: "63mm, 75mm, 90mm & 110mm" },
      { no: "3", product: "PCN", sizes: "63mm, 75mm, 90mm & 110mm" },
      { no: "4", product: "End cap", sizes: "63mm, 75mm, 90mm & 110mm" },
      { no: "5", product: "Clamp", sizes: "63mm, 75mm, 90mm & 110mm" },
      { no: "6", product: "Ring", sizes: "63mm, 75mm, 90mm & 110mm" },
      { no: "7", product: "Riser pipe", sizes: "3/4\"" }
    ],
    fittingImages: [
      { name: "Short Neck pipe End", image: "/Images/HDPE PIPE AND FITTINGS/1.png" },
      { name: "Long Neck Pipe End", image: "/Images/HDPE PIPE AND FITTINGS/2.png" },
      { name: "Slip-on Flange", image: "/Images/HDPE PIPE AND FITTINGS/3.png" },
      { name: "Pipe Bore Flange", image: "/Images/HDPE PIPE AND FITTINGS/4.png" },
      { name: "Blind Flange", image: "/Images/HDPE PIPE AND FITTINGS/5.png" },
      { name: "End Cap", image: "/Images/HDPE PIPE AND FITTINGS/6.png" },
      { name: "Tail Piece Flange 180 mm Long", image: "/Images/HDPE PIPE AND FITTINGS/7.png" },
      { name: "Tail Piece Flange", image: "/Images/HDPE PIPE AND FITTINGS/8.png" },
      { name: "Bend", image: "/Images/HDPE PIPE AND FITTINGS/9.png" },
      { name: "Reducer", image: "/Images/HDPE PIPE AND FITTINGS/10.png" },
      { name: "Tee", image: "/Images/HDPE PIPE AND FITTINGS/11.png" },
      { name: "Crosses", image: "/Images/HDPE PIPE AND FITTINGS/12.png" },
      { name: "Weld Neck", image: "/Images/HDPE PIPE AND FITTINGS/13.png" },
      { name: "Sandwitch", image: "/Images/HDPE PIPE AND FITTINGS/14.png" },
      { name: "Electro Fusion Coupler", image: "/Images/HDPE PIPE AND FITTINGS/15.png" },
      { name: "Electro Fusion Elbow", image: "/Images/HDPE PIPE AND FITTINGS/16.png" },
      { name: "Electro Fusion Tee", image: "/Images/HDPE PIPE AND FITTINGS/17.png" },
      { name: "Electro Fusion Saddle", image: "/Images/HDPE PIPE AND FITTINGS/18.png" },
      { name: "Electro Fusion End Cap", image: "/Images/HDPE PIPE AND FITTINGS/19.png" },
      { name: "Puddle", image: "/Images/HDPE PIPE AND FITTINGS/20.png" }
    ],
    additionalImages: [
      "/Images/HDPE PIPE AND FITTINGS/Hdpe-pipe-and-fitting-hdpe-pipe-drawing-768x165.jpg",
      "/Images/Hdpe-pipe-and-fitting-hdpe-pipe-backgound-2-scaled.jpg",
      "/Images/HDPE-Pipe-Fittings-hdpe-fitting-group.jpg"
    ],
    applicationsTable: {
      "Water Supply": [
        "Transportation and Distribution system (Gravity & pressure system)",
        "House service connection for municipal water bodies and SEZ layouts"
      ],
      "Industrial": [
        "Disposal of effluents chemicals and treated / untreated water",
        "As hydro transport system for handling and conveyance of iron, coal and cement slurry in mines",
        "For conveyance of edible oil, fruit pulps, juice, milks and other liquid food materials",
        "As a ventilation and air conditioning duct"
      ],
      "Environmental Protection": [
        "Underground drainage and sewage application / rehabilitation of existing sewers",
        "Effluent and waste treatment plants",
        "Dust suppression piping system in cement industry",
        "Sand slurry disposal pipes in dredging",
        "De-gassing pipe in water effluent marine outfalls"
      ],
      "Agriculture": [
        "Column piping for submersible and jet pumps",
        "Suction and Delivery Pipes",
        "Sprinkler irrigation system",
        "Lift irrigation",
        "Insecticide spraying"
      ],
      "Other": [
        "Transportation of chemicals solids, gas and oils",
        "Underwater pipelines desalination plants"
      ]
    }
  },
  "galvanized-iron-pipes-fittings": {
    id: "galvanized-iron-pipes-fittings",
    name: "Galvanized Iron Pipes & Fittings",
    category: "Galvanized Iron Pipes & Fittings",
    mainImage: "/Images/GI PIPE AND FITTINGS/pipe-768x759.png",
    specifications: {
      material: "Black heart malleable as per IS 14329/1995 GR : BM : 300",
      dimensions: "Malleable cast iron pipe fittings as per IS 1879/87",
      threads: "Threads as per IS 554 1975 and gauges practice as per IS 8999",
      finish: "Galvanized finish tested in accordance with IS 4759/1985, IS 6745, IS 2633",
      pressureTest: "Internal hydraulic pressure of 2.1 Mpa (21.2 Kg/cm2 or 300 Lbs/inch2)",
      alignment: "Thread angles of fittings are 90° within tolerance of ±1/2%",
      marking: "Each fitting marked with Mercury Valves and Pipes trademark"
    },
    dimensionPdfUrl: "/pdf/gi-pipe.pdf",
    variants: [
      {
        name: "Elbow",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-elbow-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-elbow-dimensions.pdf"
      },
      {
        name: "Reducing Elbow",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-reducing-elbow-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-reducing-elbow-dimensions.pdf"
      },
      {
        name: "Elbow Male & Female",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-elbow-male-female-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-elbow-male-female-dimensions.pdf"
      },
      {
        name: "Side Outlet Elbow",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-side-outlet-elbow-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-elbow-male-female-dimensions-1.pdf"
      },
      {
        name: "Tees",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-tees-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-tees-dimensions.pdf"
      },
      {
        name: "Reducing Tees",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-reducing-tees-product-2.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-tees-dimensions (1).pdf"
      },
      {
        name: "Backnuts",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-backnuts-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-backnuts-dimensions.pdf"
      },
      {
        name: "Crosses",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-crosses-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-crosses-dimensions.pdf"
      },
      {
        name: "Caps",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-caps-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-caps-dimensions.pdf"
      },
      {
        name: "Sockets Couplings",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-sockets-couplings-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-sockets-couplings-dimensions.pdf"
      },
      {
        name: "Reducing Sockets",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-reducing-sockets-product-1.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-reducing-sockets-dimensions-1.pdf"
      },
      {
        name: "Hexagon Bushes",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-hexagon-bushes-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-hexagon-bushes-dimensions.pdf"
      },
      {
        name: "Plugs",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-plugs-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-plugs-dimensions.pdf"
      },
      {
        name: "Unions",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-unions-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-unions-dimensions.pdf"
      },
      {
        name: "Hexagonal Nipples",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-hexagonal-nipples-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-unions-dimensions (1).pdf"
      },
      {
        name: "Bends 90°",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-bends-90°-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-bends-90°-dimensions.pdf"
      },
      {
        name: "Bends 45°",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-bends-45°-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-reducing-tees-dimensions.pdf"
      },
      {
        name: "Side Outlet Tees",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-side-outlet-tees-couplings-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-side-outlet-tees-dimensions.pdf"
      },
      {
        name: "Barrel Nipple",
        image: "/Images/GI PIPE AND FITTINGS/galvanized-iron-fitting-barrel-nipple-couplings-product.png",
        specifications: {
          size: "15mm to 150mm",
          material: "Galvanized iron",
          application: "Residential"
        },
        dimensionPdfUrl: "/pdf/galvanized-iron-fitting-barrel-nipples-dimensions.pdf"
      }
    ]
  },
  "house-service-connection": {
    id: "house-service-connection",
    name: "House Service Connection",
    category: "House Service Connection",
    mainImage: "/Images/HSC CONNECTION/r-768x380.jpg",
    specifications: {
      material: "Polypropylene compression fittings",
      application: "Water distribution lines, house service connections, industrial applications, mining industry, leisure parks, golf courses, camping grounds, farming, greenhouses, high-end irrigation",
      pressureRating: "PN 16"
    },
    features: [
      "Fast and Easy Installation - Factory assembled fittings are supplied in ready to use form, if necessary unscrew the quick joint nut for easy pipe insertion. As there is no contact between the clip ring and the pipe during insertion the installation of bigger dimensions become even easier. It doesn't need any special tools or equipment for the installation.",
      "Tamper Proof Design - Holders are provided to seal the joint. This special design feature ensures the temper proof joint and prevents the use of illegal un-accounted water thus save water.",
      "Safe Design and Longer Life - The special design and the use of quality raw materials ensures high pressure and pull-out resistance even in case of water hammer. As the clip ring is bitting the pipe it provides a high pull of resistance and for perfect sealing resistance the packing pressure bush pushes the lip gasket towards the pipe. The design of modular component provides ease of maintenance."
    ],
    variants: [
      {
        name: "MDPE House",
        image: "/Images/HSC CONNECTION/House-service-connections-MDPE-hose-product.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Elbow 90°",
        image: "/Images/HSC CONNECTION/House-service-connections-elbow-90°-product.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Flow Control Valve",
        image: "/Images/HSC CONNECTION/House-service-connections-flow-control-valve-product-1.png",
        specifications: {
          size: "1/2\", 3/4\",1\"",
          material: "SS-304, SS-316 or Brass IS319",
          certification: "FCRI approved"
        }
      },
      {
        name: "Male Threaded Elbow-MTO",
        image: "/Images/HSC CONNECTION/House-service-connections-male-threaded-elbow-mto-product.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          insert: "SS304, Brass or plastic",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Female Threaded Elbow-FTO",
        image: "/Images/HSC CONNECTION/House-service-connections-female-threaded-elbow-fto-product.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          insert: "SS304, Brass or plastic",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Both Side Adaptor-BSA",
        image: "/Images/HSC CONNECTION/House-service-connections-both-side-adaptor-bsa-product.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Male Threaded Adaptor-MTA",
        image: "/Images/HSC CONNECTION/House-service-connections-male-threaded-adapter-mta-product-1.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          insert: "SS304, Brass or plastic",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Female Threaded Adapter-FTA",
        image: "/Images/HSC CONNECTION/House-service-connections-female-threaded-adapter-fta-product-1.png",
        specifications: {
          size: "20mm x 20mm (1/2\")",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          insert: "SS304, Brass or plastic",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Composite Strap Saddle",
        image: "/Images/HSC CONNECTION/House-service-connections-composite-strap-saddle-product.png",
        specifications: {
          outletSize: "1/2\", 3/4\"&1\"",
          strapSize: "80mm to 250mm",
          material: "HDPE",
          ruberBush: "NBR",
          insert: "SS304, Brass or plastic",
          dWasher: "HDPE/Nylon",
          strap: "SS304",
          fasteners: "SS304",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Ductile Iron Strap Saddle",
        image: "/Images/HSC CONNECTION/House-service-connections-ductile-iron-strap-saddle-product.png",
        specifications: {
          outletSize: "1/2\", 3/4\"&1\"",
          strapSize: "80mm to 250mm",
          material: "Ductile iron SGI400/12",
          ruberBush: "NBR",
          dWasher: "HDPE/Nylon",
          strap: "SS304",
          fasteners: "SS304",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Electro Fusion Saddle",
        image: "/Images/HSC CONNECTION/House-service-connections-electro-fussion-saddle-product-1.png",
        specifications: {
          outletSize: "1/2\", 3/4\"&1\"",
          saddleSize: "90mm to 200mm",
          material: "HDPE",
          insert: "SS304, Brass or iron",
          terminalPin: "Brass",
          pressureRating: "PN 16"
        }
      },
      {
        name: "PP Clamp Saddle",
        image: "/Images/HSC CONNECTION/House-service-connections-pp-clamp-saddle-product.png",
        specifications: {
          outletSize: "1/2\", 3/4\"&1\"",
          clampSize: "63mm, 75mm, 90mm, 110mm, 125mm, 140mm & 160mm",
          material: "Polypropylene",
          ruberBush: "SS304, Brass or plastic",
          fasteners: "SS304/MS",
          pressureRating: "PN 16"
        }
      },
      {
        name: "U-PVC Female Threaded Compression Ball Valve",
        image: "/Images/HSC CONNECTION/House-service-connections-upvc-female-threaded-compession-ball-valve-product.png",
        specifications: {
          size: "20mm (1/2\")",
          material: "(Body, Knob,Stem, Flange, Ball), UPVC, Polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Flow Control Valve",
        image: "/Images/HSC CONNECTION/House-service-connections-flow-control-valve-product-1.png",
        specifications: {
          size: "1/2\", 3/4\",1\"",
          lpm: "5, 10, 15, 20, & 25",
          material: "SS-304, SS-316 or Brass IS319, works on float concept with NRV",
          certification: "FCRI approved"
        }
      },
      {
        name: "Forged Brass Ferrule",
        image: "/Images/HSC CONNECTION/House-service-connections-forged-brass-ferrule-product-1.png",
        specifications: {
          size: "1/2\", 3/4\",1\"",
          material: "Brass IS319 works on screw type concept",
          pressureRating: "PN 16"
        }
      },
      {
        name: "PP Ferrule",
        image: "/Images/HSC CONNECTION/House-service-connections-pp-ferrule-product.png",
        specifications: {
          size: "1/2\"",
          material: "(Body, Nut/Cap)-polypropylene",
          clipRing: "POM (Acetylic resin)",
          thrustRing: "Polypropylene",
          oRing: "NBR",
          insert: "SS304, Brass or plastic",
          pressureRating: "PN 16"
        }
      },
      {
        name: "Water Meter",
        image: "/Images/HSC CONNECTION/House-service-connections-water-meter-product-1.png",
        specifications: {
          material: "PP",
          color: "Black/Blue",
          dimension: "290L x 240w x 175H (Internal dimensions)",
          strength: "Box withstands 100kg static load for 1hr",
          shape: "Rectangular",
          inletOutlet: "from 1/2\" to 1\"",
          locking: "with self-locking facility extra locking provision on top",
          loadCapacity: "100kg for 1hr"
        }
      }
    ]
  },
  "manhole-cover": {
    id: "manhole-cover",
    name: "Manhole Cover",
    category: "Manhole Cover",
    mainImage: "", // Not used, but required by type
    variants: [
      {
        name: "Square",
        image: "/Images/MANHOLE COVER/manhole-cover-square-product.png",
        dimensionImage: "/attached_assets/image_1751872516627.png",
        specifications: {
          size: "400x400mm",
          loadClass: "B-125",
          material: "Ductile Iron"
        }
      },
      {
        name: "Rectangle",
        image: "/Images/MANHOLE COVER/manhole-cover-rectangle-product.png",
        dimensionImage: "/attached_assets/image_1751872541453.png",
        specifications: {
          size: "300x600mm",
          loadClass: "C-250",
          material: "Ductile Iron"
        }
      },
      {
        name: "Circle",
        image: "/Images/MANHOLE COVER/manhole-cover-circle-product.png",
        dimensionImage: "/attached_assets/image_1751872565429.png",
        specifications: {
          size: "600mm dia",
          loadClass: "D-400",
          material: "Ductile Iron"
        }
      }
    ]
  },
  "ductile-iron-grating": {
    id: "ductile-iron-grating",
    name: "Ductile Iron Grating",
    category: "Ductile Iron Grating",
    mainImage: "/Images/DI GRATING/ductile-iron-grating-product.png",
    specifications: {
      material: "Ductile Iron",
      size: "As per table",
      usage: "Runways, Highways, Racetracks, Dockyards Storm Water Drainage, Industrial, Domestic Defence"
    }
  },
  "upvc-agriculture-pipes-fittings": {
    id: "upvc-agriculture-pipes-fittings",
    name: "UPVC Agriculture Pipes / Fittings",
    category: "UPVC Agriculture Pipes / Fittings",
    mainImage: "/Images/upvc-agriculture-pipes-and-fittings-group-1024x683.jpg",
    specifications: {
      material: "Unplasticized Polyvinyl Chloride (uPVC)",
      application: "Drinking water distribution, sewer systems, electrical installations",
      density: "1.40-1.46 (one-fifth that of steel pipes)"
    },
    features: [
      "Leak proof joints and easy jointing",
      "Easy and quick jointing with solvent cement",
      "Hygienic for carrying potable water",
      "Minimum flow head losses due to smooth inner surface",
      "No sediment deposition and no reduction in cross-sectional area",
      "Resistant to UV rays to certain limit",
      "Full range of fittings available",
      "Self extinguishing",
      "Lower material, transportation and installation cost",
      "Light weight facilitates installation in difficult and remote places"
    ],
    dimensionPdfUrl: "/pdf/upvc-agriculture-pipes-and-fittings-dimensions.pdf",
    applicationsTable: {
      "Drinking Water": [
        "Pipe distribution system, both main and distribution lines"
      ],
      "Sewer Systems": [
        "Sewer and discharge pipe systems due to non-metallic nature",
        "Totally resistant to corrosion",
        "Do not add any colour, odor or taste to transported fluids"
      ],
      "Electrical": [
        "Flame retardant material prevents flame travel",
        "Added safety for electrical installations domestic and industrial"
      ]
    }
  },
  
  "gm-ball-valve": {
    id: "gm-ball-valve",
    name: "GM Ball Valve",
    category: "Gun Metal Valves",
    mainImage: "/Images/GM AND SS VALVES/GUN METAL VALVE/GM BALL VALVE/gun-metal-valve-gun-metal-ball-valve-product.png",
    specifications: {
      size: "15mm to 100mm",
      material: "Gun metal & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/GUN METAL VALVE/GM BALL VALVE/stainless-steel-valve-stainless-steel-ball-valve-draw-600x654.jpg"
    ]
  },
  "gm-gate-valve": {
    id: "gm-gate-valve",
    name: "GM Gate Valve",
    category: "Gun Metal Valves",
    mainImage: "/Images/GM AND SS VALVES/GUN METAL VALVE/GM GATE VALVE/gun-metal-valve-gun-metal-gate-valve-product-3.png",
    specifications: {
      size: "15mm to 100mm",
      material: "Gun metal & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/GUN METAL VALVE/GM GATE VALVE/gun-metal-valve-gun-metal-gate-valve-drawing-1.jpg"
    ]
  },
  "gm-globe-valve": {
    id: "gm-globe-valve",
    name: "GM Globe Valve",
    category: "Gun Metal Valves",
    mainImage: "/Images/GM AND SS VALVES/GUN METAL VALVE/GM GLOBE VALVEW/gun-metal-valve-gun-metal-globe-valve-product-2.png",
    specifications: {
      size: "15mm to 100mm",
      material: "Gun metal & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/GUN METAL VALVE/GM GLOBE VALVEW/gun-metal-valve-gun-metal-globe-valve-drawing.jpg"
    ]
  },
  "pressure-reducing-check-valve-gm": {
    id: "pressure-reducing-check-valve-gm",
    name: "Pressure Reducing Check Valve",
    category: "Gun Metal Valves",
    mainImage: "/Images/GM AND SS VALVES/GUN METAL VALVE/PRESSURE REDUCING CHECK VALVE/image-2.png",
    specifications: {
      size: "15mm to 100mm",
      material: "Gun metal & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/GUN METAL VALVE/PRESSURE REDUCING CHECK VALVE/gun-metal-valve-pressure-reducing-valve-drawing.jpg"
    ]
  },
  "horizontal-check-valve-gm": {
    id: "horizontal-check-valve-gm",
    name: "Horizontal Check Valve",
    category: "Gun Metal Valves",
    mainImage: "/Images/GM AND SS VALVES/GUN METAL VALVE/HORIZONTAL CHECK VALVE/gun-metal-valve-horizontal-check-valve-product.png",
    specifications: {
      size: "15mm to 100mm",
      material: "Gun metal & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/GUN METAL VALVE/HORIZONTAL CHECK VALVE/gun-metal-valve-horizontal-check-valve-drawing-1.jpg"
    ]
  },
  "vertical-check-valve-gm": {
    id: "vertical-check-valve-gm",
    name: "Vertical Check Valve",
    category: "Gun Metal Valves",
    mainImage: "/Images/GM AND SS VALVES/GUN METAL VALVE/VERTICAL CHECK VALVE/image-3.png",
    specifications: {
      size: "15mm to 100mm",
      material: "Gun metal & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/GUN METAL VALVE/VERTICAL CHECK VALVE/gun-metal-valve-vertical-check-valve-drawing-1.jpg"
    ]
  },
  "ss-ball-valve": {
    id: "ss-ball-valve",
    name: "SS Ball Valve",
    category: "SS Valves",
    mainImage: "/Images/GM AND SS VALVES/SS VALVE/SS BALL VALVE/stainless-steel-valve-stainless-steel-ball-valve-product.png",
    specifications: {
      size: "15mm to 100mm",
      material: "SS valve & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/SS VALVE/SS BALL VALVE/stainless-steel-valve-stainless-steel-ball-valve-draw-1-600x654.jpg"
    ]
  },
  "cp-ball-valve": {
    id: "cp-ball-valve",
    name: "CP Ball Valve",
    category: "SS Valves",
    mainImage: "/Images/GM AND SS VALVES/SS VALVE/CP BALL VALVE/stainless-steel-valve-stainless-steel-cp-ball-valve-product-1.png",
    specifications: {
      size: "15mm to 100mm",
      material: "SS valve & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/SS VALVE/CP BALL VALVE/stainless-steel-valve-stainless-steel-cc-ball-valve-draw-600x656.jpg"
    ]
  },
  "cast-iron-ball-valve-screwed": {
    id: "cast-iron-ball-valve-screwed",
    name: "Cast Iron Ball Valve Screwed",
    category: "SS Valves",
    mainImage: "/Images/GM AND SS VALVES/SS VALVE/CI BALL VALVE SCREWED/stainless-steel-valve-cast-iron-ball-valve-screwed-product-1.png",
    specifications: {
      size: "15mm to 100mm",
      material: "SS valve & Iron",
      application: "Home"
    },
    technicalDrawings: [
      "/Images/GM AND SS VALVES/SS VALVE/CI BALL VALVE SCREWED/stainless-steel-valve-stainless-steel-cc-ball-valve-draw-600x656.jpg"
    ]
  },

  // DI, CI Pipes & Fittings
  "socket": {
    id: "socket",
    name: "Socket",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/DI socket pipe/ductile-iron-pipe-socket-product.png",
    partsAndMaterials: [
      { no: "1", part: "Tensile strength", material: "420 Mpa minimum" },
      { no: "2", part: "Elongation at break", material: "10% minimum" },
      { no: "3", part: "Modules of elasticity", material: "1.7x10¹⁰ kg/m²" },
      { no: "4", part: "Hardness", material: "230 BHN maximum" },
      { no: "5", part: "Density", material: "7050 kg/m³" },
      { no: "6", part: "Bending / beam strength", material: "Over 200 Mpa" },
      { no: "7", part: "Crush load & Impact load", material: "Can take up huge impact load (charpy over 0.713)" },
      { no: "8", part: "Bursting strength (minimum)", material: "Factor of safety against bursting is 8 to 10" }
    ],
    specifications: {
      composition: "Iron 94%, Carbon 3.2-3.60%, Silicon 2.2-2.8%, Manganese 0.1-0.2%, Magnesium 0.03-0.04%, Phosphorus 0.005-0.04%, Sulfur 0.005-0.02%, Copper ≤0.40%",
      classification: "Ductile Iron pipes classified as K7, K8, K9, K10 etc depending on service conditions and wall thickness",
      application: "Push-on jointing system for speedy installation, centrifugally applied cement mortar lining"
    },
    features: [
      "Strongest pipe high tensile and beam strength",
      "Can endure high working pressure",
      "Speedy laying, installation due to push-on jointing system",
      "Centrifugally applied cement mortar lining offers a smooth surface and gives a higher Hazen William's value of 140",
      "Lesser friction loss offers impressive energy savings"
    ],
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/DI socket pipe/ductile-iron-pipe-socket-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/ductile-iron-pipe-socket-dimension.pdf"
  },

  "double-flange-pipe": {
    id: "double-flange-pipe",
    name: "Double Flange Pipe",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Double Flange Pipe/Double Flange pipe.png",
    specifications: {
      material: "Ductile iron made from crude iron (pig iron) - about 90% iron with high carbon",
      process: "Made primarily from crude iron produced by smelting ore in blast furnace, not from iron or steel scrap",
      composition: "Silicon, sulfur, and manganese help excess carbon form spherical graphite nodules creating durable, wear-resistant metal"
    },
    applicationsTable: {
      "Primary Applications": [
        "Vertical pipe lines for overhead tanks",
        "Elevated service reservoirs",
        "Flanged pipes for over ground pipelines",
        "Portions of pipelines on pillars",
        "Pedestals for rivers, canal or road crossing and bridges",
        "For laying in hilly areas",
        "Slopes even exceeding the angles of response"
      ]
    },
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Double Flange Pipe/ductile-iron-pipe-double-flange-drawing-1 (1).jpg",
      "/Images/DI CI Pipes And fittings/Double Flange Pipe/ductile-iron-pipe-double-flange-drawing-2.jpg",
      "/Images/DI CI Pipes And fittings/Double Flange Pipe/ductile-iron-pipe-double-flange-drawing-3.jpg"
    ],
    dimensionPdfUrls: [
      "/pdf/Pipe Details -1.pdf",
      "/pdf/Fittings Details - 1.pdf"
    ],

  },

  "cast-iron-double-flange-pipes": {
    id: "cast-iron-double-flange-pipes",
    name: "Cast Iron Double Flange Pipes",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Cast Iron Double flange pipe/cast Iron Double flange pipe.png",
    partsAndMaterials: [
      { no: "1", part: "Pipe", material: "Cast Iron" },
      { no: "2", part: "Flange", material: "Cast Iron" }
    ],
    specifications: {
      standard: "As per IS 7181",
      class: "Class B",
      wallThickness: "e - wall thickness",
      flangeThickness: "D - Flange thickness",
      flangeDiameter: "b - Flange diameter"
    },
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Cast Iron Double flange pipe/ductile-iron-pipe-cast-iron-double-flange-pipes-drawing-1024x419.jpg"
    ],
    dimensionPdfUrl: "/pdf/ductile-iron-pipe-cast-iron-double-flange-pipes-dimension.pdf"
  },

  "puddle-wall-casting": {
    id: "puddle-wall-casting",
    name: "Puddle Wall Casting",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Puddle flange pipe/Puddle Flange Pipe.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Puddle flange pipe/ductile-iron-pipe-puddle-wall-casting-pipes-drawing-3.jpg",
      "/Images/DI CI Pipes And fittings/Puddle flange pipe/ductile-iron-pipe-puddle-wall-casting-pipes-drawing-2.jpg",
      "/Images/DI CI Pipes And fittings/Puddle flange pipe/ductile-iron-pipe-puddle-wall-casting-pipes-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/ductile-iron-pipe-puddle-wall-casting-dimension.pdf"
  },

  "slotted-pipe": {
    id: "slotted-pipe",
    name: "Slotted Pipe",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Slotted pipe/slotted pipe.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Slotted pipe/ductile-iron-pipe-slotted-pipe-drawing.jpg",
      "/Images/DI CI Pipes And fittings/Slotted pipe/ductile-iron-pipe-slotted-pipe-background-1024x388.jpg"
    ],
    dimensionPdfUrl: "/pdf/ductile-iron-pipe-slotted-pipe-dimension.pdf"
  },

  "cast-iron-pipe": {
    id: "cast-iron-pipe",
    name: "Cast Iron Pipe",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Cast Iron Pipe/cast Iron pipe.png",
    specifications: {
      type: "Earth Pipe",
      material: "Gray cast iron",
      historicalUse: "Pressure pipe for transmission of water gas and sewage during 17th, 18th, 19th and 20th centuries",
      castIronTypes: "Grey Cast Iron, White Cast Iron, Ductile Cast Iron, Malleable Cast Iron",
      application: "Earthing of All Heavy Machinery, best choice for Power distribution Stations like MSEDCL, MSETCL, Transmissions, Railways NLC, ICF, Industrial Companies"
    },
    features: [
      "Ability to carry high currents repeatedly",
      "Low resistivity/higher conductivity",
      "Best choice for earthing applications",
      "Suitable for power distribution stations and industrial applications"
    ],
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Cast Iron Pipe/cast-iron-pipe-drawing-1310x1536.jpg"
    ],

  },

  // DI/CI Fittings
  "double-socket-bend-90": {
    id: "double-socket-bend-90",
    name: "Double Socket Bend 90°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/DS bend 90.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fiitings-double-socket-bend-90°-drawing-1.jpg"
    ]
  },

  "double-socket-bend-45": {
    id: "double-socket-bend-45",
    name: "Double Socket Bend 45°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fiitings-double-socket-bend-45°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fiitings-double-socket-bend-45°-drawing-1.jpg"
    ]
  },

  "double-socket-bend-22-5": {
    id: "double-socket-bend-22-5",
    name: "Double Socket Bend 22.5°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fittings-double-socket-bend-22.5°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fittings-double-socket-bend-22.5°-drawing-1.jpg"
    ]
  },

  "double-socket-bend-11-25": {
    id: "double-socket-bend-11-25",
    name: "Double Socket Bend 11.25°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fittings-double-socket-bend-11.25°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Double Socket Bend/di-ci-fittings-double-socket-bend-11.25°-drawing-1.jpg"
    ]
  },

  "double-socket-duck-foot-bend-90": {
    id: "double-socket-duck-foot-bend-90",
    name: "Double Socket Duck Foot Bend 90°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Duck Foot Bend/di-ci-fittings-double-socket-duck-foot-bend-90°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Duck Foot Bend/di-ci-fitings-double-socket-duck-foot-bend-90°-drawing.jpg"
    ]
  },

  "double-socket-concentric-tapers-reducer": {
    id: "double-socket-concentric-tapers-reducer",
    name: "Double Socket Concentric Tapers (Reducer)",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Tapper/di-ci-fitings-double-socket-concentric-tapers-reducer-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Tapper/di-ci-fitings-double-socket-concentric-tapers-reducer-drawing.jpg"
    ]
  },

  "flanged-spigot-tail-piece": {
    id: "flanged-spigot-tail-piece",
    name: "Flanged Spigot Tail Piece",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Tail Piece/di-ci-fitings-flanged-spigot-tail-piece-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Tail Piece/di-ci-fitings-flanged-spigot-tail-piece-drawing.jpg"
    ]
  },

  "flanged-socket-tail-piece": {
    id: "flanged-socket-tail-piece",
    name: "Flanged Socket Tail Piece",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Tail Piece/di-ci-fitings-flanged-socket-tail-piece-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Tail Piece/di-ci-fitings-flanged-socket-tail-piece-drawing.jpg"
    ]
  },

  "double-flange-bend-90": {
    id: "double-flange-bend-90",
    name: "Double Flange Bend 90°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-90°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-90°-drawing.jpg"
    ]
  },

  "double-flange-bend-45": {
    id: "double-flange-bend-45",
    name: "Double Flange Bend 45°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-45°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-45°-drawing.jpg"
    ]
  },

  "double-flange-bend-22-5": {
    id: "double-flange-bend-22-5",
    name: "Double Flange Bend 22.5°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-22.5°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-22.5°-drawing.jpg"
    ]
  },

  "double-flange-bend-11-25": {
    id: "double-flange-bend-11-25",
    name: "Double Flange Bend 11.25°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-11.25°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/DI CI Double flange bend/di-ci-fitings-double-flange-bend-11.25°-drawing.jpg"
    ]
  },

  "blank-flange": {
    id: "blank-flange",
    name: "Blank Flange",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Blank flange/di-ci-fitings-blank-flange-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Blank flange/di-ci-fitings-blank-flange-drawing.jpg"
    ]
  },

  "double-flange-duck-foot-bend-90": {
    id: "double-flange-duck-foot-bend-90",
    name: "Double Flange Duck Foot Bend 90°",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Duck Foot Bend/di-ci-fitings-double-flange-ducj-foot-bend-90°-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Duck Foot Bend/di-ci-fitings-double-flange-duck-foot-bend-90°-drawing.jpg"
    ]
  },

  "double-flange-concentric-tapers-reducer": {
    id: "double-flange-concentric-tapers-reducer",
    name: "Double Flange Concentric Tapers (Reducer)",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Tapper/di-ci-fitings-double-flange-concentric-tapers-reducer-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Tapper/di-ci-fitings-double-flange-concentric-tapers-reducer-drawing.jpg"
    ]
  },

  "all-socket-tees": {
    id: "all-socket-tees",
    name: "All Socket Tees",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/All Socket Tee/di-ci-fitings-all-socket-tees-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/All Socket Tee/di-ci-fitings-all-socket-tees-drawing.jpg"
    ]
  },

  "flange-on-double-socket-tees": {
    id: "flange-on-double-socket-tees",
    name: "Flange on Double Socket Tees",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Double Socket Tee/di-ci-fitings-flange-on-double-socket-tees-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Double Socket Tee/di-ci-fitings-flange-on-double-socket-tees-drawing.jpg"
    ]
  },

  "all-flanges-tees": {
    id: "all-flanges-tees",
    name: "All Flanges Tees",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/All Flange Tee/di-ci-fittings-all-flanges-tees-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/All Flange Tee/di-ci-fittings-all-flanges-tees-drawing.jpg"
    ]
  },

  "collars": {
    id: "collars",
    name: "Collars",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Collars/di-ci-fittings-mjcollars-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Collars/di-ci-fittings-mjcollars-drawing-1.jpg"
    ]
  },

  "mj-collars": {
    id: "mj-collars",
    name: "MJ Collars",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Collars/di-ci-fittings-collars-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Collars/di-ci-fittings-collars-drawing.jpg"
    ]
  },

  "bell-mouth": {
    id: "bell-mouth",
    name: "Bell Mouth",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Bell Mouth/di-ci-fittings-bell-mouth-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Bell Mouth/di-ci-fittings-bell-mouth-drawing.jpg"
    ]
  },

  "dismantling-joint": {
    id: "dismantling-joint",
    name: "Dismantling Joint",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Dismantling Joint/di-ci-fittings-dismantling-joint-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Dismantling Joint/di-ci-fittings-dismantling-joint-drawing.jpg"
    ]
  },

  "all-socket-cross": {
    id: "all-socket-cross",
    name: "All Socket Cross",
    category: "DI, CI Pipes & Fittings",
    mainImage: "/Images/DI CI Pipes And fittings/Fittings/Cross Product/di-ci-fittings-all-socket-cross-product.png",
    technicalDrawings: [
      "/Images/DI CI Pipes And fittings/Fittings/Cross Product/di-ci-fittings-all-socket-cross-drawing.jpg"
    ]
  },

  // M.S Pipes & Fittings
  "ms-square": {
    id: "ms-square",
    name: "Square (MS)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-square-product.png",
    specifications: {
      material: "Mild Steel",
      application: "Construction, industrial framework, structural applications"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1 mm", material: "0.03937 inch" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-square-dimensions.pdf"
  },
  "ms-round": {
    id: "ms-round",
    name: "Round (MS/GI)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-round-product.png",
    specifications: {
      material: "Mild Steel / Galvanized Iron",
      application: "Plumbing, water supply, construction, industrial piping"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1 mm", material: "0.03937 inch" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-round-dimensions.pdf"
  },
  "ms-rectangle": {
    id: "ms-rectangle",
    name: "Rectangle (MS/GI)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-rectangle-product.png",
    specifications: {
      material: "Mild Steel / Galvanized Iron",
      application: "Structural framing, construction, fabrication work"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1 mm", material: "0.03937 inch" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-rectangle-dimension.pdf"
  },
  "ms-round-bar": {
    id: "ms-round-bar",
    name: "Round Bar (MS/GI)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-round-bar-product.png",
    specifications: {
      material: "Mild Steel / Galvanized Iron",
      application: "Manufacturing, machining, construction reinforcement"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1 mm", material: "0.03937 inch" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-round-bar-dimension.pdf"
  },
  "ms-tmt-bar": {
    id: "ms-tmt-bar",
    name: "TMT Bar (MS/GI)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-tmt-bar-product.png",
    specifications: {
      material: "Thermo-Mechanically Treated Steel",
      application: "Construction reinforcement, building structures, earthquake-resistant construction"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1 mm", material: "0.03937 inch" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-tmt-bar-dimension-1.pdf"
  },
  "ms-flat-bar": {
    id: "ms-flat-bar",
    name: "Flat Bar (MS/GI)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-flat-bar-product.png",
    specifications: {
      material: "Mild Steel / Galvanized Iron",
      application: "Fabrication, construction brackets, support structures"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1mm", material: "0.03937" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-flat-bar-dimension.pdf"
  },
  "ms-angle": {
    id: "ms-angle",
    name: "Angle (MS/GI)",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/mild-steel-pipe-angle-product.png",
    specifications: {
      material: "Mild Steel / Galvanized Iron",
      application: "Structural support, corner reinforcement, construction framework"
    },
    partsAndMaterials: [
      { no: "1", part: "1 meter", material: "3.2809 feet" },
      { no: "2", part: "1 feet", material: "0.0348 feet" },
      { no: "3", part: "1 feet", material: "12 inch" },
      { no: "4", part: "1 feet", material: "305 mm" },
      { no: "5", part: "1 inch", material: "25.4 mm" },
      { no: "6", part: "1 cm", material: "10 mm" },
      { no: "7", part: "1mm", material: "0.03937" }
    ],
    dimensionPdfUrl: "/pdf/mild-steel-pipe-angle-dimension.pdf",
  },
  "ms-fittings": {
    id: "ms-fittings",
    name: "M.S Fittings",
    category: "M.S Pipes & Fittings",
    mainImage: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-elbow-product.png",
    fittingImages: [
      { name: "Tee", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-tee-product.png" },
      { name: "Socket", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-socket-product.png" },
      { name: "Union", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-union-product.png" },
      { name: "Reducing Elbow", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-reducing-elbow-product.png" },
      { name: "Reducing Tee", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-reducing-tee-product.png" },
      { name: "Reducing Socket", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-reducing-socket-product.png" },
      { name: "Hex Nipple", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-hex-nipple-product.png" },
      { name: "Socket Weld Union", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-socket-weld-union-product.png" },
      { name: "Cross", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-cross-product.png" },
      { name: "Plug", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-plug-product.png" },
      { name: "Male Female Elbow", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-male-female-elbow-elbow.png" },
      { name: "Hexagon Bush", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-hexagon-bush-product.png" },
      { name: "Socket Weld Elbow", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-socket-weld-elbow-product.png" },
      { name: "Socket Weld Tee", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-socket-weld-tee-product-1.png" },
      { name: "Socket Weld Union", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-socket-weld-union-product.png" },
      { name: "Flange", image: "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-flange-product.png" }
    ]
  },

  // Water Meter
  "multi-jet-magnetic-drive": {
    id: "multi-jet-magnetic-drive",
    name: "Multi Jet Magnetic Drive Hot & Cold Water Meter",
    category: "Water Meter",
    mainImage: "/Images/Water Meter/Multi Jet Water Meter/1.-NBDMH.png",
    specifications: {
      model: "NBDMH / NBDM",
      temperature: "Cold water: <45°C, Hot water: ≤90°C",
      workingPressure: "1.6MPa",
      maxTestPressure: "2.0MPa",
      indicatingError: "±2% from Qmax to Qt, ±5% from Qt to Qmin"
    },
    features: [
      "Multi jet magnetic drive technology",
      "Hot and cold water measurement",
      "High accuracy flow measurement",
      "Durable construction for long service life",
      "Pressure loss not exceeding 0.1 Mpa at Qmax",
      "Working pressure up to 1.6MPa"
    ],
    technicalDrawings: [
      "/Images/Water Meter/Multi Jet Water Meter/water-meter-multi-jet-magnet-drive-hot-cold-water-drawing-1-1263x1536.jpg",
      "/Images/Water Meter/Multi Jet Water Meter/water-meter-multi-jet-magnet-drive-hot-cold-water-drawing-2.jpg",
      "/Images/Water Meter/Multi Jet Water Meter/water-meter-multi-jet-magnet-drive-hot-cold-water-flow-error-curve-drawing-1024x369.jpg"
    ],
    variants: [
      {
        name: "NBDMH",
        image: "/Images/Water Meter/Multi Jet Water Meter/1.-NBDMH.png",
        specifications: {
          type: "Hot water meter",
          temperature: "≤90°C"
        }
      },
      {
        name: "NBDM",
        image: "/Images/Water Meter/Multi Jet Water Meter/2.-NBDM.png",
        specifications: {
          type: "Cold water meter",
          temperature: "<45°C"
        }
      },
      {
        name: "NBDMH Variant",
        image: "/Images/Water Meter/Multi Jet Water Meter/image.psd1_-qiqel89tw3vh2i7msu9zkglvltifu86kov19p360ow.png",
        specifications: {
          type: "Hot water meter variant",
          temperature: "≤90°C"
        }
      }
    ],
    dimensionPdfUrls: [
      "/pdf/water-meter-multi-jet-magnet-drive-hot-cold-water-dimensions.pdf",
      "/pdf/Multijet.pdf"
    ],
  },
  "single-jet-magnetic-drive": {
    id: "single-jet-magnetic-drive",
    name: "Single Jet Magnetic Drive",
    category: "Water Meter",
    mainImage: "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-nbsjm-15-1-product-1.png",
    specifications: {
      model: "NBSJM",
      temperature: "Cold water: <45°C, Hot water: ≤90°C",
      workingPressure: "1.6MPa",
      maxTestPressure: "2.0MPa",
      indicatingError: "±2% from Qmax to Qt, ±5% from Qt to Qmin"
    },
    features: [
      "Single jet magnetic drive technology",
      "Compact design for residential use",
      "High accuracy measurement",
      "Low pressure loss operation",
      "Suitable for both hot and cold water",
      "Easy installation and maintenance"
    ],
    technicalDrawings: [
      "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-nbsjm-15-2-drawing-600x1295.jpg",
      "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-nbsjm-15-1-drawing-768x1285.jpg",
      "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-drawing-1024x760.jpg",
      "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-flow-error-curve-drawing-1024x369.jpg"
    ],
    variants: [
      {
        name: "NBSJM-15-1",
        image: "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-nbsjm-15-1-product-1.png",
        specifications: {
          size: "15mm",
          type: "Single jet"
        }
      },
      {
        name: "NBSJM-15-2",
        image: "/Images/Water Meter/Single Jet Water Meter/Water-meter-single-jet-water-meter-nbsjm-15-2-product-qj62cuj2h11n3zozn8euqfkupozr8ndoqufyrwngn4.png",
        specifications: {
          size: "15mm",
          type: "Single jet variant"
        }
      }
    ],
    dimensionPdfUrl: "/pdf/water-meter-multi-jet-magnet-drive-hot-cold-water-technical-data.pdf",
    dimensionPdfUrls: [
      "/pdf/water-meter-multi-jet-magnet-drive-hot-cold-water-technical-data.pdf",
      "/pdf/Single-jet.pdf"
    ],
  },
  "horizontal-woltman-magnetic-drive": {
    id: "horizontal-woltman-magnetic-drive",
    name: "Horizontal Woltman Magnetic Drive",
    category: "Water Meter",
    mainImage: "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-product-1.png",
    specifications: {
      type: "Horizontal Woltman",
      temperature: "Cold water: <45°C, Hot water: ≤90°C",
      workingPressure: "1.6MPa",
      maxTestPressure: "2.0MPa",
      indicatingError: "±2% from Qmax to Qt, ±5% from Qt to Qmin"
    },
    features: [
      "Woltman turbine technology",
      "Horizontal installation design",
      "Magnetic drive coupling",
      "High flow rate capability",
      "Low head loss characteristics",
      "Suitable for large diameter applications"
    ],
    technicalDrawings: [
      "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-drawing-1.jpg",
      "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-drawing-2-768x1472.jpg",
      "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-drawing-3-768x1520.jpg",
      "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-drawing-4-768x1519.jpg",
      "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-flow-error-curve-1024x369.jpg",
      "/Images/Water Meter/Horizontal/water-meter-multi-jet-magnet-drive-hot-cold-water-drawing-2.jpg",
      "/Images/Water Meter/Horizontal/Water-meter-horizontal-woltman-magnetic-drive-head-loss-curve-1024x453.jpg"
    ],
    dimensionPdfUrl: "/pdf/Water-meter-horizontal-woltman-magnetic-drive-technical-data.pdf",
    dimensionPdfUrls: [
      "/pdf/Water-meter-horizontal-woltman-magnetic-drive-technical-data.pdf",
      "/pdf/Horizontal_woltman.pdf"
    ],
  },
  "electro-magnetic-flow": {
    id: "electro-magnetic-flow",
    name: "Electro Magnetic Flow",
    category: "Water Meter",
    mainImage: "/Images/Water Meter/Electro Magnetic/Water-meter-electro-magnetic-flow-product-1024x740-1.png",
    specifications: {
      type: "LD series intelligent split type",
      application: "Volumetric flow measurement of conductive liquids and slurries",
      protection: "IP65 waterproof dust grade",
      electrodes: "High quality three electrodes (better than conventional two electrodes)"
    },
    features: [
      "Intelligent split type electromagnetic flow meter",
      "High performance and reliability",
      "Measures volumetric flow of conductive liquids and slurries",
      "Widely used in iron steel, electric power, petroleum industries",
      "Upgraded thickened high strength flange",
      "Anti-shedding lining, anti-flanging, anti leakage design",
      "Standard three electrodes for accurate measurement",
      "Grounding screw directly connected to body",
      "Imported SMD components",
      "Water-proof dust coating protection",
      "Advanced anti-interference circuit design",
      "Anti-surge stable valve operation"
    ],
    applicationsTable: {
      "Industries": ["Application Areas"],
      "Iron Steel": ["Flow measurement in steel manufacturing"],
      "Electric Power": ["Power plant water flow monitoring"],
      "Petroleum": ["Oil industry fluid measurement"],
      "Chemical Industry": ["Chemical process flow control"],
      "Coal Metallurgy": ["Mining industry applications"],
      "Papermaking": ["Paper mill process control"],
      "Water Supply": ["Municipal water distribution"],
      "Drainage": ["Wastewater management"],
      "Food Medicine": ["Food processing and pharmaceutical industries"]
    },
    technicalDrawings: [
      "/Images/Water Meter/Electro Magnetic/Water-meter-electro-magnetic-flow-product-1024x740-1.png",
      "/Images/Water Meter/Electro Magnetic/Water-meter-electro-magnetic-flow-product-2-1024x692 (1).png",
      "/Images/Water Meter/Electro Magnetic/Water-meter-electro-magnetic-flow-product-3-1024x890 (1).png"
    ]
  },
  "amr": {
    id: "amr",
    name: "AMR",
    category: "Water Meter",
    mainImage: "/Images/Water Meter/AMR/Water-meter-amr-product-1.png",
    specifications: {
      type: "Automatic Meter Reading System",
      application: "Remote water meter data collection and monitoring"
    },
    features: [
      "Automatic meter reading capability",
      "Remote data collection",
      "Advanced monitoring system",
      "Efficient water usage tracking",
      "Real-time data transmission",
      "Reduces manual meter reading requirements"
    ],
    technicalDrawings: [
      "/Images/Water Meter/AMR/Water-meter-amr-drawing-1.jpg",
      "/Images/Water Meter/AMR/Water-meter-amr-drawing-2.jpg"
    ],
    dimensionPdfUrl: "/pdf/water-meter-amr-technical-parameter.pdf",
    dimensionPdfUrls: [
      "/pdf/water-meter-amr-technical-parameter.pdf",
      "/pdf/AMR.pdf"
    ],
  },
  "ultrasonic": {
    id: "ultrasonic",
    name: "Ultrasonic",
    category: "Water Meter",
    mainImage: "/Images/Water Meter/Ultrosonic/water-meter-ultrasonic-product.png",
    specifications: {
      type: "Ultrasonic Water Meter",
      technology: "Non-contact ultrasonic measurement",
      application: "High precision water flow measurement"
    },
    features: [
      "Non-contact ultrasonic measurement technology",
      "High precision and accuracy",
      "No moving parts for longer lifespan",
      "Minimal pressure loss",
      "Wide flow measurement range",
      "Digital display and data logging",
      "Low maintenance requirements",
      "Suitable for clean water applications"
    ],
    technicalDrawings: [
      "/Images/Water Meter/Ultrosonic/water-meter-ultrasonic-drawing.jpg",
      "/Images/Water Meter/Ultrosonic/water-meter-ultrasonic-drawing-2.jpg"
    ],
  },

  // Air Valve
  "single-chamber-flanged": {
    id: "single-chamber-flanged",
    name: "Single Chamber Flanged",
    category: "Air Valve",
    mainImage: "/Images/DI CI VALVES/Air Valve/single air valve/Air-valve-Single-chamber-flanged-product.png",
    partsAndMaterials: [
      { no: "1", part: "Gear box", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Packing gland", material: "QALg-2" },
      { no: "3", part: "Adjusting bush", material: "QAL9-2" },
      { no: "4", part: "Shaft bearing", material: "QAL9-2" },
      { no: "5", part: "Upper shaft", material: "SS420" },
      { no: "6", part: "Body", material: "Ductile iron" },
      { no: "7", part: "Disc seal ring", material: "EPDM" },
      { no: "8", part: "Retainer ring", material: "SS304" },
      { no: "9", part: "Expansion pin", material: "SS420" },
      { no: "10", part: "Disc", material: "Ductile iron" },
      { no: "11", part: "Lower shaft", material: "SS420" },
      { no: "12", part: "Shaft cover", material: "Ductile iron" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Air Valve/single air valve/drawing-5.jpg"
    ],
    dimensionPdfUrl: "/pdf/Air-valve-Single-chamber-flanged-dimension-1.pdf"
  },
  "single-chamber-screwed": {
    id: "single-chamber-screwed",
    name: "Single Chamber Screwed",
    category: "Air Valve",
    mainImage: "/Images/DI CI VALVES/Air Valve/Single chamber screwed/Air-valve-single-chamber-screwed-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron,Cast iron" },
      { no: "2", part: "Ball", material: "Timber coated rubber" },
      { no: "3", part: "Cowl", material: "Cast iron,Ductile iron" },
      { no: "4", part: "Cover", material: "Cast iron,Ductile iron" },
      { no: "5", part: "Screw", material: "Stainless steel" },
      { no: "6", part: "Gasket", material: "EPDM" },
      { no: "7", part: "Seat ring (moulded)", material: "EPDM" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Air Valve/Single chamber screwed/Air-valve-single-chamber-screwed-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/Air-valve-single-chamber-screwed-Dimension-1.pdf"
  },
  "single-chamber-ball-type": {
    id: "single-chamber-ball-type",
    name: "Single Chamber Ball Type",
    category: "Air Valve",
    mainImage: "/Images/DI CI VALVES/Air Valve/single chamber ball type/Air-valve-Single-chamber-ball-type-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Ball", material: "Stainless steel" },
      { no: "3", part: "Bonnet", material: "Ductile iron" },
      { no: "4", part: "Belt guide bolt", material: "Stainless steel" },
      { no: "5", part: "Bell", material: "Stainless steel" },
      { no: "6", part: "Allen bolts", material: "Stainless steel" },
      { no: "7", part: "Gasket", material: "EPDM" },
      { no: "8", part: "Seat", material: "EPDM" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Air Valve/single chamber ball type/Air-valve-Single-chamber-ball-type-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/Air-valve-Single-chamber-ball-type-dimension-1.pdf"
  },
  "double-chamber": {
    id: "double-chamber",
    name: "Double Chamber",
    category: "Air Valve",
    mainImage: "/Images/DI CI VALVES/Air Valve/double chamber/product-8.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "GGG50" },
      { no: "2", part: "Bonnet", material: "GGG50" },
      { no: "3", part: "Coverplate", material: "SS304" },
      { no: "4", part: "Sealing ball", material: "SS304" },
      { no: "5", part: "Bolt", material: "A2-70" },
      { no: "6", part: "Air vent", material: "Brass" },
      { no: "7", part: "Exhaust gas network", material: "SS304" },
      { no: "8", part: "Gasket", material: "EPDM/NBR" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Air Valve/double chamber/air-valve-double-chamber-drawing-600x543.jpg"
    ],
    dimensionPdfUrl: "/pdf/air-valve-double-chamber-dimension-1.pdf"
  },
  "h40-isolating": {
    id: "h40-isolating",
    name: "H40 Isolating",
    category: "Air Valve",
    mainImage: "/Images/DI CI VALVES/Air Valve/H40 ISOLATING/product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron ,Cast iron" },
      { no: "2", part: "Bonnet", material: "GGG50" },
      { no: "3", part: "Coverplate", material: "SS304" },
      { no: "4", part: "Sealing ball", material: "SS304" },
      { no: "5", part: "Bolt", material: "A2-70" },
      { no: "6", part: "Stem", material: "SS304" },
      { no: "7", part: "Exhaust gas network", material: "SS304" },
      { no: "8", part: "Gasket", material: "EPDM/NBR" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Air Valve/H40 ISOLATING/air-valve-h40-isolating-drawing-2-600x608.jpg"
    ],
    dimensionPdfUrl: "/pdf/air-valve-pressure-reducing-valve-dimension.pdf"
  },
  "double-kinetic": {
    id: "double-kinetic",
    name: "Double Kinetic",
    category: "Air Valve",
    mainImage: "/Images/DI CI VALVES/Air Valve/DOUBLE KINETIC/air-valve-double-kinetic-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron ,Cast iron" },
      { no: "2", part: "HP cover", material: "Ductile iron ,Cast iron" },
      { no: "3", part: "LP cover", material: "Ductile iron ,Cast iron" },
      { no: "4", part: "Cowl", material: "Ductile iron ,Cast iron" },
      { no: "5", part: "LP seat ring", material: "NBR" },
      { no: "6", part: "LP seat ring", material: "NBR" },
      { no: "7", part: "HP orifice plug", material: "Gun metal" },
      { no: "8", part: "LP ball", material: "Timber with rubber" },
      { no: "9", part: "Hp ball", material: "Timber with rubber" },
      { no: "10", part: "Orifice ring", material: "NBR" },
      { no: "11", part: "Bolt & Nuts", material: "MS" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/Air Valve/DOUBLE KINETIC/air-valve-double-kinetic-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/air-valve-double-kinetic-dimension-1.pdf"
  },

  // Foot Valve
  "ball-type-flanged": {
    id: "ball-type-flanged",
    name: "Ball Type Flanged",
    category: "Foot Valve",
    mainImage: "/Images/DI CI VALVES/FOOT VALVE/BALL TYPE FLANGED/air_valve-foot_valve-product-removebg-preview.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron ,Cast iron" },
      { no: "2", part: "Bails", material: "Mild steel with rubber" },
      { no: "3", part: "Bolts & Nuts", material: "Mild steel" },
      { no: "4", part: "Strainer", material: "Ductile iron," },
      { no: "5", part: "Seat ring", material: "Ductile iron," },
      { no: "6", part: "Seat", material: "EPDM / NITRILE" },
      { no: "7", part: "O ring", material: "NITRILE" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/FOOT VALVE/BALL TYPE FLANGED/foot-valve-ball-type-flanged-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/foot-valve-ball-type-flanged-dimension.pdf"
  },
  "ball-type-screwed": {
    id: "ball-type-screwed",
    name: "Ball Type Screwed",
    category: "Foot Valve",
    mainImage: "/Images/DI CI VALVES/FOOT VALVE/FOOT VALVE SCREW/foot-valve-ball-type-screwd-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron ,Cast iron" },
      { no: "2", part: "Bails", material: "Mild steel with rubber" },
      { no: "3", part: "Bolts & Nuts", material: "Mild steel" },
      { no: "4", part: "Strainer", material: "Ductile iron," },
      { no: "5", part: "Seat ring", material: "Ductile iron," },
      { no: "6", part: "Seat", material: "EPDM / NITRILE" },
      { no: "7", part: "O ring", material: "NITRILE" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/FOOT VALVE/FOOT VALVE SCREW/foot-valve-ball-type-screwd-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/foot-valve-ball-type-flanged-dimension-1.pdf"
  },

  // Strainer Valve
  "y-type-flanged": {
    id: "y-type-flanged",
    name: "Y-Type Flanged & Screwed",
    category: "Strainer Valve",
    mainImage: "/Images/DI CI VALVES/STRAINER/Y TYPE/strainer-y-type-flanged-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron ,Cast iron" },
      { no: "2", part: "Screen", material: "SS304" },
      { no: "3", part: "Cover gasket", material: "EPDM" },
      { no: "4", part: "Cover", material: "GGG50" },
      { no: "5", part: "Plug", material: "A2-70" },
      { no: "6", part: "Bolt nut", material: "A2-70" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/STRAINER/Y TYPE/strainer-y-type-flanged-drawing-1-600x531.jpg"
    ],
    dimensionPdfUrl: "/pdf/strainer-y-type-flanged-dimension.pdf"
  },
  "basket-type": {
    id: "basket-type",
    name: "Basket Type",
    category: "Strainer Valve",
    mainImage: "/Images/DI CI VALVES/STRAINER/BASKET TYPE/strainer-basket-type-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron ,Cast iron" },
      { no: "2", part: "Bails", material: "Mild steel with rubber" },
      { no: "3", part: "Bolts & Nuts", material: "Mild steel" },
      { no: "4", part: "Strainer", material: "Ductile iron," },
      { no: "5", part: "Seat ring", material: "Ductile iron," },
      { no: "6", part: "Seat", material: "EPDM / NITRILE" },
      { no: "7", part: "O ring", material: "NITRILE" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/STRAINER/BASKET TYPE/strainer-basket-type-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/strainer-basket-type-dimension.pdf"
  },

  // Gate Valve Products
  "rising-stern-seated": {
    id: "rising-stern-seated",
    name: "Rising Stem Seated",
    category: "Gate Valve",
    mainImage: "/Images/DI CI VALVES/GATE VALVE/RISING STERM/gate-valve-rising-sterm-seated-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Resilent wedge", material: "Ductile iron+EPDM" },
      { no: "3", part: "Wedge skelton", material: "Ductile iron" },
      { no: "4", part: "Stem", material: "Stainless steel" },
      { no: "5", part: "Gasket", material: "EPDM" },
      { no: "6", part: "Bonnet", material: "Ductile iron" },
      { no: "7", part: "Bolt", material: "Steel" },
      { no: "8", part: "O ring", material: "EPDM" },
      { no: "9", part: "Yoke", material: "Ductile iron" },
      { no: "10", part: "Nuts", material: "Steel" },
      { no: "11", part: "Yoke bushing", material: "Brass" },
      { no: "12", part: "Hand wheel", material: "Ductile iron" },
      { no: "13", part: "Identification plate", material: "Aluminium" },
      { no: "14", part: "Handwheel nut", material: "Brass" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/GATE VALVE/RISING STERM/gate-valve-rising-sterm-seated-drawing-2.jpg",
      "/Images/DI CI VALVES/GATE VALVE/RISING STERM/gate-valve-rising-sterm-seated-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/gate-valve-rising-sterm-seated-dimension.pdf",
  },

  "non-rising-stern-seated": {
    id: "non-rising-stern-seated",
    name: "Non Rising Stem Seated",
    category: "Gate Valve",
    mainImage: "/Images/DI CI VALVES/GATE VALVE/NON RISING/gate-valve-non-rising-sterm-seated-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "disc", material: "GGG50+EPDM" },
      { no: "3", part: "Wedge disc", material: "GGG50" },
      { no: "4", part: "Disc nut", material: "Brass BS2872/2874" },
      { no: "5", part: "Stem", material: "X20Cr13" },
      { no: "6", part: "Gasket", material: "EPDM BS2494" },
      { no: "7", part: "Bolt", material: "Galvanized steel BS1769" },
      { no: "8", part: "Bonnet", material: "GGG50" },
      { no: "9", part: "Holding ring", material: "Brass BS2872/2874" },
      { no: "10", part: "O ring", material: "NBR BS2494" },
      { no: "11", part: "Dust ring", material: "EPDM BS2494" },
      { no: "12", part: "Brass nut", material: "Brass BS2872/2874" },
      { no: "13", part: "Screw", material: "A2-70" },
      { no: "14", part: "Handwheel", material: "Carbon steel BS1769" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/GATE VALVE/NON RISING/gate-valve-non-rising-sterm-seated-drawing-2.jpg",
      "/Images/DI CI VALVES/GATE VALVE/NON RISING/gate-valve-non-rising-sterm-seated-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/gate-valve-non-rising-sterm-seated-dimension.pdf",
  },

  "metal-seated": {
    id: "metal-seated",
    name: "Metal Seated",
    category: "Gate Valve",
    mainImage: "/Images/DI CI VALVES/GATE VALVE/METAL SEATED/gate-valve-metal-seated-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Body seat ring", material: "Bronze" },
      { no: "3", part: "Wedge", material: "Ductile iron" },
      { no: "4", part: "Wedge seat ring", material: "Bronze" },
      { no: "5", part: "Stem nut", material: "Brass" },
      { no: "6", part: "Stem", material: "Stainless steel" },
      { no: "7", part: "Bonnet Bolts", material: "Stainless steel" },
      { no: "8", part: "Bolt & Nut", material: "Stainless steel" },
      { no: "9", part: "Gasket", material: "NBR" },
      { no: "10", part: "Bonnet", material: "Ductile iron" },
      { no: "11", part: "O ring", material: "NBR" },
      { no: "12", part: "Locating ring", material: "Brass" },
      { no: "13", part: "Bonnet nut", material: "Brass" },
      { no: "14", part: "Minipad", material: "TFL" },
      { no: "15", part: "Dust ring", material: "NBR" },
      { no: "16", part: "Wheel", material: "Stainless steel" },
      { no: "17", part: "Washer", material: "Stainless steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/GATE VALVE/METAL SEATED/gate-valve-metal-seated-drawing-768x785.jpg"
    ],
    dimensionPdfUrl: "/pdf/gate-valve-metal-seated-dimension.pdf"
  },

  "actuator-type": {
    id: "actuator-type",
    name: "Actuator Type",
    category: "Gate Valve",
    mainImage: "/Images/DI CI VALVES/GATE VALVE/ACTUATOR TYPE GATE VALVE/gate-valve-acutuator-type-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Bonnet", material: "Ductile iron" },
      { no: "3", part: "Wedge", material: "Ductile iron" },
      { no: "4", part: "Bonnet Bolts", material: "Stainless steel" },
      { no: "5", part: "Stem", material: "Stainless steel" },
      { no: "6", part: "Stem nut", material: "Brass" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/GATE VALVE/ACTUATOR TYPE GATE VALVE/gate-valve-acutuator-type-drawing-2.jpg",
      "/Images/DI CI VALVES/GATE VALVE/ACTUATOR TYPE GATE VALVE/gate-valve-acutuator-type-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/gate-valve-acutuator-type-dimension.pdf",
  },

  "ci-sluice-valve": {
    id: "ci-sluice-valve",
    name: "CI Sluice Valve",
    category: "Gate Valve",
    mainImage: "/Images/DI CI VALVES/GATE VALVE/CI SULICE VALVE/gate-valve-ci-sluice-valve-product-1.png",
    partsAndMaterials: [
      { no: "1", part: "Body, Bonnet, Wedge, Stuffing box Gland, Thrust plate, Cap & Yoke (only in rising stem)", material: "Cast iron, SG iron (Ductile), Cast steel" },
      { no: "2", part: "Hand wheel", material: "Cast iron, SG iron" },
      { no: "3", part: "Stem", material: "Stainless steel AISI: 410, 202,304, High tensile brass" },
      { no: "4", part: "Wedge nut, back seat bush (only in rising stem)", material: "High tensile brass / Leaded tin bronze (gun metal)" },
      { no: "5", part: "Body seat rings, Wedge facing rings & Bushes", material: "Stainless steel AISI: 410, 202, 304, Leaded tin bronze (gun metal)" },
      { no: "6", part: "Nuts, Bolts", material: "Carbon steel, Stainless steel" },
      { no: "7", part: "Gaskets", material: "CAF, Rubber" },
      { no: "8", part: "Gland packing", material: "Jute, Hemp, Asbestos, Graphite" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/GATE VALVE/CI SULICE VALVE/gate-valve-ci-sluice-valve-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/gate-valve-ci-sluice-valve-dimension.pdf",
  },

  // Check Valve Products
  "single-wafer": {
    id: "single-wafer",
    name: "Single Wafer",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/SINGLE WAFER/check-valve-single-wafer-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Outer ring", material: "EPDM" },
      { no: "3", part: "Inner ring", material: "EPDM" },
      { no: "4", part: "Washer", material: "Stainless steel" },
      { no: "5", part: "Screw", material: "Stainless steel" },
      { no: "6", part: "Disc", material: "Stainless steel, Mild steel" },
      { no: "7", part: "I-Bolt", material: "Mild steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/SINGLE WAFER/check-valve-single-wafer-drawing-2.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/SINGLE WAFER/check-valve-single-wafer-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-single-wafer-dimension.pdf",
  },
  "dual-plate-wafer": {
    id: "dual-plate-wafer",
    name: "Dual Plate Wafer",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/DUAL PLATE CHECK VALVE/check-valve-dual-plate-wafer-product (1).png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Seat", material: "EPDM" },
      { no: "3", part: "Eye Bolt", material: "Carbon steel" },
      { no: "4", part: "Shaft", material: "SS304" },
      { no: "5", part: "Spring", material: "SS304" },
      { no: "6", part: "Plate", material: "Ductile iron" },
      { no: "7", part: "Washer", material: "PTFE" },
      { no: "8", part: "Packing", material: "NBR" },
      { no: "9", part: "Bolt", material: "Carbon steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/DUAL PLATE CHECK VALVE/check-valve-dual-plate-wafer-drawing-2.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/DUAL PLATE CHECK VALVE/check-valve-dual-plate-wafer-drawing-1-600x416.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-dual-plate-wafer-dimension.pdf",
  },
  "dual-plate-flanged": {
    id: "dual-plate-flanged",
    name: "Dual Plate Flanged",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/DUAL PLATE FLANGEG/check-valve-dual-plate-flanged-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Seat", material: "EPDM" },
      { no: "3", part: "Eye Bolt", material: "Carbon steel" },
      { no: "4", part: "Shaft", material: "SS304" },
      { no: "5", part: "Spring", material: "SS304" },
      { no: "6", part: "Plate", material: "Ductile iron" },
      { no: "7", part: "Washer", material: "PTFE" },
      { no: "8", part: "Packing", material: "NBR" },
      { no: "9", part: "Bolt", material: "Carbon steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/DUAL PLATE FLANGEG/check-valve-dual-plate-flanged-drawing-2-600x400.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/DUAL PLATE FLANGEG/check-valve-dual-plate-flanged-drawing-1-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-dual-plate-flanged-dimension.pdf",
  },
  "swing": {
    id: "swing",
    name: "Swing",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/SWING/check-valve-swing-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Bolts", material: "Steel" },
      { no: "3", part: "Identification plate", material: "Aluminium" },
      { no: "4", part: "Bonnet", material: "Cast iron" },
      { no: "5", part: "Body gasket", material: "Graphite" },
      { no: "6", part: "Nuts", material: "Steel" },
      { no: "7", part: "Side plug", material: "Brass" },
      { no: "8", part: "Gasket", material: "Fiber" },
      { no: "9", part: "Hanger pin", material: "Brass" },
      { no: "10", part: "Hanger", material: "Ductile iron" },
      { no: "11", part: "Disc ring", material: "Cast bronze" },
      { no: "12", part: "Disc", material: "Cast iron" },
      { no: "13", part: "Washer", material: "Steel" },
      { no: "14", part: "Split pin", material: "Stainless steel" },
      { no: "15", part: "Seat ring", material: "Cast bronze" },
      { no: "16", part: "Disc nut", material: "Steel" },
      { no: "17", part: "Stud bolt", material: "Steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/SWING/check-valve-swing-drawing-600x532.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-swing-dimension.pdf",
  },
  "swing-with-rubber-disc": {
    id: "swing-with-rubber-disc",
    name: "Swing With Rubber Disc",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/SWING WITH RUBBER DISC/check-valve-swing-check-valve-with-rubber-disc-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "O ring", material: "Rubber" },
      { no: "3", part: "Bonnet", material: "Ductile iron" },
      { no: "4", part: "Bolt", material: "Galvanized steel" },
      { no: "5", part: "Plug", material: "Galvanized steel" },
      { no: "6", part: "Disc", material: "Steel + rubber" },
      { no: "7", part: "Bar", material: "Steel" },
      { no: "8", part: "Lining", material: "Rubber" },
      { no: "9", part: "Reinforcement fabric", material: "Nylon" },
      { no: "10", part: "Disc plate", material: "Carbon steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/SWING WITH RUBBER DISC/check-valve-swing-check-valve-with-rubber-disc-drawing-2.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/SWING WITH RUBBER DISC/check-valve-swing-check-valve-with-rubber-disc-drawing-1-600x476.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-swing-with-rubber-disc-dimension.pdf"
  },
  "ball": {
    id: "ball",
    name: "Ball",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/BALL/check-valve-ball-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Ball foot", material: "Ductile iron+NBR" },
      { no: "3", part: "Gasket", material: "NBR" },
      { no: "4", part: "Bonnet", material: "Ductile iron, Cast iron" },
      { no: "5", part: "Bolt", material: "Carbon steel" },
      { no: "6", part: "Washer", material: "Carbon steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/BALL/check-valve-ball-drawing-2.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/BALL/check-valve-ball-drawing-1-600x496.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-swing-with-rubber-disc-dimension.pdf"
  },
  "nrv-reflux-valve": {
    id: "nrv-reflux-valve",
    name: "NRV Reflux Valve",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/NRV REFLUX VALVE/check-valve-NRV-reflux-valve-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Cast iron, Ductile iron, Carbon steel, Stainless steel" },
      { no: "2", part: "Seat", material: "NBR, EPDM, PTFE, Viton, Neoprene Hypalon, Silicon" },
      { no: "3", part: "Lower shaft", material: "Stainless steel 416, 316, 304" },
      { no: "4", part: "Disc", material: "Ductile iron+Ni (Nylon/Epoxy), CF8 CF8+PTFE (PFA) CF8M, CF8M+PTFE(PFA)" },
      { no: "5", part: "Upper shaft", material: "Stainless steel 416, 316, 304" },
      { no: "6", part: "Locating Pin", material: "Carbon steel" },
      { no: "7", part: "Bushing", material: "PTFE" },
      { no: "8", part: "O ring", material: "NBR, EPDM" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/NRV REFLUX VALVE/check-valve-NRV-reflux-valve-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-NRV-reflux-valve-dimension.pdf",
  },
  "tilting-disc": {
    id: "tilting-disc",
    name: "Tilting Disc",
    category: "Check Valve",
    mainImage: "/Images/DI CI VALVES/CHECK VALVE/TILTING DISC/check-valve-tilting-disc-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Counter weight", material: "GG25" },
      { no: "3", part: "Lever", material: "Q235 welded" },
      { no: "4", part: "Key", material: "420" },
      { no: "5", part: "Shaft", material: "420" },
      { no: "6", part: "O ring", material: "EPDM" },
      { no: "7", part: "Shaft cover", material: "304" },
      { no: "8", part: "Shaft bearing", material: "Al-bronze" },
      { no: "9", part: "Body seal ring", material: "304" },
      { no: "10", part: "Disc seal ring", material: "EPDM" },
      { no: "11", part: "Pin", material: "420" },
      { no: "12", part: "Disc", material: "GGG40" },
      { no: "13", part: "Retainer ring", material: "304" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/CHECK VALVE/TILTING DISC/check-valve-tilting-disc-drawing-3-768x425.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/TILTING DISC/check-valve-tilting-disc-drawing-2.jpg",
      "/Images/DI CI VALVES/CHECK VALVE/TILTING DISC/check-valve-tilting-disc-drawing-1.jpg"
    ],
    dimensionPdfUrl: "/pdf/check-valve-tilting-disc-dimension.pdf"
  },

  // Control Valve Products
  "float-control-valve": {
    id: "float-control-valve",
    name: "Float Control Valve",
    category: "Float Control Valve",
    mainImage: "/Images/DI CI VALVES/FLOAT CONTROL VALVE/float-control-valve-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Seat", material: "Brass" },
      { no: "3", part: "Platen", material: "CS" },
      { no: "4", part: "Sealing", material: "EPDM" },
      { no: "5", part: "Disc", material: "Ductile iron GGG50" },
      { no: "6", part: "Platen", material: "CS" },
      { no: "7", part: "Diaphragm", material: "EPDM" },
      { no: "8", part: "Nut", material: "Stainless steel" },
      { no: "9", part: "Stem", material: "SS410" },
      { no: "10", part: "Spring", material: "Stainless steel" },
      { no: "11", part: "Plug", material: "SS304" },
      { no: "12", part: "Bonnet", material: "Ductile iron GGG50" },
      { no: "13", part: "Bolt", material: "A2-70" },
      { no: "14", part: "Needle valve", material: "SS304" },
      { no: "15", part: "Globe gauge", material: "SS304" },
      { no: "16", part: "Thread float valve", material: "SS304" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/FLOAT CONTROL VALVE/float-control-valve-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/float-control-valve-dimension.pdf",
  },

  "flow-control-valve": {
    id: "flow-control-valve",
    name: "Flow Control Valve",
    category: "Flow Control Valve",
    mainImage: "/Images/DI CI VALVES/FLOW CONTROL VALVE/flow-control-valve-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Seat", material: "Brass" },
      { no: "3", part: "Platen", material: "CS" },
      { no: "4", part: "Sealing", material: "EPDM" },
      { no: "5", part: "Disc", material: "Ductile iron GGG50" },
      { no: "6", part: "Platen", material: "CS" },
      { no: "7", part: "Diaphragm", material: "EPDM" },
      { no: "8", part: "Nut", material: "Stainless steel" },
      { no: "9", part: "Stem", material: "SS410" },
      { no: "10", part: "Spring", material: "Stainless steel" },
      { no: "11", part: "Plug", material: "SS304" },
      { no: "12", part: "Bonnet", material: "Ductile iron GGG50" },
      { no: "13", part: "Bolt", material: "A2-70" },
      { no: "14", part: "Needle valve", material: "SS304" },
      { no: "15", part: "Globe gauge", material: "SS304" },
      { no: "16", part: "Thread float valve", material: "SS304" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/FLOW CONTROL VALVE/flow-control-valve-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/flow-control-valve-dimension.pdf",
  },

  "pressure-relief-valve": {
    id: "pressure-relief-valve",
    name: "Pressure Relief Valve",
    category: "Pressure Relief Valve",
    mainImage: "/Images/DI CI VALVES/PRESSURE RELIEF VALVE/pressure-relief-valve-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Seat", material: "Brass" },
      { no: "3", part: "Platen", material: "CS" },
      { no: "4", part: "Sealing", material: "EPDM" },
      { no: "5", part: "Disc", material: "Ductile iron GGG50" },
      { no: "6", part: "Platen", material: "CS" },
      { no: "7", part: "Diaphragm", material: "EPDM" },
      { no: "8", part: "Nut", material: "Stainless steel" },
      { no: "9", part: "Stem", material: "SS410" },
      { no: "10", part: "Spring", material: "Stainless steel" },
      { no: "11", part: "Plug", material: "SS304" },
      { no: "12", part: "Bonnet", material: "Ductile iron GGG50" },
      { no: "13", part: "Bolt", material: "A2-70" },
      { no: "14", part: "Needle valve", material: "SS304" },
      { no: "15", part: "Globe gauge", material: "SS304" },
      { no: "16", part: "Thread float valve", material: "SS304" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/PRESSURE RELIEF VALVE/pressure-relief-valve-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/flow-control-valve-dimension (1).pdf"
  },

  "pressure-reducing-valve": {
    id: "pressure-reducing-valve",
    name: "Pressure Reducing Valve",
    category: "Pressure Reducing Valve",
    mainImage: "/Images/DI CI VALVES/PRESSURE REDUCING VALVE/pressure-reducing-valve-product.png",
    partsAndMaterials: [
      { no: "1", part: "Body", material: "Ductile iron, Cast iron" },
      { no: "2", part: "Bolts", material: "Stainless steel" },
      { no: "3", part: "Cover", material: "Ductile iron, Cast iron" },
      { no: "4", part: "Spring", material: "Stainless steel" },
      { no: "5", part: "Stem", material: "Stainless steel" },
      { no: "6", part: "Nut", material: "Stainless steel" },
      { no: "7", part: "Plate", material: "Q235" },
      { no: "8", part: "Diaphragm", material: "EPDM" },
      { no: "9", part: "Seat", material: "Brass" },
      { no: "10", part: "Plate", material: "Q235" },
      { no: "11", part: "Gasket", material: "NBR" },
      { no: "12", part: "Diaphragm disc", material: "Ductile iron" },
      { no: "13", part: "Needle valve", material: "Brass" },
      { no: "14", part: "Ball valve", material: "Brass" },
      { no: "15", part: "Pilot valve", material: "Brass" },
      { no: "16", part: "Pressure gauge", material: "Stainless steel" }
    ],
    technicalDrawings: [
      "/Images/DI CI VALVES/PRESSURE REDUCING VALVE/air-valve-pressure-reducing-drawing.jpg"
    ],
    dimensionPdfUrl: "/pdf/Pressure_reducing_valve.pdf"
  }
};

// Create the navigation structure with dropdown menus
const ProductSidebar = ({ currentCategory, currentProduct }: { currentCategory: string; currentProduct: string }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([currentCategory]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  return (
    <div className="w-64 bg-slate-800 text-white min-h-screen">
      {Object.entries(productCategories).map(([categoryName, categoryData]) => (
        <div key={categoryName} className="border-b border-slate-700">
          <div className="flex items-center">
            <Link
              href={`/products?category=${encodeURIComponent(categoryName)}`}
              className={`flex-1 text-left px-4 py-3 hover:bg-slate-700 block ${categoryName === currentCategory ? 'bg-red-600' : ''
                }`}
            >
              <span className="text-sm font-medium">{categoryName}</span>
            </Link>
            {categoryData.subcategories && categoryData.subcategories.length > 0 && (
              <button
                onClick={() => toggleCategory(categoryName)}
                className="px-2 py-3 hover:bg-slate-700"
              >
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${expandedCategories.includes(categoryName) ? 'rotate-180' : ''
                    }`}
                />
              </button>
            )}
          </div>

          {expandedCategories.includes(categoryName) && categoryData.subcategories.length > 0 && (
            <div className="bg-slate-900">
              {categoryData.subcategories.map((subcategory) => (
                <Link
                  key={subcategory}
                  href={`/products?category=${encodeURIComponent(subcategory)}`}
                  className={`block px-6 py-2 text-sm hover:bg-slate-700 ${currentProduct === subcategory ? 'bg-slate-700 text-red-300' : ''
                    }`}
                >
                  {subcategory}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default function ProductDetail() {
  const params = useParams<{ id: string }>();
  const slug = params?.id || "";

  const product = productDetails[slug];

  // If the product is M.S Fittings, override the mainImage with the new elbow image
  if (product && product.id === "ms-fittings") {
    product.mainImage = "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-elbow-product.png";
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/products">
            <Button variant="outline" className="mb-4 text-white">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <ProductSidebar currentCategory={product.category} currentProduct={product.name} />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <Link href="/products">
              <Button variant="outline" className="mb-4 text-white">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Products
              </Button>
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
            <Badge variant="secondary">{product.category}</Badge>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image - Skip for Manhole Cover */}
            <div className="space-y-6">
              {product.id !== "manhole-cover" && (
                <Card>
                  <CardContent className="p-6">
                    <ZoomMagnifier
                      src={product.mainImage}
                      alt={product.name}
                      className="w-full h-auto rounded-lg"
                    />
                  </CardContent>
                </Card>
              )}

              {/* Pipes and Fittings - Vertical Display */}
              {product.additionalImages && product.additionalImages.length > 0 && (
                <Card>
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {product.additionalImages.map((image, index) => (
                        <div key={index} className="flex flex-col">
                          <h3 className="text-lg font-semibold mb-4 text-center">
                            {index === 0 ? "Pipes" : "Fittings"}
                          </h3>
                          <ZoomMagnifier
                            src={image}
                            alt={`${product.name} ${index === 0 ? "Pipes" : "Fittings"}`}
                            className="w-full h-auto rounded-lg border"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Dimensional Table */}
              {product.dimensionTable && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
                    <div className="overflow-x-auto">
                      {typeof product.dimensionTable === "string" && product.dimensionTable === "ductile-iron-grating-dimensions" && (
                        <table className="w-full border-collapse border border-gray-300 text-sm">
                          <thead>
                            <tr className="bg-gray-100">
                              <th className="border border-gray-300 px-3 py-2 text-center">Size (mm)</th>
                              <th className="border border-gray-300 px-3 py-2 text-center">Grade</th>
                              <th className="border border-gray-300 px-3 py-2 text-center bg-red-100">Clear Opening</th>
                              <th className="border border-gray-300 px-3 py-2 text-center bg-blue-100">Height (mm)</th>
                            </tr>
                            <tr className="bg-gray-50">
                              <th className="border border-gray-300 px-3 py-2 text-center">Frame Dimensions</th>
                              <th className="border border-gray-300 px-3 py-2 text-center"></th>
                              <th className="border border-gray-300 px-3 py-2 text-center">QxQ1</th>
                              <th className="border border-gray-300 px-3 py-2 text-center">H</th>
                            </tr>
                          </thead>
                          <tbody>
                            {[
                              { size: "100x450", grade: "B-125", opening: "100x450", height: "25" },
                              { size: "300x600", grade: "A-15", opening: "300x600", height: "40" },
                              { size: "300x600", grade: "C-250", opening: "300x600", height: "40" },
                              { size: "340x600", grade: "A-15", opening: "340x600", height: "40" },
                              { size: "450x600", grade: "C-250", opening: "450x600", height: "40" },
                              { size: "450x600", grade: "C-250", opening: "450x600", height: "40" },
                              { size: "550x600", grade: "C-250", opening: "550x600", height: "40" },
                              { size: "400x400", grade: "A-15", opening: "400x400", height: "40" },
                              { size: "400x400", grade: "C-250", opening: "400x400", height: "50" },
                              { size: "500x500", grade: "A-15", opening: "500x500", height: "50" },
                              { size: "500x500", grade: "C-250", opening: "500x500", height: "50" },
                              { size: "600x600", grade: "A-15", opening: "600x600", height: "40" },
                              { size: "600x600", grade: "C-250", opening: "600x600", height: "40" },
                              { size: "700x700", grade: "C-250", opening: "700x700", height: "50" },
                              { size: "800x800", grade: "C-250", opening: "800x800", height: "50" },
                              { size: "380x600", grade: "B-125", opening: "380x600", height: "25" },
                              { size: "380x600", grade: "C-250", opening: "380x600", height: "25" },
                              { size: "545x600", grade: "D-400", opening: "545x600", height: "40" },
                              { size: "645x600", grade: "D-400", opening: "645x600", height: "40" },
                              { size: "500x600", grade: "C-250", opening: "500x600", height: "40" },
                              { size: "370x500", grade: "D-400", opening: "370x500", height: "40" },
                              { size: "520x500", grade: "D-400", opening: "520x500", height: "40" },
                              { size: "675x500", grade: "D-400", opening: "675x500", height: "40" },
                              { size: "370x500", grade: "F-900", opening: "370x500", height: "65" },
                              { size: "675x500", grade: "F-900", opening: "675x500", height: "65" }
                            ].map((row, index) => (
                              <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                <td className="border border-gray-300 px-3 py-2 text-center">{row.size}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{row.grade}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{row.opening}</td>
                                <td className="border border-gray-300 px-3 py-2 text-center">{row.height}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      )}
                    </div>
                    {typeof product.dimensionTable === "string" && product.dimensionTable === "ductile-iron-grating-dimensions" && (
                      <div className="mt-4 text-sm text-gray-600">
                        <p>*Grade A-15=1.5 MT. (LD)</p>
                        <p>*Grade B-125=12.5 MT. (MD)</p>
                        <p>*Grade C-250=25.0 MT. (HD)</p>
                        <p>*Grade D-400=40.0 MT. (EHD)</p>
                        <p>*Grade F-900=90.0 MT. (EHD)</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              {/* Parts & Materials Table */}
              {product.partsAndMaterials && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4 bg-blue-900 text-white p-3 rounded-t">
                      Parts & Material
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse border border-gray-300">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Part</th>
                            <th className="border border-gray-300 px-4 py-2 text-left">Material</th>
                          </tr>
                        </thead>
                        <tbody>
                          {product.partsAndMaterials.map((part, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="border border-gray-300 px-4 py-2 text-center">{part.no}</td>
                              <td className="border border-gray-300 px-4 py-2">{part.part}</td>
                              <td className="border border-gray-300 px-4 py-2">{part.material}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Technical Specifications */}
              {product.specifications && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
                    <div className="grid grid-cols-1 gap-4">
                      {Object.entries(product.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="font-medium capitalize">{key}:</span>
                          <span>{value}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Features */}
              {product.features && (
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-green-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>



          {/* Technical Drawings */}
          {product.technicalDrawings && product.technicalDrawings.length > 0 && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Technical Drawings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {product.technicalDrawings.map((drawing, index) => {
                    // Check for the specific drawing to increase width
                    const isWideDrawing =
                      drawing ===
                      "https://mercuryvalves.in/wp-content/uploads/2024/01/ductile-iron-pipe-cast-iron-double-flange-pipes-drawing.jpg" ||
                      drawing === "https://mercuryvalves.in/wp-content/uploads/2024/01/cast-iron-pipe-drawing.jpg";
                    return (
                      <div
                        key={index}
                        className={isWideDrawing ? "col-span-1 md:col-span-2 lg:col-span-3 flex justify-center" : ""}
                      >
                        <ZoomMagnifier
                          src={drawing}
                          alt={`${product.name} technical drawing ${index + 1}`}
                          className={
                            isWideDrawing
                              ? "w-full max-w-5xl h-auto rounded-lg border"
                              : "w-full h-auto rounded-lg border"
                          }
                        />
                        <p className="text-sm text-gray-600 text-center">
                          {index === 0 && "Double D Head"}
                          {index === 1 && "Diagonal Square Head"}
                          {index === 2 && "Technical Specifications"}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          )}


{/* Only for HDPE Pipes & Fittings */}
{product.id === "hdpe-pipes-fittings" && (
  <>
    {/* Fittings Images - 2 Large Side by Side (Now at the top) */}
    <Card className="mb-8">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-center">HDPE Fittings</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {product.additionalImages?.slice(1, 3).map((img, idx) => (
            <ZoomMagnifier
              key={idx}
              src={img || ""}
              alt={`HDPE Fittings ${idx + 1}`}
              className="w-full h-[340px] object-contain rounded-lg border-2 border-blue-200 shadow"
            />
          ))}
        </div>
      </CardContent>
    </Card>

    {/* Large Pipes Image (Now below Fittings) */}
    <Card className="mb-8">
      <CardContent className="p-6 flex flex-col items-center">
        <h3 className="text-xl font-semibold mb-4">HDPE Pipes</h3>
        <ZoomMagnifier
          src={product.additionalImages && product.additionalImages[0] ? product.additionalImages[0] : ""}
          alt="HDPE Pipes"
          className="w-full max-w-3xl h-auto rounded-lg border-2 border-blue-300 shadow-lg"
        />
      </CardContent>
    </Card>

    {/* Pipe Sizes Table */}
    {product.pipeSizesTable && product.pipeSizesTable.length > 0 && (
      <Card className="mb-8">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Pipe Sizes & Lengths</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left">Size</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Length</th>
                </tr>
              </thead>
              <tbody>
                {product.pipeSizesTable.map((item, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">{item.size}</td>
                    <td className="border border-gray-300 px-4 py-2">{item.length}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    )}
  </>
)}

          {/* Fittings Table */}
          {product.fittingsTable && product.fittingsTable.length > 0 && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Products Range</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="border border-gray-300 px-4 py-2 text-left">No.</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Products</th>
                        <th className="border border-gray-300 px-4 py-2 text-left">Sizes Available</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.fittingsTable.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-gray-300 px-4 py-2">{item.no}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.product}</td>
                          <td className="border border-gray-300 px-4 py-2">{item.sizes}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Fitting Images Gallery */}
          {product.fittingImages && product.fittingImages.length > 0 && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">HDPE Fittings Gallery</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {product.fittingImages.map((fitting, index) => (
                    <div key={index} className="text-center">
                      <ZoomMagnifier
                        src={
                          product.id === "ms-fittings" && fitting.name === "Reducing Elbow"
                            ? "/Images/MS PIPES AND FITTINGS/FITTINGS/mild-steel-fitting-reducing-elbow-product.png"
                            : fitting.image || ""
                        }
                        alt={fitting.name}
                        className="w-full h-32 object-contain rounded-lg border mb-2"
                      />
                      <p className="text-sm font-medium text-gray-700">{fitting.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

{/* UPVC Agriculture Pipes / Fittings - Pipes and Fittings Tables */}
{product.id === "upvc-agriculture-pipes-fittings" && (
  <>
    {/* Pipes Table */}
    <Card className="mb-8">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Pipes</h2>
        <div className="overflow-x-auto">
          <ZoomMagnifier
            src="/pdf/upvc-agriculture-pipes-and-fittings-pipe-size-1.jpg"
            alt="UPVC Pipes"
            className="w-full max-w-3xl mx-auto mb-6 rounded-lg border-2 border-blue-300 shadow-lg"
          />
        </div>
      </CardContent>
    </Card>
    {/* Fittings Table */}
    <Card className="mb-8">
      <CardContent className="p-8">
        <h2 className="text-2xl font-bold mb-6 text-center">Fittings</h2>
        <div className="overflow-x-auto">
          <ZoomMagnifier
            src="/pdf/upvc-agriculture-pipes-and-fittings-fittings-size.jpg"
            alt="UPVC Fittings"
            className="w-full max-w-3xl mx-auto mb-6 rounded-lg border-2 border-green-300 shadow-lg"
          />
        </div>
      </CardContent>
    </Card>
  </>
)}
          {/* Applications Table */}
          {product.applicationsTable && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Applications</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-50">
                        {Object.keys(product.applicationsTable).map((category, index) => (
                          <th key={index} className="border border-gray-300 px-4 py-2 text-center font-semibold">
                            {category}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {Array.from({ length: Math.max(...Object.values(product.applicationsTable || {}).map(arr => arr.length)) }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                          {Object.values(product.applicationsTable || {}).map((applications, colIndex) => (
                            <td key={colIndex} className="border border-gray-300 px-4 py-2 text-sm">
                              {applications[rowIndex] || ''}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}





                    {/* Dimension Tables */}
          {Array.isArray(product.dimensionPdfUrls) && product.dimensionPdfUrls.length > 0 ? (
            product.dimensionPdfUrls.map((url, idx) => (
              <Card className={idx === 0 ? "mt-8" : "mt-4"} key={url}>
                <CardContent className="p-6 flex items-center gap-4">
                  <span className="text-lg font-semibold">CLICK HERE TO VIEW THE DIMENSIONS PDF</span>
                  <Button
                    variant="default"
                    onClick={() => window.open(url, "_blank")}
                  >
                    View PDF
                  </Button>
                </CardContent>
              </Card>
            ))
          ) : product.dimensionPdfUrl ? (
            <Card className="mt-8">
              <CardContent className="p-6 flex items-center gap-4">
                <span className="text-lg font-semibold">CLICK HERE TO VIEW THE DIMENSIONS PDF</span>
                <Button
                  variant="default"
                  onClick={() => window.open(product.dimensionPdfUrl, "_blank")}
                >
                  View PDF
                </Button>
              </CardContent>
            </Card>
          ) : null}

          {/* Variants - Special Water Meter Layout */}
          {product.variants && product.variants.length > 0 && product.id === "multi-jet-magnetic-drive" && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Water Meter Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {product.variants.map((variant, index) => (
                    <div key={index} className="text-center">
                      <ZoomMagnifier
                        src={variant.image}
                        alt={variant.name}
                        className="w-full h-auto object-contain rounded-lg border mb-4"
                      />
                      <h4 className="font-semibold text-lg">{variant.name}</h4>
                      {variant.specifications && (
                        <div className="mt-2 text-sm text-gray-600">
                          <p>{variant.specifications.type}</p>
                          <p>{variant.specifications.temperature}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

{product.variants && product.variants.length > 0 && product.id !== "multi-jet-magnetic-drive" && (
  <div className="mt-8 space-y-8">
    {product.variants.map((variant, index) => (
      <Card key={index}>
        <CardContent className="p-6">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Product Image and Name */}
            <div className="lg:w-1/2 flex flex-col items-center">
              <ZoomMagnifier
                src={variant.image || ""}
                alt={variant.name}
                className="w-full h-auto object-contain rounded-lg border"
              />
              <h4 className="text-center font-semibold mt-4 text-lg">{variant.name}</h4>
            </div>
            {/* Specifications and Dimension Image */}
            <div className="lg:w-1/2 flex flex-col gap-6">
              {/* Specifications */}
              <div>
  <h5 className="font-semibold mb-2">Specifications</h5>
  {variant.specifications ? (
    <div className="grid grid-cols-1 gap-2">
      {Object.entries(variant.specifications).map(([key, value]) => (
        <div key={key} className="flex justify-between text-sm">
          <span className="font-medium capitalize">{key}:</span>
          <span>{value}</span>
        </div>
      ))}
    </div>
  ) : (
    <div className="text-gray-500 text-sm">No specifications available.</div>
  )}
</div>
{/* Dimension PDF Button for Variant */}
{(variant.dimensionPdfUrl || variant.drawing) && (
  <div className="mt-4">
    <Button
      variant="default"
      onClick={() => window.open(variant.dimensionPdfUrl || variant.drawing, "_blank")}
    >
      View Dimensions PDF
    </Button>
  </div>
)}
              {/* Dimension Image */}
              {variant.dimensionImage && product.id !== "manhole-cover" && (
  <div>
    <h5 className="font-semibold mb-3">Dimension Table</h5>
    <div className="border rounded-lg p-4 bg-gray-50">
      <ZoomMagnifier
        src={variant.dimensionImage || ""}
        alt={variant.name + " Dimensions"}
        className="w-full h-auto object-contain rounded"
      />
    </div>
  </div>
)}
            </div>
          </div>
        </CardContent>
      </Card>
    ))}
  </div>
)}

          {/* Custom Dimension Table for Water Meter */}
          {product.dimensionTable && Array.isArray(product.dimensionTable) && (
            <Card className="mt-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Dimensions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-blue-800 text-white">
                        {product.dimensionTable.length > 0 && Object.keys(product.dimensionTable[0]).map((header, index) => (
                          <th key={index} className="border border-gray-300 px-4 py-2 text-center font-semibold">
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {product.dimensionTable.map((row, rowIndex) => (
                        <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                          {Object.values(row).map((cell, cellIndex) => (
                            <td key={cellIndex} className="border border-gray-300 px-4 py-2 text-center">
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}