# SAP Fiori – Procure-to-Pay (P2P) Prototype

> A fully interactive SAP Fiori UI5 prototype simulating the end-to-end Procure-to-Pay cycle for **FioriNex Pvt Ltd**, built with OpenUI5 and deployed on GitHub Pages.

---

## Live Demo

**[View Live Prototype](https://rajarshi-29.github.io/FioriNex/)**

---

## Project Overview

This prototype was built as part of the SAP Fiori course project at **KIIT University**. It simulates the standard SAP Fiori Procure-to-Pay business process using OpenUI5 (the open-source version of SAPUI5) with mock JSON data in place of a real SAP backend / OData service.

### Company Context

**FioriNex Pvt Ltd** is a mid-size manufacturing and procurement company modernising its purchasing operations using SAP Fiori apps on SAP S/4HANA.

---

## P2P Process Flow

```
Purchase Requisition (ME51N)
        ↓
PR Approval (ME28)
        ↓
Purchase Order (ME21N)
        ↓
Goods Receipt (MIGO – Mvt Type 101)
        ↓
Invoice Verification / 3-Way Match (MIRO)
        ↓
Payment Release (F110)
```

---

## Features

| Screen                      | SAP T-Code Equivalent | Functionality                                     |
| --------------------------- | --------------------- | ------------------------------------------------- |
| Fiori Launchpad             | `/ui2/flp`            | Tile-based home screen with live counters         |
| My Purchase Requisitions    | ME51N / ME53N         | List view with search, status filter, navigation  |
| Create Purchase Requisition | ME51N                 | Form with validation, dynamic PR creation         |
| Approve Purchase Orders     | ME28                  | Per-item approve/reject + bulk approve all        |
| Manage Purchase Orders      | ME2N                  | PO list with vendor, amount, delivery date        |
| Post Goods Receipt          | MIGO                  | Qty entry, movement type 101, post confirmation   |
| Verify Supplier Invoice     | MIRO                  | 3-way match panel, tax breakdown, payment release |

---

## Tech Stack

| Layer        | Technology                           |
| ------------ | ------------------------------------ |
| UI Framework | OpenUI5 1.108+ (SAP UI5 open-source) |
| Theme        | SAP Horizon (sap_horizon)            |
| Architecture | MVC – XML Views + JS Controllers     |
| Data Layer   | JSON Model (mock OData simulation)   |
| Routing      | sap.m.routing.Router                 |
| Hosting      | GitHub Pages                         |

---

## Project Structure

```
sap-fiori-p2p-prototype/
├── index.html                          ← Shell / entry point
├── webapp/
│   ├── Component.js                    ← UI5 Component root
│   ├── manifest.json                   ← App descriptor + routing config
│   ├── model/
│   │   └── mockdata.json               ← Simulated OData responses
│   ├── view/
│   │   ├── App.view.xml
│   │   ├── Launchpad.view.xml          ← Fiori tile grid
│   │   ├── PRList.view.xml             ← Purchase Requisition list
│   │   ├── PRCreate.view.xml           ← Create PR form
│   │   ├── PRApproval.view.xml         ← Approve / reject PRs
│   │   ├── POList.view.xml             ← Purchase Order list
│   │   ├── GoodsReceipt.view.xml       ← Post GR (Mvt 101)
│   │   └── Invoice.view.xml            ← Invoice verification + 3-way match
│   └── controller/
│       ├── Launchpad.controller.js
│       ├── PRList.controller.js
│       ├── PRCreate.controller.js
│       ├── PRApproval.controller.js
│       ├── POList.controller.js
│       ├── GoodsReceipt.controller.js
│       └── Invoice.controller.js
├── .github/
│   └── workflows/
│       └── deploy.yml                  ← Auto deploy to GitHub Pages
└── README.md
```

---

## How to Run Locally

No build tools or npm required. Just open with a local server:

**Option 1 – VS Code Live Server**

1. Install the "Live Server" extension in VS Code
2. Right-click `index.html` → "Open with Live Server"

**Option 2 – Python**

```bash
# Python 3
python -m http.server 8080
# Then open http://localhost:8080
```

**Option 3 – Node.js**

```bash
npx serve .
```

---

## SAP Fiori Architecture (Simulated)

```
Browser (Fiori Launchpad)
        ↕  OpenUI5 / SAPUI5
    XML Views + JS Controllers
        ↕  JSON Model (mock OData)
    mockdata.json
        ↕  [In production: SAP Gateway OData Services]
    SAP S/4HANA Backend
```

---

## Future Improvements

- Connect to a real SAP Gateway OData service
- Add SAP BTP authentication (XSUAA)
- Implement real-time notifications via SAP Event Mesh
- Add analytics dashboard with spend KPIs using sap.viz charts
- Mobile-optimised views for SAP Fiori mobile app

---

## Author

**Rajarshi Mukherjee** | KIIT University  
Course: SAP Fiori  
Academic Year: 2025-2026
