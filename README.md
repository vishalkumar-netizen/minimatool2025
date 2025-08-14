# minimatool2025 - Aviation Calculator Tool

A comprehensive aviation calculator tool for approach minimums calculations including CAT 1, LNAV/VNAV, and Circling approaches.

## Features

### Three Calculator Types
- **CAT 1 Calculator**: Decision Height (DH) and Decision Altitude (DA) calculations
- **LNAV/VNAV Calculator**: Lateral and Vertical Navigation approach calculations
- **Circling Calculator**: Minimum Descent Height (MDH) and Minimum Descent Altitude (MDA) calculations

### Key Functionality
- **Lighting Support**: FALS, IALS, BALS, NALS lighting systems
- **RVR Calculations**: Runway Visual Range based on regulatory tables
- **CDFA/Non-CDFA**: Continuous Descent Final Approach procedure support
- **Category Support**: CAT A, B, C, D aircraft categories
- **Visibility Calculations**: Automatic visibility minimums with user override

## How to Use

### Top Inputs
1. **AD Elev**: Aerodrome Elevation (meters)
2. **THR Elev**: Threshold Elevation (meters)
3. **Light**: Select lighting type (FALS/IALS/BALS/NALS)
4. **Procedure**: Choose CDFA or Non-CDFA with category selection

### Calculator Inputs
- **CAT 1 & LNAV/VNAV**: Enter DH, DA, and RVR values
- **Circling**: Enter MDH, MDA, and VIS values

### Results Display
- Results shown in format DA(DH) or MDA(MDH)
- RVR and Visibility displayed below main results
- Real-time calculation on input change

## Calculation Rules

### CAT 1 Calculator
- Minimum DH: 200 ft (auto-raised if lower)
- RVR based on lighting table and DH
- CDFA limits: 1500m (CAT A/B), 2400m (CAT C/D)

### LNAV/VNAV Calculator
- Minimum DH: 250 ft (auto-raised if lower)
- Same RVR logic as CAT 1
- Same CDFA limits as CAT 1

### Circling Calculator
- Minimum MDH per category:
  - CAT A: 400 ft
  - CAT B: 500 ft
  - CAT C: 600 ft
  - CAT D: 700 ft
- MDA rounded up to nearest 10
- Default VIS: A=1.5km, B=1.6km, C=2.4km, D=3.6km

## Technical Details
- Built with HTML, CSS, and JavaScript
- No external dependencies
- Responsive design for mobile and desktop
- Real-time calculations
- Based on aviation regulatory standards

## Usage
Open `index.html` in any modern web browser to use the calculator.

---
**This tool created by Vishal K Basson**
