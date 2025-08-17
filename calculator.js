// === Define Procedures ===
const PRECISION_PROC = [
    { code: 'cat1', name: 'CAT 1' }, { code: 'rnp', name: 'RNP' }, { code: 'gls', name: 'GLS' },
    { code: 'par', name: 'PAR' }, { code: 'lpv', name: 'LPV' }, { code: 'lnavvnav', name: 'LNAV/VNAV' }
];
const NONPRECISION_PROC_250 = [
    { code: 'loc', name: 'LOC' }, { code: 'locdme', name: 'LOC+DME' }, { code: 'vordme', name: 'VOR+DME' },
    { code: 'lnav', name: 'LNAV' }, { code: 'sra', name: 'SRA' }, { code: 'lda', name: 'LDA' }
];
const NONPRECISION_PROC_300 = [
    { code: 'vor', name: 'VOR' }, { code: 'ndbdme', name: 'NDB+DME' }
];
const NONPRECISION_PROC_350 = [{ code: 'ndb', name: 'NDB' }];
const CIRCLING_PROC = [{ code: 'circling', name: 'Circling' }];
const CATS = ['A','B','C','D'];

// Fill in all RVR ranges from your full table here!
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
function getRVRFromTable(dh, lightType) {
    for (let row of RVR_TABLE_RANGES) {
        if (dh >= row.low && dh <= row.high) return row[lightType];
    }
    return RVR_TABLE_RANGES[RVR_TABLE_RANGES.length-1][lightType];
}
function roundUpTo10(x) { return Math.ceil(x/10)*10; }

// --- UI Generation
function renderProcedureCheckboxes() {
    let html = "";
    PRECISION_PROC.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}" checked> ${p.name}</label>`; });
    NONPRECISION_PROC_250.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}"> ${p.name}</label>`; });
    NONPRECISION_PROC_300.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}"> ${p.name}</label>`; });
    NONPRECISION_PROC_350.forEach(p=>{ html += `<label><input type="checkbox" id="show_${p.code}"> ${p.name}</label>`; });
    html += '<label><input type="checkbox" id="show_circling" checked> Circling</label>';
    document.getElementById('procedureCheckboxes').innerHTML = html;
}
renderProcedureCheckboxes();
function renderCalculators() {
    let html = "";
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
    PRECISION_PROC.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['DA','DH','RVR'])}
        </div>`;
    });
    NONPRECISION_PROC_250.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['MDA','MDH','RVR'])}
        </div>`;
    });
    NONPRECISION_PROC_300.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['MDA','MDH','RVR'])}
        </div>`;
    });
    NONPRECISION_PROC_350.forEach(proc=>{
        html += `<div class="calculator" id="${proc.code}Calculator">
            <h3>${proc.name}</h3>
            ${catRows(proc.code, ['MDA','MDH','RVR'])}
        </div>`;
    });
    html += `<div class="calculator" id="circlingCalculator">
        <h3>Circling</h3>
        ${catRows('circling', ['MDA','MDH','VIS'])}
    </div>`;
    document.getElementById('calculatorsArea').innerHTML = html;
}
renderCalculators();
function updateCalculatorVisibility() {
    [...PRECISION_PROC, ...NONPRECISION_PROC_250, ...NONPRECISION_PROC_300, ...NONPRECISION_PROC_350, ...CIRCLING_PROC].forEach(proc=>{
        const show = document.getElementById('show_'+proc.code)?.checked;
        document.getElementById(proc.code+'Calculator').style.display = show ? 'block':'none';
    });
}
document.getElementById('procedureCheckboxes').addEventListener('change', updateCalculatorVisibility);
updateCalculatorVisibility();

document.getElementById('noncdfa').addEventListener('change',function(){
    const s = document.getElementById('noncdfa').checked;
    document.getElementById('noncdfaSubGroup').style.display = s ? 'flex':'none';
});
document.getElementById('cdfa').addEventListener('change',function(){
    document.getElementById('noncdfaSubGroup').style.display = 'none';
    document.getElementById('noncdfa_ab').checked = false;
    document.getElementById('noncdfa_cd').checked = false;
});

// --- MAIN LOGIC incl. ALL FEATURE/EXCEPTION RULES ---
function calculate() {
    const adElev = parseFloat(document.getElementById('adElev').value)||0;
    const thrElev = parseFloat(document.getElementById('thrElev').value)||0;
    const lightType = document.getElementById('lightType').value;

    // --- CDFA/Non-CDFA conditions ---
    const isProcCDFA = document.getElementById('cdfa').checked;
    const isNonCDFA = document.getElementById('noncdfa').checked;
    const isNonCDFA_AB = document.getElementById('noncdfa_ab').checked;
    const isNonCDFA_CD = document.getElementById('noncdfa_cd').checked;

    function isNonCDFAForCat(cat){
        if(!isNonCDFA) return false;
        if(!isNonCDFA_AB && !isNonCDFA_CD) return true;
        if(isNonCDFA_AB && isNonCDFA_CD) return true;
        if(isNonCDFA_AB && ['A','B'].includes(cat)) return true;
        if(isNonCDFA_CD && ['C','D'].includes(cat)) return true;
        return false;
    }

    let summary = {};
    // --- PRECISION Approaches (incl. special LNAV/VNAV logic) ---
    PRECISION_PROC.forEach(proc=>{
        if(!document.getElementById('show_'+proc.code).checked) return;
        summary[proc.code] = {};
        CATS.forEach(cat=>{
            const da = parseFloat(document.getElementById(`${proc.code}_${cat}_da`).value)||0;
            const dh = parseFloat(document.getElementById(`${proc.code}_${cat}_dh`).value)||0;
            const rvr = parseFloat(document.getElementById(`${proc.code}_${cat}_rvr`).value)||0;
            // --- For LNAV/VNAV, min DH is 250, else 200
            const dhRaised = (proc.code === "lnavvnav") ? Math.max(dh, 250) : Math.max(dh, 200);
            const daCalc = thrElev + dhRaised;
            const daFinal = Math.max(da, daCalc);
            const rvrTable = getRVRFromTable(dhRaised,lightType);
            let rvrFinal = Math.max(rvrTable, rvr); // Table is real minimum for precision
            if(!isNonCDFAForCat(cat)) {
                const maxRVR = ['A','B'].includes(cat)?1500:2400;
                if(rvrFinal>maxRVR && (!rvr || rvr<=maxRVR)) rvrFinal=maxRVR;
            }
            const res = `DA: ${daFinal}(${dhRaised}), RVR: ${rvrFinal}m`;
            document.getElementById(`${proc.code}_${cat}_result`).innerText = da||dh||rvr ? res : '';
            summary[proc.code][cat] = da||dh||rvr ? res : '';
        });
    });
    // --- NONPRECISION Approaches (incl. >1200 MDH rule) ---
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
            // --- New rule: If MDH > 1200 => always Non-CDFA, RVR = 5000m
            if(mdhUsed > 1200) {
                document.getElementById(`${proc.code}_${cat}_result`).innerText = 
                  `MDA: ${calcMDA}(${mdhUsed}), RVR: 5000m (forced Non-CDFA: MDH > 1200)`;
                summary[proc.code][cat] = `MDA: ${calcMDA}(${mdhUsed}), RVR: 5000m (forced Non-CDFA: MDH > 1200)`;
                return; // skip further RVR processing for this row
            }

            const rvrTable = getRVRFromTable(mdhUsed||minMDH, lightType);
            let rvrFinal;
            if(!isNonCDFAForCat(cat)) { // CDFA min 750, regular cap
                rvrFinal = Math.max(750, rvrTable, rvr);
                const maxRVR = ['A','B'].includes(cat)?1500:2400;
                if(rvrFinal>maxRVR && (!rvr || rvr<=maxRVR)) rvrFinal=maxRVR;
            } else { // Non-CDFA min 1000/1200
                let minRVR = ['A','B'].includes(cat)?1000:1200;
                rvrFinal = Math.max(minRVR, rvrTable, rvr);
            }
            const res = `MDA: ${calcMDA}(${mdhUsed}), RVR: ${rvrFinal}m`;
            document.getElementById(`${proc.code}_${cat}_result`).innerText = mda||mdh||rvr?res:"";
            summary[proc.code][cat] = mda||mdh||rvr?res:"";
        });
    });
    // --- CIRCLING (unchanged, no RVR logic)
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
document.addEventListener('input',function(e){ if(e.target.type==='number') calculate(); });
document.addEventListener('change',function(e){
    if(['radio','checkbox','select-one'].includes(e.target.type)) {
        updateCalculatorVisibility();
        calculate();
    }
});
function clearAllInputs() {
    // Clear all numbers and text
    document.querySelectorAll('input[type="number"], input[type="text"]').forEach(el => el.value = '');

    // Reset all result blocks
    document.querySelectorAll('.result').forEach(el => el.innerText = '');
    document.getElementById('summaryResults').innerHTML = '';

    // Reset radio buttons: Default to CDFA
    document.getElementById('cdfa').checked = true;
    document.getElementById('noncdfa').checked = false;
    // Hide Non CDFA subgroup, uncheck suboptions
    document.getElementById('noncdfaSubGroup').style.display = 'none';
    document.getElementById('noncdfa_ab').checked = false;
    document.getElementById('noncdfa_cd').checked = false;

    // Set calculator checkboxes: default is all precision checked, circling checked, others unchecked
    [...PRECISION_PROC, ...CIRCLING_PROC].forEach(proc => {
        let el = document.getElementById('show_'+proc.code);
        if(el) el.checked = true;
    });
    [...NONPRECISION_PROC_250, ...NONPRECISION_PROC_300, ...NONPRECISION_PROC_350].forEach(proc => {
        let el = document.getElementById('show_'+proc.code);
        if(el) el.checked = false;
    });
    updateCalculatorVisibility();

    // Optional: scroll to top, focus the first input, or reset selects if you want
    window.scrollTo(0,0);
}
// ---- Top-right Page Zoom Controls ----
let zoomLevel = 1;
const minZoom = 0.7;
const maxZoom = 2;

function zoomPage(direction) {
    if(direction === '+') {
        zoomLevel = Math.min(maxZoom, zoomLevel + 0.1);
    } else if(direction === '-') {
        zoomLevel = Math.max(minZoom, zoomLevel - 0.1);
    }
    document.body.style.zoom = zoomLevel;
    document.getElementById('zoom-indicator').innerText = `Zoom: ${(zoomLevel*100).toFixed(0)}%`;
}

window.addEventListener('DOMContentLoaded',()=>{
    document.body.style.zoom = zoomLevel;
    document.getElementById('zoom-indicator').innerText = `Zoom: ${(zoomLevel*100).toFixed(0)}%`;
});
function updateSummaryResults(results) {
    let anyState = false;
    const blocks = [
        ...PRECISION_PROC,
        ...NONPRECISION_PROC_250,
        ...NONPRECISION_PROC_300,
        ...NONPRECISION_PROC_350,
        ...CIRCLING_PROC
    ].filter(proc => document.getElementById('show_'+proc.code)?.checked);
    function isStateValue(proc, cat, value) {
        let regulatoryMin = null;
        if (PRECISION_PROC.some(p=>p.code===proc)) {
            let dhRaised;
            if(proc === "lnavvnav") {
                const dh = parseFloat(document.getElementById(`${proc}_${cat}_dh`).value)||0;
                dhRaised = Math.max(dh, 250);
            } else {
                const dh = parseFloat(document.getElementById(`${proc}_${cat}_dh`).value)||0;
                dhRaised = Math.max(dh, 200);
            }
            regulatoryMin = getRVRFromTable(dhRaised, document.getElementById('lightType').value);
        } else if (CIRCLING_PROC.some(p=>p.code===proc)) {
            regulatoryMin = {A:1.5,B:1.6,C:2.4,D:3.6}[cat];
        } else {
            let mdh = parseFloat(document.getElementById(`${proc}_${cat}_mdh`).value)||0;
            let minMDH = 250;
            if(NONPRECISION_PROC_300.some(p=>p.code===proc)) minMDH=300;
            if(NONPRECISION_PROC_350.some(p=>p.code===proc)) minMDH=350;
            let mdhUsed = mdh > 0 ? Math.max(mdh, minMDH) : minMDH;
            if(mdhUsed > 1200) return value >= 5000;
            const isProcCDFA = document.getElementById('cdfa').checked;
            const isNonCDFA = document.getElementById('noncdfa').checked;
            const isNonCDFA_AB = document.getElementById('noncdfa_ab').checked;
            const isNonCDFA_CD = document.getElementById('noncdfa_cd').checked;
            function isNonCDFAForCat(cat){
                if(!isNonCDFA) return false;
                if(!isNonCDFA_AB && !isNonCDFA_CD) return true;
                if(isNonCDFA_AB && isNonCDFA_CD) return true;
                if(isNonCDFA_AB && ['A','B'].includes(cat)) return true;
                if(isNonCDFA_CD && ['C','D'].includes(cat)) return true;
                return false;
            }
            const rvrTable = getRVRFromTable(mdhUsed, document.getElementById('lightType').value);
            if(!isNonCDFAForCat(cat)) {
                regulatoryMin = Math.max(750, rvrTable);
            } else {
                regulatoryMin = Math.max(['A','B'].includes(cat)?1000:1200, rvrTable);
            }
        }
        let userVal = null;
        if (CIRCLING_PROC.some(p=>p.code===proc)) {
            userVal = parseFloat(document.getElementById(`${proc}_${cat}_vis`).value)||null;
        } else {
            userVal = parseFloat(document.getElementById(`${proc}_${cat}_rvr`).value)||null;
        }
        if(userVal == null || userVal === 0) return false;
        return userVal > regulatoryMin;
    }
    let html = `<div style="display:flex;gap:14px;align-items:center;margin-bottom:12px;">`;
    html += `<span class="state-indicator state-standard" id="summaryStandardBox">STANDARD</span>`;
    html += `<span class="state-indicator" id="summaryStateBox">STATE</span>`;
    html += `</div>`;
    html += `<h2>Summary of Results</h2>`;
    blocks.forEach(proc=>{
        if(!results[proc.code])return;
        html += `<div style="margin-bottom:14px;"><h3>${proc.name}</h3>`;
        CATS.forEach(cat=>{
            const resultText = results[proc.code][cat] || '';
            let highlight = '';
            let stateByInput = false;
            if(resultText) {
                let m = /RVR:\s*(\d+(?:\.\d+)?)m/i.exec(resultText);
                if(!m) m = /VIS:\s*(\d+(?:\.\d+)?)/i.exec(resultText);
                if(m) {
                    let num = parseFloat(m[1]);
                    if(isStateValue(proc.code,cat,num)) {
                        highlight = "color:#be2222;font-weight:bold;";
                        anyState = true;
                        stateByInput = true;
                    }
                }
            }
            html += `<div>CAT ${cat}: <span style="${highlight}">${resultText}</span></div>`;
        });
        html += `</div>`;
    });
    document.getElementById('summaryResults').innerHTML = html;
    document.getElementById('summaryStandardBox').className = 'state-indicator'+(anyState?'':' state-standard');
    document.getElementById('summaryStateBox').className = 'state-indicator'+(anyState?' state-state':'');
}
// ==== AUTOCHECK: Select Only Circling By Default ====
window.addEventListener('DOMContentLoaded', function() {
    // Uncheck all main procedure checkboxes (precision, non-precision)
    [
        ...PRECISION_PROC,
        ...NONPRECISION_PROC_250,
        ...NONPRECISION_PROC_300,
        ...NONPRECISION_PROC_350
    ].forEach(proc=>{
        var el = document.getElementById('show_'+proc.code);
        if(el) el.checked = false;
    });
    // Check only "Circling"
    var circ = document.getElementById('show_circling');
    if(circ) circ.checked = true;
    // Update the UI accordingly
    if (typeof updateCalculatorVisibility === 'function') updateCalculatorVisibility();
});
