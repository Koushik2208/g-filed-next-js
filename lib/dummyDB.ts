export const categories = [
  "Telecom",
  "Agriculture",
  "Real Estate",
  "Utilities",
  "Transportation",
  "Construction",
  "Disaster Management",
  "Urban Planning",
];

export const cards = [
  {
    title: "Agriculture",
    href: "../Agriculture/agriculture.html",
    // imgSrc: "../images/agriculture.jpg",
    imgSrc:
      "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "agriculture",
  },
  {
    title: "Health",
    href: "../Health/health.html",
    // imgSrc: "../images/health.jpg",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1673953509975-576678fa6710?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    department: "health",
  },
  {
    title: "Construction",
    href: "../Construction/construction.html",
    imgSrc:
      "https://images.unsplash.com/photo-1485083269755-a7b559a4fe5e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHVuZGVyJTIwY29uc3RydWN0aW9ufGVufDB8fDB8fHww",
    department: "construction",
  },
  {
    title: "Mining",
    href: "../Mining/mining.html",
    imgSrc:
      "https://images.unsplash.com/photo-1523848309072-c199db53f137?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWluaW5nfGVufDB8fDB8fHww",
    department: "mining",
  },
  {
    title: "Defence",
    href: "../Defence/defence.html",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1683133493443-0eee93bfe24f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGRlZmVuY2V8ZW58MHx8MHx8fDA%3D",
    department: "defence",
  },
  {
    title: "Real Estate",
    href: "../Real Estate/real_estate.html",
    imgSrc:
      "https://images.unsplash.com/photo-1589927725301-dda06a332802?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJlYWxlc3RhdGV8ZW58MHx8MHx8fDA%3D",
    department: "realestate",
  },
  {
    title: "Utilities",
    href: "../Utilities/utilitiesmainui.html",
    imgSrc:
      "https://images.unsplash.com/photo-1629168439208-dab1ee6f162e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXRpbGl0aWVzfGVufDB8fDB8fHww",
    department: "utilities",
  },
  {
    title: "Telecom",
    href: "../Telecom/telecome.html",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1673909405731-94b05ba69308?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlbGVjb218ZW58MHx8MHx8fDA%3D",
    department: "telecom",
  },
  {
    title: "Forest Resources",
    href: "../Forest/forest.html",
    imgSrc:
      "https://plus.unsplash.com/premium_photo-1666666222364-7479e7347833?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9yZXN0fGVufDB8fDB8fHww",
    department: "forestresourec",
  },
];

export const users = [
  {
    id: "u1",
    name: "Super Admin",
    email: "super@gfield.com",
    role: "super admin",
  },
  {
    id: "u2",
    name: "Admin One",
    email: "admin1@gfield.com",
    role: "admin",
    assignedCategories: ["Telecom", "Agriculture"],
    credits: 150,
  },
  {
    id: "u3",
    name: "Surveyor A",
    role: "surveyor",
    adminId: "u2",
  },
  {
    id: "u4",
    name: "Field Crew A",
    role: "crew",
    surveyorId: "u3",
  },
  {
    id: "u5",
    name: "Admin Two",
    email: "admin2@gfield.com",
    role: "admin",
    assignedCategories: ["Real Estate", "Urban Planning"],
    credits: 90,
  },
  {
    id: "u6",
    name: "Surveyor B",
    role: "surveyor",
    adminId: "u5",
  },
  {
    id: "u7",
    name: "Field Crew B",
    role: "crew",
    surveyorId: "u6",
  },
  {
    id: "u8",
    name: "Individual A",
    email: "individual1@gfield.com",
    role: "individual",
  },
];

export const surveyForms = [
  {
    id: "form1",
    title: "Tower Site Inspection",
    category: "Telecom",
    createdBy: "u3",
    geometryType: "Point",
    fields: [
      { name: "Site Name", type: "text", required: true },
      { name: "Signal Strength", type: "number", required: false },
      { name: "Upload Photo", type: "image", required: false },
    ],
  },
  {
    id: "form2",
    title: "Crop Condition Survey",
    category: "Agriculture",
    createdBy: "u3",
    geometryType: "Polygon",
    fields: [
      {
        name: "Crop Type",
        type: "select",
        options: ["Wheat", "Rice", "Maize"],
        required: true,
      },
      { name: "Health Rating", type: "number", required: true },
      { name: "Irrigated?", type: "boolean", required: false },
    ],
  },
  {
    id: "form3",
    title: "Building Footprint Mapping",
    category: "Real Estate",
    createdBy: "u6",
    geometryType: "Polygon",
    fields: [
      { name: "Building Name", type: "text", required: true },
      { name: "Floors", type: "number", required: true },
      { name: "Under Construction?", type: "boolean", required: false },
    ],
  },
  {
    id: "form4",
    title: "Public Park Assessment",
    category: "Urban Planning",
    createdBy: "u6",
    geometryType: "Point",
    fields: [
      { name: "Park Name", type: "text", required: true },
      { name: "Maintenance Rating", type: "number", required: true },
      { name: "Amenities Available", type: "text", required: false },
    ],
  },
];

export const surveyData = [
  {
    id: "data1",
    formId: "form1",
    submittedBy: "u4",
    geometry: {
      type: "Point",
      coordinates: [78.4867, 17.385],
    },
    attributes: {
      "Site Name": "Tower A",
      "Signal Strength": 85,
      "Upload Photo": "/uploads/tower-a.jpg",
    },
    timestamp: "2025-06-19T09:30:00Z",
  },
  {
    id: "data2",
    formId: "form2",
    submittedBy: "u4",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [78.5, 17.38],
          [78.51, 17.38],
          [78.51, 17.39],
          [78.5, 17.39],
          [78.5, 17.38],
        ],
      ],
    },
    attributes: {
      "Crop Type": "Rice",
      "Health Rating": 4,
      "Irrigated?": true,
    },
    timestamp: "2025-06-19T10:45:00Z",
  },
  {
    id: "data3",
    formId: "form3",
    submittedBy: "u7",
    geometry: {
      type: "Polygon",
      coordinates: [
        [
          [78.6, 17.4],
          [78.61, 17.4],
          [78.61, 17.41],
          [78.6, 17.41],
          [78.6, 17.4],
        ],
      ],
    },
    attributes: {
      "Building Name": "Green Estates",
      Floors: 5,
      "Under Construction?": false,
    },
    timestamp: "2025-06-18T15:20:00Z",
  },
  {
    id: "data4",
    formId: "form4",
    submittedBy: "u7",
    geometry: {
      type: "Point",
      coordinates: [78.495, 17.395],
    },
    attributes: {
      "Park Name": "Central Park",
      "Maintenance Rating": 3,
      "Amenities Available": "Playground, Gym",
    },
    timestamp: "2025-06-19T11:10:00Z",
  },
];

export const creditLogs = [
  {
    id: "c1",
    adminId: "u2",
    action: "Form Created",
    creditsUsed: 10,
    timestamp: "2025-06-18T12:00:00Z",
  },
  {
    id: "c2",
    adminId: "u2",
    action: "Data Submission",
    creditsUsed: 2,
    timestamp: "2025-06-19T09:30:00Z",
  },
  {
    id: "c3",
    adminId: "u5",
    action: "Form Created",
    creditsUsed: 10,
    timestamp: "2025-06-18T14:00:00Z",
  },
  {
    id: "c4",
    adminId: "u5",
    action: "Data Submission",
    creditsUsed: 3,
    timestamp: "2025-06-19T11:10:00Z",
  },
];
