## Minima Calculator

Minima Calculator - Project Changelog & Updates

Date: September 29, 2026

License: GNU GPLv3

🚀 Overview of Today's Updates

Today’s release introduces the dedicated AIA Version (As-Is Aerodrome Minimums Tool), fixes critical execution bugs, updates header navigation controls, and introduces an interactive Notes System inside the summary results view.

📌 Key Enhancements & Features

1. AIA Version Implementation (Pass-Through Mode)

Pure Pass-Through Logic: Bypasses standard regulatory minimum capping, DH elevation adjustments (e.g., forcing 200/250/300/350 ft), CDFA/NFC rules, and automatic RVR lookup table overrides.

As-Is Data Processing: Output DA, MDA, DH, MDH, RVR, and VIS values match the user-provided inputs directly.

Meter-to-Feet Unit Conversion: Retained option allowing values entered in meters to convert into feet using Math.ceil(meters * 3.28084).

2. Interactive Summary Notes System

Summary Notes Toggle: Added a dynamic checkbox (Enable Notes in Summary of Results) within the results section.

Procedure & Category Annotations: Users can enter custom text notes next to individual procedures (e.g., ILS, LOC, VOR) and specific aircraft categories (CAT A, B, C, D).

General Remarks Field: Added a multi-line text area at the base of the summary section for overall operational remarks or crew briefings.

State Preservation: Note inputs automatically persist across live calculations so typing is preserved during input updates.

3. UI, Navigation & Layout Upgrades

Floating Header Navigation: Added clean SVG-icon floating buttons for seamless app navigation:

🏠 Home Button: Top-left fixed link pointing to index.html.

🚁 Helicopter Tool (Beta): Top-right link.

📄 AIA Version Tool: Top-right link below the zoom controls.

Unified Styling: Updated spacing, responsive card grid layout, input groupings, and color contrast.

Zoom Controls: Integrated quick-access floating zoom controls (+, -) with an active percentage indicator.

4. Code Maintenance & Bug Fixes

Restored Missing Functions: Re-implemented missing procedure rendering logic (renderProcedureCheckboxes) to fix runtime JavaScript execution errors.

Fixed Code Truncation: Re-supplied truncated RVR_TABLE_RANGES lookup definitions.

State Management: Fixed input clear routines to reset procedure checkboxes, notes state, unit conversions, and results cleanly.

📁 Updated Files

index.html - Primary Minima Calculator (AIA State As-Is Tool with Notes functionality).

minima_calculator_aia_version.html - Linked standalone AIA version.

README.md - Documentation & project update summary.
#### Version: Latest (2/11/26)



## **Overview**

This web tool calculates and displays required regulatory minima for aviation approaches and procedures, supporting all categories (CAT A/B/C/D), approach types (precision, non-precision, circling), and custom user input. It enables instant compliance checking, regulatory comparison, and operational documentation.

***
Latest update (2025-08-17): Added the "Circling Raise for Procedure" feature, which dynamically adjusts circling minima when any procedure’s DH/MDH or RVR exceeds circling values for the same category. This results in additional raised circling summaries per procedure to ensure safer, compliant minima, improving user visibility and operational accuracy.

## **Features and Logic Implemented**

### **1. Regulatory Minima Calculation**
- Uses official **table-based RVR/VIS minima** for all approaches and lighting facilities.
- Handles **precision approaches** (CAT I, RNP, GLS, PAR, LPV, LNAV/VNAV).
- Handles **non-precision approaches** (LOC, LOC+DME, VOR+DME, LNAV, SRA, LDA, VOR, NDB+DME, NDB).
- Handles **Circling** procedures (CAT A/B/C/D).
- Values are calculated per **selected lighting facility**, **procedure type**, and **category**.

### **2. Custom Business Rules**
- **Minimum RVR Rules:**
    - Precision approaches: Cannot use RVR values below regulatory table minima.
    - Non-Precision (CDFA): Minimum RVR 750m; cannot use less.
    - Non-Precision (Non-CDFA): Minimum RVR 1000m (CAT A/B), 1200m (CAT C/D); cannot use less.
- **LNAV/VNAV Approaches:**  
    - Minimum DH is 250ft for calculations; any lower value automatically raised.
- **Non-Precision, MDH >1200ft Rule:**
    - If user MDH is above 1200ft for any non-precision procedure, system forces Non-CDFA and RVR value is 5000m for that row.
- **Circling:**  
    - Uses fixed visibility minima by CAT (A:1.5km, B:1.6km, C:2.4km, D:3.6km).

### **3. CDFA/Non-CDFA Handling**
- CDFA and Non-CDFA conditions toggled by main option and sub-options (CAT A/B only, CAT C/D only).
- Applies correct CDFA RVR caps or no caps/rules per selection and procedure.

### **4. User Interaction Controls**
- **Clear All Button:**  
    - Instantly resets all user inputs, selections, and results for fresh calculation.
- **Page Zoom Controls:**  
    - Fixed top-right bar to zoom the entire tool in/out, improving accessibility.
- **Font Zoom Controls:**  
    - Additional feature to zoom font sizes if configured.

### **5. Regulatory Status Highlighting**
#### NEW and LATEST (2025-08-16):

- **Summary Display:** (Located at top/left of summary results section)
    - **STANDARD** box: Highlighted green if ALL calculated values are standard compliant (at or below required minima).
    - **STATE** box: Highlighted red if ANY calculated value is a "STATE" value (user input is strictly above required minimum).
- **Calculated Value Highlighting:**
    - If any result for any row (RVR or VIS) is a STATE value, that specific value is highlighted in red in the summary panel.
    - All other values remain plain/normal—no clutter, no box next to every row.
- **Instant, automatic feedback:**  
    - User immediately sees if any approach has a value over regulatory minimum, at-a-glance.
    - Does **NOT** change calculation, compliance, or workflow logic—this is for UI visibility only.

***

## **How To Use**

1. **Open the tool in any modern browser.**
2. **Select procedure type, category, and lighting as needed.**
3. **Enter relevant user data (DH, MDH, DA/MDA, RVR/VIS) for each approach.**
4. **Click “Calculate All”.**
5. **Review calculated results and regulatory compliance in the summary:**
    - STANDARD box green = all values compliant.
    - STATE box red = at least one approach/row uses non-standard minimum; corresponding calculated value appears red.
6. **Use Clear All to clear inputs, and zoom buttons to adjust page size for comfort.**

***

## **Installation** (See Recent update- Use only "index.html" file)

- Copy `index.html` and `calculator.js` to your project directory.
- Ensure CSS snippet for state indicators is within `` or `` block in your HTML.
- Paste the latest summary logic at the end of `calculator.js`.
- No other configuration is required.

***

## **Support and Customization**

- For additional features, bugfixes, or rule changes, contact **Vishal K Basson**.
- You can request downloadable bundles, UI tweaks, or workflow improvements at any time.

***

## **CHANGELOG**

### **Latest (2025-08-16):**
- Added summary “STANDARD/STATE” highlight logic for instant regulatory status detection.
- Added calculated value highlighting in red for STATE results.
- No per-row box, no workflow clutter—simple, clear summary.
- All other calculation and logic features from previous versions remain.

🚀 Recent Updates (11-2-26)

Single-File Consolidation: Integrated all HTML structure, CSS styling, and JavaScript logic into index.html for maximum compatibility and zero-latency performance.

Dynamic Unit Conversion: Added a real-time toggle to switch between Meter and Feet inputs for DH/MDH, with automatic conversion to the standard 3.28084 ratio.

Enhanced CDFA/Non-CDFA Logic: Automated selection for Non-CDFA rules per Category (A/B or C/D) with forced 5000m RVR rules for MDH exceeding 1200ft.

Precision Floor Logic: Implemented mandatory minimums (250ft for LNAV/VNAV, 200ft for CAT 1) ensuring calculations never dip below safety standards.

📂 File Structure

index.html: The complete application. Contains the CSS grid layout, the RVR lookup arrays, and the calculation event listeners.

⚖️ License

This project is licensed under the GNU General Public License v3.0 (GPL-3.0).

Copyleft: Any derivative work must also be open-source under the same license.

Freedom: You are free to use, modify, and distribute this software.

⚠️ Disclaimer (Experimental Tool)

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND. This is an experiment/demonstration tool only. Calculations provided by this tool are for educational purposes and must NOT be used for actual flight planning or navigation. Always cross-reference results with official charts. The author assumes no liability for errors or consequences resulting from the use of this software.

Created by Vishal Kumar Basson



