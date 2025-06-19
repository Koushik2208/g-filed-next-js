export const categories = [
"Telecom",
"Agriculture",
"Real Estate",
"Utilities",
"Transportation",
"Construction",
"Disaster Management",
"Urban Planning"
];

export const users = [
{
id: "u1",
name: "Super Admin",
email: "[super@gfield.com](mailto:super@gfield.com)",
role: "super admin"
},
{
id: "u2",
name: "Admin One",
email: "[admin1@gfield.com](mailto:admin1@gfield.com)",
role: "admin",
assignedCategories: ["Telecom", "Agriculture"],
credits: 150
},
{
id: "u3",
name: "Surveyor A",
email: "[surveyor1@gfield.com](mailto:surveyor1@gfield.com)",
role: "surveyor",
adminId: "u2"
},
{
id: "u4",
name: "Field Crew A",
email: "[crew1@gfield.com](mailto:crew1@gfield.com)",
role: "crew",
surveyorId: "u3"
},
{
id: "u5",
name: "Admin Two",
email: "[admin2@gfield.com](mailto:admin2@gfield.com)",
role: "admin",
assignedCategories: ["Real Estate", "Urban Planning"],
credits: 90
},
{
id: "u6",
name: "Surveyor B",
email: "[surveyor2@gfield.com](mailto:surveyor2@gfield.com)",
role: "surveyor",
adminId: "u5"
},
{
id: "u7",
name: "Field Crew B",
email: "[crew2@gfield.com](mailto:crew2@gfield.com)",
role: "crew",
surveyorId: "u6"
}
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
{ name: "Upload Photo", type: "image", required: false }
]
},
{
id: "form2",
title: "Crop Condition Survey",
category: "Agriculture",
createdBy: "u3",
geometryType: "Polygon",
fields: [
{ name: "Crop Type", type: "select", options: ["Wheat", "Rice", "Maize"], required: true },
{ name: "Health Rating", type: "number", required: true },
{ name: "Irrigated?", type: "boolean", required: false }
]
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
{ name: "Under Construction?", type: "boolean", required: false }
]
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
{ name: "Amenities Available", type: "text", required: false }
]
}
];

export const surveyData = [
{
id: "data1",
formId: "form1",
submittedBy: "u4",
geometry: {
type: "Point",
coordinates: [78.4867, 17.3850]
},
attributes: {
"Site Name": "Tower A",
"Signal Strength": 85,
"Upload Photo": "/uploads/tower-a.jpg"
},
timestamp: "2025-06-19T09:30:00Z"
},
{
id: "data2",
formId: "form2",
submittedBy: "u4",
geometry: {
type: "Polygon",
coordinates: [[[78.5, 17.38], [78.51, 17.38], [78.51, 17.39], [78.5, 17.39], [78.5, 17.38]]]
},
attributes: {
"Crop Type": "Rice",
"Health Rating": 4,
"Irrigated?": true
},
timestamp: "2025-06-19T10:45:00Z"
},
{
id: "data3",
formId: "form3",
submittedBy: "u7",
geometry: {
type: "Polygon",
coordinates: [[[78.6, 17.4], [78.61, 17.4], [78.61, 17.41],[78.6, 17.41], [78.6, 17.4]]]
},
attributes: {
"Building Name": "Green Estates",
"Floors": 5,
"Under Construction?": false
},
timestamp: "2025-06-18T15:20:00Z"
},
{
id: "data4",
formId: "form4",
submittedBy: "u7",
geometry: {
type: "Point",
coordinates: [78.495, 17.395]
},
attributes: {
"Park Name": "Central Park",
"Maintenance Rating": 3,
"Amenities Available": "Playground, Gym"
},
timestamp: "2025-06-19T11:10:00Z"
}
];

export const creditLogs = [
{
id: "c1",
adminId: "u2",
action: "Form Created",
creditsUsed: 10,
timestamp: "2025-06-18T12:00:00Z"
},
{
id: "c2",
adminId: "u2",
action: "Data Submission",
creditsUsed: 2,
timestamp: "2025-06-19T09:30:00Z"
},
{
id: "c3",
adminId: "u5",
action: "Form Created",
creditsUsed: 10,
timestamp: "2025-06-18T14:00:00Z"
},
{
id: "c4",
adminId: "u5",
action: "Data Submission",
creditsUsed: 3,
timestamp: "2025-06-19T11:10:00Z"
}
];
