// RVR Table Data based on your provided table
const RVR_TABLE = {
    200: {FALS: 550, IALS: 750, BALS: 1000, NALS: 1200},
    210: {FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    220: {FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    230: {FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    240: {FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    250: {FALS: 550, IALS: 800, BALS: 1000, NALS: 1300},
    260: {FALS: 600, IALS: 800, BALS: 1100, NALS: 1300},
    280: {FALS: 600, IALS: 900, BALS: 1100, NALS: 1300},
    300: {FALS: 650, IALS: 900, BALS: 1200, NALS: 1400},
    320: {FALS: 700, IALS: 1000, BALS: 1200, NALS: 1400},
    340: {FALS: 800, IALS: 1100, BALS: 1300, NALS: 1500},
    360: {FALS: 900, IALS: 1200, BALS: 1400, NALS: 1600},
    380: {FALS: 1000, IALS: 1300, BALS: 1500, NALS: 1700},
    400: {FALS: 1100, IALS: 1400, BALS: 1600, NALS: 1800},
    420: {FALS: 1200, IALS: 1500, BALS: 1700, NALS: 1900},
    440: {FALS: 1300, IALS: 1600, BALS: 1800, NALS: 2000},
    460: {FALS: 1400, IALS: 1700, BALS: 1900, NALS: 2100},
    480: {FALS: 1500, IALS: 1800, BALS: 2000, NALS: 2200},
    500: {FALS: 1500, IALS: 1800, BALS: 2100, NALS: 2300},
    520: {FALS: 1600, IALS: 1900, BALS: 2100, NALS: 2400},
    540: {FALS: 1700, IALS: 2000, BALS: 2200, NALS: 2400},
    560: {FALS: 1800, IALS: 2100, BALS: 2300, NALS: 2500},
    580: {FALS: 1900, IALS: 2200, BALS: 2400, NALS: 2600},
    600: {FALS: 2000, IALS: 2300, BALS: 2500, NALS: 2700},
    620: {FALS: 2100, IALS: 2400, BALS: 2600, NALS: 2800},
    640: {FALS: 2200, IALS: 2500, BALS: 2700, NALS: 2900},
    660: {FALS: 2300, IALS: 2600, BALS: 2800, NALS: 3000},
    680: {FALS: 2400, IALS: 2700, BALS: 2900, NALS: 3100},
    700: {FALS: 2500, IALS: 2800, BALS: 3000, NALS: 3200},
    720: {FALS: 2600, IALS: 2900, BALS: 3100, NALS: 3300},
    740: {FALS: 2700, IALS: 3000, BALS: 3200, NALS: 3400},
    760: {FALS: 2700, IALS: 3000, BALS: 3300, NALS: 3500},
    800: {FALS: 3100, IALS: 3400, BALS: 3600, NALS: 3800},
    850: {FALS: 3300, IALS: 3600, BALS: 3800, NALS: 4000},
    900: {FALS: 3600, IALS: 3900, BALS: 4100, NALS: 4300},
    950: {FALS: 3800, IALS: 4100, BALS: 4300, NALS: 4500},
    1000: {FALS: 4100, IALS: 4400, BALS: 4600, NALS: 4900},
    1100: {FALS: 4600, IALS: 4900, BALS: 5000, NALS: 5000},
    1200: {FALS: 5000, IALS: 5000, BALS: 5000, NALS: 5000}
};

// Show/hide procedure options
document.getElementById('noncdfa').addEventListener('change', function() {
    document.getElementById('nonCdfaOptions').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('cdfa').addEventListener('change', function() {
    document.getElementById('nonCdfaOptions').style.display = this.checked ? 'none' : 'block';
});

// Show/hide calculators
document.getElementById('showCat1').addEventListener('change', function() {
    document.getElementById('cat1Calculator').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('showLnavVnav').addEventListener('change', function() {
    document.getElementById('lnavVnavCalculator').style.display = this.checked ? 'block' : 'none';
});

document.getElementById('showCircling').addEventListener('change', function() {
    document.getElementById('circlingCalculator').style.display = this.checked ? 'block' : 'none';
});

// Utility functions
function roundUpTo10(value) {
    return Math.ceil(value / 10) * 10;
}

function getRVRFromTable(dh, lightType) {
    const dhKeys = Object.keys(RVR_TABLE).map(Number).sort((a, b) => a - b);
    let closestDH = dhKeys[0];
    
    for (let i = 0; i < dhKeys.length; i++) {
        if (dhKeys[i] <= dh) {
            closestDH = dhKeys[i];
        } else {
            break;
        }
    }
    
    return RVR_TABLE[closestDH] ? RVR_TABLE[closestDH][lightType] || 0 : 0;
}

function calculateCAT1(cat, dh, da, rvr, thrElev, lightType, isProcCDFA, isNonCDFAForCat) {
    // Raise DH to minimum 200
    const dhRaised = Math.max(dh || 0, 200);
    
    // Calculate DA
    const daCalc = (thrElev || 0) + dhRaised;
    const daFinal = Math.max(da || 0, daCalc);
    
    // Calculate RVR
    const rvrTable = getRVRFromTable(dhRaised, lightType);
    let rvrFinal = Math.max(rvr || 0, rvrTable);
    
    // Apply CDFA limits if applicable
    if (isProcCDFA && !isNonCDFAForCat) {
        const maxRVR = (cat === 'A' || cat === 'B') ? 1500 : 2400;
        if (rvrTable > maxRVR && (!rvr || rvr <= maxRVR)) {
            rvrFinal = maxRVR;
        }
    }
    
    return {
        da: `${daFinal}(${dhRaised})`,
        rvr: `${rvrFinal}m`
    };
}

function calculateLNAVVNAV(cat, dh, da, rvr, thrElev, lightType, isProcCDFA, isNonCDFAForCat) {
    // Raise DH to minimum 250
    const dhRaised = Math.max(dh || 0, 250);
    
    // Calculate DA
    const daCalc = (thrElev || 0) + dhRaised;
    const daFinal = Math.max(da || 0, daCalc);
    
    // Calculate RVR
    const rvrTable = getRVRFromTable(dhRaised, lightType);
    let rvrFinal = Math.max(rvr || 0, rvrTable);
    
    // Apply CDFA limits if applicable
    if (isProcCDFA && !isNonCDFAForCat) {
        const maxRVR = (cat === 'A' || cat === 'B') ? 1500 : 2400;
        if (rvrTable > maxRVR && (!rvr || rvr <= maxRVR)) {
            rvrFinal = maxRVR;
        }
    }
    
    return {
        da: `${daFinal}(${dhRaised})`,
        rvr: `${rvrFinal}m`
    };
}

function calculateCircling(cat, mdh, mda, vis, adElev) {
    // Category minimums for MDH
    const catMinimums = {A: 400, B: 500, C: 600, D: 700};
    const mdhRaised = Math.max(mdh || 0, catMinimums[cat]);
    
    // Calculate MDA
    const mdaCalc = roundUpTo10((adElev || 0) + mdhRaised);
    const mdaFinal = Math.max(mda || 0, mdaCalc);
    
    // Calculate VIS
    const visDefaults = {A: 1.5, B: 1.6, C: 2.4, D: 3.6};
    const visFinal = Math.max(vis || 0, visDefaults[cat]);
    
    return {
        mda: `${mdaFinal}(${mdhRaised})`,
        vis: `${visFinal}km`
    };
}

function calculate() {
    const adElev = parseFloat(document.getElementById('adElev').value) || 0;
    const thrElev = parseFloat(document.getElementById('thrElev').value) || 0;
    const lightType = document.getElementById('lightType').value;
    const isProcCDFA = document.getElementById('cdfa').checked;
    
    const isNonCDFAForAB = document.getElementById('catAB').checked;
    const isNonCDFAForCD = document.getElementById('catCD').checked;
    const isNonCDFAForAll = document.getElementById('allCats').checked;
    
    const cats = ['A', 'B', 'C', 'D'];
    
    cats.forEach(cat => {
        const isNonCDFAForCat = isNonCDFAForAll || 
            (cat === 'A' || cat === 'B' ? isNonCDFAForAB : isNonCDFAForCD);
        
        // CAT 1 Calculations
        const cat1DH = parseFloat(document.getElementById(`cat1_${cat.toLowerCase()}_dh`).value) || 0;
        const cat1DA = parseFloat(document.getElementById(`cat1_${cat.toLowerCase()}_da`).value) || 0;
        const cat1RVR = parseFloat(document.getElementById(`cat1_${cat.toLowerCase()}_rvr`).value) || 0;
        
        if (cat1DH || cat1DA) {
            const cat1Result = calculateCAT1(cat, cat1DH, cat1DA, cat1RVR, thrElev, lightType, isProcCDFA, isNonCDFAForCat);
            document.getElementById(`cat1_${cat.toLowerCase()}_result`).innerHTML = 
                `DA: ${cat1Result.da}<br>RVR: ${cat1Result.rvr}`;
        }
        
        // LNAV/VNAV Calculations
        const lnavDH = parseFloat(document.getElementById(`lnav_${cat.toLowerCase()}_dh`).value) || 0;
        const lnavDA = parseFloat(document.getElementById(`lnav_${cat.toLowerCase()}_da`).value) || 0;
        const lnavRVR = parseFloat(document.getElementById(`lnav_${cat.toLowerCase()}_rvr`).value) || 0;
        
        if (lnavDH || lnavDA) {
            const lnavResult = calculateLNAVVNAV(cat, lnavDH, lnavDA, lnavRVR, thrElev, lightType, isProcCDFA, isNonCDFAForCat);
            document.getElementById(`lnav_${cat.toLowerCase()}_result`).innerHTML = 
                `DA: ${lnavResult.da}<br>RVR: ${lnavResult.rvr}`;
        }
        
        // Circling Calculations
        const circMDH = parseFloat(document.getElementById(`circ_${cat.toLowerCase()}_mdh`).value) || 0;
        const circMDA = parseFloat(document.getElementById(`circ_${cat.toLowerCase()}_mda`).value) || 0;
        const circVIS = parseFloat(document.getElementById(`circ_${cat.toLowerCase()}_vis`).value) || 0;
        
        if (circMDH || circMDA) {
            const circResult = calculateCircling(cat, circMDH, circMDA, circVIS, adElev);
            document.getElementById(`circ_${cat.toLowerCase()}_result`).innerHTML = 
                `MDA: ${circResult.mda}<br>VIS: ${circResult.vis}`;
        }
    });
}

// Auto-calculate on input change
document.addEventListener('input', function(e) {
    if (e.target.type === 'number') {
        calculate();
    }
});

document.addEventListener('change', function(e) {
    if (e.target.type === 'radio' || e.target.type === 'checkbox' || e.target.type === 'select-one') {
        calculate();
    }
});
