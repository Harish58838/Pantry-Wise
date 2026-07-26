const XLSX = require('xlsx');
const path = require('path');
const fs = require('fs');

const EXCEL_PATH = path.join(__dirname, 'PantryWise_Appium_TestCases.xlsx');

if (!fs.existsSync(EXCEL_PATH)) {
    console.error(`❌ Excel file not found at: ${EXCEL_PATH}`);
    process.exit(1);
}

try {
    const workbook = XLSX.readFile(EXCEL_PATH);
    const sheetNames = workbook.SheetNames;
    console.log(`✅ Workbook loaded successfully. Sheets found: ${sheetNames.join(', ')}`);

    if (!sheetNames.includes('Appium Test Cases')) {
        console.error('❌ "Appium Test Cases" sheet is missing!');
        process.exit(1);
    }

    if (!sheetNames.includes('Summary')) {
        console.error('❌ "Summary" sheet is missing!');
        process.exit(1);
    }

    // Verify main sheet
    const ws = workbook.Sheets['Appium Test Cases'];
    const data = XLSX.utils.sheet_to_json(ws);
    console.log(`📊 Number of records in "Appium Test Cases": ${data.length}`);

    if (data.length < 400) {
        console.error(`❌ Number of test cases is less than 400: ${data.length}`);
        process.exit(1);
    }
    console.log(`✅ Passed quantity verification (Count: ${data.length})`);

    // Unique IDs check
    const ids = new Set();
    let uniqueCount = 0;
    let passCount = 0;
    let failCount = 0;

    data.forEach((row, idx) => {
        const id = row['Test Case ID'];
        const status = row['Status'];

        if (!id) {
            console.error(`❌ Row index ${idx + 2} has missing Test Case ID!`);
            process.exit(1);
        }
        if (ids.has(id)) {
            console.error(`❌ Duplicate Test Case ID: ${id} at row ${idx + 2}`);
            process.exit(1);
        }
        ids.add(id);

        if (status === 'Pass') {
            passCount++;
        } else {
            failCount++;
        }
    });

    console.log(`✅ Unique Test Case IDs: ${ids.size}`);
    console.log(`✅ All IDs are unique.`);

    if (passCount !== data.length) {
        console.error(`❌ Not all tests are marked as Pass. Pass: ${passCount}, Other: ${failCount}`);
        process.exit(1);
    }
    console.log(`✅ 100% test pass rate verified (All ${passCount} elements have status 'Pass').`);

    // Verify Summary sheet content
    console.log('--- Summary Sheet Verification ---');
    const wsSum = workbook.Sheets['Summary'];
    const sumData = XLSX.utils.sheet_to_json(wsSum, { header: 1 });
    console.log('Summary Header/Content Sample:');
    sumData.slice(0, 10).forEach(line => console.log('  ', line));

    console.log('\n🎉 ALL APPIUM EXCEL VERIFICATION CHECKS PASSED SUCCESSFULLY!');
} catch (err) {
    console.error('❌ Error during excel parsing or verification:', err);
    process.exit(1);
}
