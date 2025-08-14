// --------- Editable: Define Procedure Groups/Types -----------

// Precision procedures (CAT 1 logic)
const PRECISION_PROC = [
    { code: 'cat1', name: 'CAT 1' },
    { code: 'rnp', name: 'RNP' },
    { code: 'gls', name: 'GLS' },
    { code: 'par', name: 'PAR' },
    { code: 'lpv', name: 'LPV' },
    { code: 'lnavvnav', name: 'LNAV/VNAV' }
];

// Non-Precision, min MDH 250
const NONPRECISION_PROC_250 = [
    { code: 'loc', name: 'LOC' },
    { code: 'locdme', name: 'LOC+DME' },
    { code: 'vordme', name: 'VOR+DME' },
    { code: 'lnav', name: 'LNAV' },
    { code: 'sra', name: 'SRA' },
    { code: 'lda', name: 'LDA' }
];
// Non-Precision, min MDH 300
const NONPRECISION_PROC_300 = [
    { code: 'vor', name: 'VOR' },
    { code: 'ndbdme', name: 'NDB+DME' }
];
// Non-Precision, min MDH 350
const NONPRECISION_PROC_350 = [
    { code: 'ndb', name: 'NDB' }
];
// Circling
const CIRCLING_PROC = [
    { code: 'circling', name: 'Circling' }
];

const ALL_PROCS = [
    ...PRECISION_PROC.filter(p=>p.code!=='lnavvnav'), // We'll handle LNAV/VNAV separately
    ...NONPRECISION_PROC_250,
    ...NONPRECISION_PROC_300,
    ...NONPRECISION_PROC_350,
    ...CIRCLING_PROC
];

// --------- RVR Table Range (FILL OUT with full table) ---------
const RVR_TABLE_RANGES = [
    {low: 200, high: 210, FALS: 550, IALS: 750, BALS: 1000, NALS: 1200},
    {low: 211, high: 220, FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    {low: 221, high: 230, FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    {low: 231, high: 240, FALS: 550, IALS: 800, BALS: 1000, NALS: 1200},
    {low: 241, high: 250, FALS: 550, IALS: 800, BALS: 1000, NALS: 1300},
    {low: 251, high: 260, FALS: 600, IALS: 800, BALS: 1100, NALS: 1300},
    {low: 261, high: 280, FALS: 600, IALS: 900, BALS: 1100, NALS: 1300},
    {low: 281, high: 300, FALS: 650, IALS: 900, BALS: 1200, NALS: 1400},
    {low: 301, high: 320, FALS: 700, IALS: 1000, BALS: 1200, NALS: 1400},
    {low: 321, high: 340, FALS: 800, IALS: 1100, BALS: 1300, NALS: 1500},
    {low: 341, high: 360, FALS: 900, IALS: 1200, BALS: 1400, NALS: 1600},
    {low: 361, high: 380, FALS: 1000, IALS: 1300, BALS: 1500, NALS: 1700},
    {low: 381, high: 400, FALS: 1100, IALS: 1400, BALS: 1600, NALS: 1800},
    {low: 401, high: 420, FALS: 1200, IALS: 1500, BALS: 1700, NALS: 1900},
    {low: 421, high: 440, FALS: 1300, IALS: 1600, BALS: 1800, NALS: 2000},
    {low: 441, high: 460, FALS: 1400, IALS: 1700, BALS: 1900, NALS: 2100},
    {low: 461, high: 480, FALS: 1500, IALS: 1800, BALS: 2000, NALS: 2200},
    {low: 481, high: 500, FALS: 1500, IALS: 1800, BALS: 2100, NALS: 2300},
    {low: 501, high: 520, FALS: 1600, IALS: 1900, BALS: 2100, NALS: 2400},
    {low: 521, high: 540, FALS: 1700, IALS: 2000, BALS: 2200, NALS: 2400},
    {low: 541, high: 560, FALS: 1800, IALS: 2100, BALS: 2300, NALS: 2500},
    {low: 561, high: 580, FALS: 1900, IALS: 2200, BALS: 2400, NALS: 2600},
    {low: 581, high: 600, FALS: 2000, IALS: 2300, BALS: 2500, NALS: 2700},
    {low: 601, high: 620, FALS: 2100, IALS: 2400, BALS: 2600, NALS: 2800},
    {low: 621, high: 640, FALS: 2200, IALS: 2500, BALS: 2700, NALS: 2900},
    {low: 641, high: 660, FALS: 2300, IALS: 2600, BALS: 2800, NALS: 3000},
    {low: 661, high: 680, FALS: 2400, IALS: 2700, BALS: 2900, NALS: 3100},
    {low: 681, high: 700, FALS: 2500, IALS: 2800, BALS: 3000, NALS: 3200},
    {low: 701, high: 720, FALS: 2600, IALS: 2900, BALS: 3100, NALS: 3300},
    {low: 721, high: 740, FALS: 2700, IALS: 3000, BALS: 3200, NALS: 3400},
    {low: 741, high: 760, FALS: 2700, IALS: 3000, BALS: 3300, NALS: 3500},
    {low: 761, high: 800, FALS: 2900, IALS: 3200, BALS: 3400, NALS: 3600},
    {low: 801, high: 850, FALS: 3100, IALS: 3400, BALS: 3600, NALS: 3800},
    {low: 851, high: 900, FALS: 3300, IALS: 3600, BALS: 3800, NALS: 4000},
    {low: 901, high: 950, FALS: 3600, IALS: 3900, BALS: 4100, NALS: 4300},
    {low: 951, high: 1000, FALS: 3800, IALS: 4100, BALS: 4300, NALS: 4500},
    {low: 1001, high: 1100, FALS: 4100, IALS: 4400, BALS: 4600, NALS: 4900},
    {low: 1101, high: 1200, FALS: 4600, IALS: 4900, BALS: 5000, NALS: 5000},
    {low: 1201, high: 9999, FALS: 5000, IALS: 5000, BALS: 5000, NALS: 5000}
];

// ----------- Helper: RVR from Table (range lookup) -----------
function getRVRFromTable(dh, lightType) {
    for (let row of RVR_TABLE_RANGES) {
        if (dh >= row.low && dh <= row.high) return row[lightType];
    }
    return RVR_TABLE_RANGES[RVR_TABLE_RANGES.length-1][lightType];
}

function roundUpTo10(x) { return Math.ceil(x/10)*10; }

// ----------- Dynamic UI Rendering -----------
const CATS = ['A','B','C','D'];

function renderProcedureCheckboxes() {
    let html = "";
    PRECISION_PROC.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}" checked> ${p.name}</label>`; });
    NONPRECISION_PROC_250.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}"> ${p.name}</label>`; });
    NONPRECISION_PROC_300.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}"> ${p.name}</label>`; });
    NONPRECISION_PROC_350.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}"> ${p.name}</label>`; });
    html += '<label><input type="checkbox" id="show_circling" checked> Circling</label>';
    // Insert now
    document.getElementById('procedureCheckboxes').innerHTML = html;
}
renderProcedureCheckboxes();

function renderCalculators() {
    let html = "";

    // Helper to render CAT rows (input order/IDs consistent)
    const catRows = (proc, inputTypes) => CATS.map(cat=>{
        let fields = '';
        if(inputTypes.includes('DA'))   fields += `<input type="number" placeholder="DA" id="${proc}_${cat}_da">`;
        if(inputTypes.includes('MDA'))  fields += `<input type="number" placeholder="MDA" id="${proc}_${cat}_mda">`;
        if(inputTypes.includes('DH'))   fields += `<input type="number" placeholder="DH" id="${proc}_${cat}_dh">`;
        if(inputTypes.includes('MDH'))  fields += `<input type="number" placeholder="MDH" id="${proc}_${cat}_mdh">`;
        if(inputTypes.includes('RVR'))  fields += `<input type="number" placeholder="RVR" id="${proc}_${cat}_rvr">`;
        if(inputTypes.includes('VIS'))  fields += `<input type="number" placeholder="VIS" id="${proc}_${cat}_vis" step="0.1">`;
        return `<div class="cat-row"><div class="cat-label">CAT ${cat}</div>${fields}<div class="result" id="${proc}_${cat}_result"></div></div>`;
    }).join('');

    // Render CAT 1 logic blocks
    PRECISION_PROC.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['DA','DH','RVR'])}
        </div>`;
    });

    // LNAV/VNAV custom input order (DA, DH, RVR)
    // html += ... same block if you want special

    // Nonprecision MDH min 250
    NONPRECISION_PROC_250.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['MDA','MDH','RVR'])}
        </div>`;
    });
    // Nonprecision MDH min 300
    NONPRECISION_PROC_300.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['MDA','MDH','RVR'])}
        </div>`;
    });
    // Nonprecision MDH min 350
    NONPRECISION_PROC_350.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['MDA','MDH','RVR'])}
        </div>`;
    });
    // Circling
    html += `<div class="calculator" id="circlingCalculator">
        <h3>Circling</h3>
        ${catRows('circling', ['MDA','MDH','VIS'])}
    </div>`;

    document.getElementById('calculatorsArea').innerHTML = html;
}
renderCalculators();

// Show/hide proc logic
function updateCalculatorVisibility() {
    [...PRECISION_PROC, ...NONPRECISION_PROC_250, ...NONPRECISION_PROC_300, ...NONPRECISION_PROC_350, ...CIRCLING_PROC].forEach(proc=>{
        const show = document.getElementById('show_'+proc.code)?.checked;
        document.getElementById(proc.code+'Calculator').style.display = show ? 'block':'none';
    });
}
document.getElementById('procedureCheckboxes').addEventListener('change', updateCalculatorVisibility);
updateCalculatorVisibility();

// --- CDFA radio/check logic as before
document.getElementById('noncdfa').addEventListener('change',function(){document.getElementById('nonCdfaOptions').style.display = this.checked ? 'block' : 'none';});
document.getElementById('cdfa').addEventListener('change',function(){document.getElementById('nonCdfaOptions').style.display = this.checked ? 'none' : 'block';});

// --- MAIN CALCULATION ENGINES ---
function calculate() {
    const adElev = parseFloat(document.getElementById('adElev').value)||0;
    const thrElev = parseFloat(document.getElementById('thrElev').value)||0;
    const lightType = document.getElementById('lightType').value;
    const isProcCDFA = document.getElementById('cdfa').checked;
    const isNonCDFAForAB = document.getElementById('catAB').checked;
    const isNonCDFAForCD = document.getElementById('catCD').checked;
    const isNonCDFAForAll = document.getElementById('allCats').checked;

    let summary = {};

    // ----- Precision Procedures -----
    PRECISION_PROC.forEach(proc=>{
        if(!document.getElementById('show_'+proc.code).checked) return;
        summary[proc.code] = {};
        CATS.forEach(cat=>{
            const da = parseFloat(document.getElementById(`${proc.code}_${cat}_da`).value)||0;
            const dh = parseFloat(document.getElementById(`${proc.code}_${cat}_dh`).value)||0;
            const rvr = parseFloat(document.getElementById(`${proc.code}_${cat}_rvr`).value)||0;

            // Logic (same for all precision procs)
            const dhRaised = Math.max(dh,200);
            const daCalc = thrElev + dhRaised;
            const daFinal = Math.max(da, daCalc);
            const rvrTable = getRVRFromTable(dhRaised,lightType);
            let rvrFinal = Math.max(rvr,rvrTable);

            // Special RVR cap logic for CDFA if proc is CAT 1/LNAVVNAV/RNP/etc (not Circling/Non-Precision)
            let isNonCDFAForCat = isNonCDFAForAll || (["A","B"].includes(cat) ? isNonCDFAForAB : isNonCDFAForCD);
            if (isProcCDFA && !isNonCDFAForCat) {
                const maxRVR = ['A','B'].includes(cat)?1500:2400;
                if(rvrFinal>maxRVR && (!rvr || rvr<=maxRVR)) rvrFinal=maxRVR;
            }

            // Show result
            const res = `DA: ${daFinal}(${dhRaised}), RVR: ${rvrFinal}m`;
            document.getElementById(`${proc.code}_${cat}_result`).innerText = da||dh||rvr ? res : '';
            summary[proc.code][cat] = da||dh||rvr ? res : '';
        });
    });

    // ----- Non-Precision Procedures: 250, 300, 350 minima -----
    [...NONPRECISION_PROC_250, ...NONPRECISION_PROC_300, ...NONPRECISION_PROC_350].forEach(proc=>{
        if(!document.getElementById('show_'+proc.code).checked) return;
        summary[proc.code] = {};
        let minMDH = 250;
        if(NONPRECISION_PROC_300.some(p=>p.code===proc.code)) minMDH=300;
        if(NONPRECISION_PROC_350.some(p=>p.code===proc.code)) minMDH=350;
        CATS.forEach(cat=>{
            const mda = parseFloat(document.getElementById(`${proc.code}_${cat}_mda`).value)||0;
            const mdh = parseFloat(document.getElementById(`${proc.code}_${cat}_mdh`).value)||0;
            const rvr = parseFloat(document.getElementById(`${proc.code}_${cat}_rvr`).value)||0;

            let mdhUsed = mdh;
            let calcMDA = mda;
            if(mdh>0 && mdh<minMDH) {
                mdhUsed = minMDH;
                calcMDA = roundUpTo10(thrElev + mdhUsed);
                if(mda>calcMDA) calcMDA = mda;
            } else if(mdh>=minMDH) {
                calcMDA = mda;
            }
            // RVR from Table always, using MDH used in result
            const rvrTable = getRVRFromTable(mdhUsed||minMDH, lightType);
            const rvrFinal = Math.max(rvr||0, rvrTable);

            const res = `MDA: ${calcMDA}(${mdhUsed}), RVR: ${rvrFinal}m`;
            document.getElementById(`${proc.code}_${cat}_result`).innerText = mda||mdh||rvr?res:"";
            summary[proc.code][cat] = mda||mdh||rvr?res:"";
        });
    });

    // ----- Circling -----
    if(document.getElementById('show_circling').checked) {
        summary.circling = {};
        const catMins = {A:400,B:500,C:600,D:700};
        const visDefaults = {A:1.5,B:1.6,C:2.4,D:3.6};
        CATS.forEach(cat=>{
            const mda = parseFloat(document.getElementById(`circling_${cat}_mda`).value)||0;
            const mdh = parseFloat(document.getElementById(`circling_${cat}_mdh`).value)||0;
            const vis = parseFloat(document.getElementById(`circling_${cat}_vis`).value)||0;
            const mdhUsed = Math.max(mdh,catMins[cat]);
            const mdaCalc = roundUpTo10(adElev+mdhUsed);
            const mdaFinal = Math.max(mda,mdaCalc);
            const visFinal = Math.max(vis||0, visDefaults[cat]);
            const res = `MDA: ${mdaFinal}(${mdhUsed}), VIS: ${visFinal}km`;
            document.getElementById(`circling_${cat}_result`).innerText = mda||mdh||vis?res:"";
            summary.circling[cat] = mda||mdh||vis?res:"";
        });
    }
    updateSummaryResults(summary);
}


function updateSummaryResults(results) {
    // Only include ticked procedures (in order)
    const blocks = [
        ...PRECISION_PROC,
        ...NONPRECISION_PROC_250,
        ...NONPRECISION_PROC_300,
        ...NONPRECISION_PROC_350,
        ...CIRCLING_PROC
    ].filter(proc =>
        document.getElementById('show_'+proc.code)?.checked
    );
    let html = `<h2>Summary of Results</h2>`;
    blocks.forEach(proc=>{
        if(!results[proc.code])return;
        html += `<div style="margin-bottom:14px;"><h3>${proc.name}</h3>`;
        CATS.forEach(cat=>{
            if(results[proc.code][cat]) html += `<div>CAT ${cat}: ${results[proc.code][cat]}</div>`;
        });
        html += `</div>`;
    });
    document.getElementById('summaryResults').innerHTML = html;
}

// Live recalc
document.addEventListener('input',function(e){ if(e.target.type==='number') calculate(); });
document.addEventListener('change',function(e){
    if(['radio','checkbox','select-one'].includes(e.target.type)) {
      updateCalculatorVisibility();
      calculate();
    }
});
