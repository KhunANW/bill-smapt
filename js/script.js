function calculate() {
    const rentVal  = +rent.value || 0;
    const waterVal = +water.value || 0;
    const otherVal = +other.value || 0;

    const beforeVal = +eBefore.value || 0;
    const afterVal  = +eAfter.value || 0;
    const rateVal   = +eRate.value || 0;

    const unitUsed = Math.max(afterVal - beforeVal, 0);
    const electricVal = unitUsed * rateVal;

    const total = rentVal + waterVal + electricVal + otherVal;

    iRoom.innerText = room.value || "-";
    iDate.innerText = month.value || "-";

    iRent.innerText  = rentVal.toLocaleString();
    iWater.innerText = waterVal.toLocaleString();
    iOther.innerText = otherVal.toLocaleString();

    /* รายละเอียดค่าไฟ */
    iElectricDetail.innerHTML =
        `จดมิเดอร์ครั้งก่อน ${dateBefore.value || "-"}<br>` +
        `จดมิเดอร์ครั้งล่าสุด ${dateAfter.value || "-"}<br>` +
        `หน่วยที่ใช้`;

    /* ช่องหน่วย (ตรงบรรทัดของมัน) */
    iUnit.innerHTML =
        ` ${beforeVal}<br>` +
        ` ${afterVal}<br>` +
        `${unitUsed}`;

    /* ช่องเงิน: เว้น 2 บรรทัด */
    iElectric.innerHTML = `<br><br>${electricVal.toLocaleString()}`;

    iTotal.innerText = total.toLocaleString();
}



function downloadImage() {
    const element = document.getElementById('invoice');
    
    // ใช้ html2canvas โดยตั้งค่า scale เพื่อให้รูปชัดเจน
    html2canvas(element, {
        scale: 2, // เพิ่มความชัดของรูป
        useCORS: true, // อนุญาตให้โหลดรูปภาพข้ามโดเมน (ถ้ามี)
        logging: true
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'bill-' + (room.value || 'no-room') + '.png';
        link.href = canvas.toDataURL('image/png');
        link.click();
    });
}
