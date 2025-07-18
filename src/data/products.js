export const categories = [
  {
    id: "monitoring",
    name: "Patient Monitoring",
    description: "Advanced monitoring systems for patient care",
    image: "/api/placeholder/400/300",
    icon: "📊",
  },
  {
    id: "diagnostics",
    name: "Diagnostic Equipment",
    description: "Precision diagnostic tools and imaging systems",
    image: "/api/placeholder/400/300",
    icon: "🔬",
  },
  {
    id: "surgical",
    name: "Surgical Instruments",
    description: "Professional surgical tools and equipment",
    image: "/api/placeholder/400/300",
    icon: "⚕️",
  },
  {
    id: "emergency",
    name: "Emergency Care",
    description: "Life-saving emergency medical equipment",
    image: "/api/placeholder/400/300",
    icon: "🚑",
  },
  {
    id: "supplies",
    name: "Medical Supplies",
    description: "Essential medical supplies and consumables",
    image: "/api/placeholder/400/300",
    icon: "🏥",
  },
  {
    id: "respiratory",
    name: "Respiratory Care",
    description: "Breathing support and respiratory equipment",
    image: "/api/placeholder/400/300",
    icon: "💨",
  },
];

export const products = [
  {
    id: "pm-001",
    name: "Advanced Patient Monitor Pro",
    description:
      "Multi-parameter patient monitoring system with 15-inch touchscreen display, wireless connectivity, and comprehensive vital signs tracking.",
    price: 12999,
    originalPrice: 14999,
    image: "/api/placeholder/400/400",
    category: "monitoring",
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    features: [
      "15-inch HD touchscreen",
      "Wireless connectivity",
      "Multi-parameter monitoring",
      "Real-time alerts",
      "Data export capabilities",
    ],
    specifications: {
      "Screen Size": "15 inches",
      Connectivity: "Wi-Fi, Bluetooth, Ethernet",
      "Battery Life": "8 hours",
      Weight: "3.2 kg",
      Warranty: "3 years",
    },
    certifications: ["FDA Approved", "CE Marked", "ISO 13485"],
  },
  {
    id: "dg-001",
    name: "Digital X-Ray System",
    description:
      "High-resolution digital radiography system with advanced image processing and PACS integration for superior diagnostic imaging.",
    price: 89999,
    image: "/api/placeholder/400/400",
    category: "diagnostics",
    rating: 4.9,
    reviewCount: 89,
    inStock: true,
    features: [
      "High-resolution imaging",
      "PACS integration",
      "Low radiation dose",
      "Fast image processing",
      "Multiple format support",
    ],
    specifications: {
      Resolution: "4000 x 4000 pixels",
      "Detector Size": "35cm x 43cm",
      Power: "220V AC",
      Dimensions: "150 x 80 x 200 cm",
      Warranty: "5 years",
    },
    certifications: ["FDA 510(k)", "CE Marked", "IEC 60601-1"],
  },
  {
    id: "sg-001",
    name: "Precision Surgical Instrument Set",
    description:
      "Complete surgical instrument set with premium stainless steel construction, including forceps, scissors, and retractors.",
    price: 2499,
    originalPrice: 2999,
    image: "/api/placeholder/400/400",
    category: "surgical",
    rating: 4.7,
    reviewCount: 203,
    inStock: true,
    features: [
      "Premium stainless steel",
      "Autoclavable design",
      "Ergonomic handles",
      "Complete instrument set",
      "Carrying case included",
    ],
    specifications: {
      Material: "316L Stainless Steel",
      Pieces: "25 instruments",
      Sterilization: "Steam autoclave compatible",
      Case: "Aluminum carrying case",
      Warranty: "2 years",
    },
    certifications: ["CE Marked", "ISO 13485", "FDA Registered"],
  },
  {
    id: "em-001",
    name: "Emergency Defibrillator AED",
    description:
      "Automated External Defibrillator with voice guidance, LCD screen, and rapid charge technology for emergency cardiac care.",
    price: 3999,
    image: "/api/placeholder/400/400",
    category: "emergency",
    rating: 4.9,
    reviewCount: 156,
    inStock: true,
    features: [
      "Voice guidance system",
      "LCD display",
      "Rapid charge technology",
      "Pediatric capability",
      "Self-testing features",
    ],
    specifications: {
      "Energy Output": "150-360 Joules",
      "Charge Time": "< 8 seconds",
      "Battery Life": "5 years",
      Weight: "2.4 kg",
      "IP Rating": "IP55",
    },
    certifications: ["FDA Approved", "CE Marked", "AHA Guidelines"],
  },
  {
    id: "sp-001",
    name: "Disposable Medical Gloves Box",
    description:
      "Premium nitrile examination gloves, powder-free, latex-free, and suitable for medical procedures and examinations.",
    price: 89,
    originalPrice: 109,
    image: "/api/placeholder/400/400",
    category: "supplies",
    rating: 4.6,
    reviewCount: 1289,
    inStock: true,
    features: [
      "Powder-free formula",
      "Latex-free material",
      "Textured fingertips",
      "Ambidextrous design",
      "Single-use disposable",
    ],
    specifications: {
      Material: "Nitrile rubber",
      Quantity: "100 pieces per box",
      Sizes: "S, M, L, XL available",
      Thickness: "0.1mm",
      Color: "Blue",
    },
    certifications: ["FDA 510(k)", "CE Marked", "ASTM D6319"],
  },
  {
    id: "rp-001",
    name: "Portable Ventilator System",
    description:
      "Advanced portable ventilator with multiple ventilation modes, integrated monitoring, and emergency backup systems.",
    price: 45999,
    image: "/api/placeholder/400/400",
    category: "respiratory",
    rating: 4.8,
    reviewCount: 67,
    inStock: true,
    features: [
      "Multiple ventilation modes",
      "Integrated monitoring",
      "Emergency backup",
      "Portable design",
      "Advanced algorithms",
    ],
    specifications: {
      "Ventilation Modes": "8 modes",
      "Tidal Volume": "20-2000 mL",
      "Battery Life": "12 hours",
      Weight: "8.5 kg",
      Screen: "10.4 inch color display",
    },
    certifications: ["FDA 510(k)", "CE Marked", "ISO 80601-2-12"],
  },
  {
    id: "pm-002",
    name: "Vital Signs Monitor",
    description:
      "Compact vital signs monitor for blood pressure, temperature, pulse, and SpO2 measurements with wireless data transmission.",
    price: 1899,
    image: "/api/placeholder/400/400",
    category: "monitoring",
    rating: 4.5,
    reviewCount: 245,
    inStock: true,
    features: [
      "4-in-1 measurements",
      "Wireless transmission",
      "Compact design",
      "Large display",
      "Data storage",
    ],
    specifications: {
      Measurements: "BP, Temp, Pulse, SpO2",
      Display: "5-inch LCD",
      Memory: "1000 readings",
      Battery: "Rechargeable Li-ion",
      Weight: "1.2 kg",
    },
    certifications: ["FDA 510(k)", "CE Marked"],
  },
  {
    id: "dg-002",
    name: "Ultrasound Scanner Pro",
    description:
      "Professional ultrasound system with advanced imaging technology, multiple probes, and comprehensive diagnostic capabilities.",
    price: 34999,
    originalPrice: 39999,
    image: "/api/placeholder/400/400",
    category: "diagnostics",
    rating: 4.7,
    reviewCount: 98,
    inStock: true,
    features: [
      "Advanced imaging",
      "Multiple probe options",
      "3D/4D capabilities",
      "DICOM compatibility",
      "Portable cart design",
    ],
    specifications: {
      "Imaging Modes": "B, M, Color Doppler, PW",
      Probes: "Linear, Convex, Phased Array",
      Display: "19-inch HD monitor",
      Storage: "1TB SSD",
      Weight: "65 kg (with cart)",
    },
    certifications: ["FDA 510(k)", "CE Marked", "IEC 60601-2-37"],
  },
];

export const featuredProducts = products.slice(0, 4);
export const bestSellers = products.filter((p) => p.reviewCount > 100);
export const onSale = products.filter((p) => p.originalPrice);
