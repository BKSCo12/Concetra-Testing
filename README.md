# BK Carrier Shield Compliance Desk Reference

**Professional compliance verification dashboard for Non-DOT 5-Panel Rapid Drug Screen Protocol**

## Overview

This project provides a complete compliance desk reference with three document cards covering:

1. **eScreen (R) by Abbott** - Collection Receipt / eCCF verification (Blue header)
2. **Concentra (R) Urgent Care** - Non-Federal CCF Carbonless Form (Orange header)
3. **BK Carrier Shield Official Result Certificate** - DER Portal / Concentra HUB Results (Navy header)

Plus an intake protocol checklist for compliance staff.

## Quick Start

### View Online
Open `index.html` in any modern web browser to view the compliance dashboard with a Print / Save as PDF button.

### Generate PDF
```bash
npm install
npm start
```

This generates: `BK_Carrier_Shield_Desk_Reference.pdf`

## Features

✅ Professional three-card compliance layout
✅ Color-coded sections (Blue/Orange/Navy)
✅ High-contrast data tables
✅ Red warning banners for critical compliance notes
✅ Green success banner for pass results
✅ Print-optimized CSS for clean 8.5x11 output
✅ Puppeteer PDF rendering (landscape Letter format)
✅ Full specimen and MRO details
✅ 5-Panel substance breakdown with cutoff levels
✅ Intake protocol checklist

## Compliance Details

**Employer:** BK Carrier Shield, 8390 Hollywood Hills Ave, Las Vegas, NV 89178 (Account #: BKC-89178-NV)

**Donor:** SMICK, BRANDON | DOB: 06/23/1983 | SSN: 328-80-0834

**Facility:** Concentra Medical Centers #0382, 5850 Polaris Ave, Ste 100, Las Vegas, NV 89118 | (702) 739-9957

**Collector:** Marcus Ramirez, CPT

**MRO:** Dr. Michelle Alexander, MD | Concentra Central Medical Affairs, Kansas City, MO | 800-881-0722

**Specimen ID:** 1048291048 | Date: 10/05/2026

**Test Type:** 5-Panel Non-DOT Urine | Reason: Pre-Employment

**Result:** NEGATIVE (PASSED - ELIGIBLE FOR DISPATCH / SAFETY-SENSITIVE DUTY)

## 5-Panel Substances

| Substance | Cutoff | Result |
|-----------|--------|--------|
| Amphetamines (AMP/mAMP) | 500 ng/mL | NEGATIVE |
| Cocaine Metabolites (BZE) | 150 ng/mL | NEGATIVE |
| Marijuana Metabolite (THC) | 50 ng/mL | NEGATIVE |
| Opiates (Codeine/Morphine) | 2000 ng/mL | NEGATIVE |
| Phencyclidine (PCP) | 25 ng/mL | NEGATIVE |
| Specimen Validity (Creatinine/SG/pH) | Result | PASSED / NORMAL |

## Technology

- **Frontend:** HTML5 + CSS3 (print-optimized)
- **PDF Generation:** Puppeteer (Chromium-based)
- **Node.js Runtime:** 14.x or higher

## Browser Support

- Chrome, Chromium, Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

Private & Confidential - BK Carrier Shield
