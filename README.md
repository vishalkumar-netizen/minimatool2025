## Aviation Minima Tool

#### Version: Latest (2025-08-16)

***

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

## **Installation**

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

***

**This is the latest version—fully up to date with every rule and feature. Paste the update, use as intended, and enjoy clear regulatory compliance feedback!**

