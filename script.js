window.onload = function() {

    const billForm = document.getElementById('calculate-bill-form')
    billForm.addEventListener('submit', function(e) {
        e.preventDefault()
        start_loader();
        const userUnits = document.getElementById('unit-consume').value;
        const periodDays = document.getElementById('billig-period').value;

        var charges = 4;
            rate = 20;
            vat = 13.5;
            noVatTotal = 0;

        noVatTotal = ((parseFloat(userUnits) * (parseFloat(rate/ 100))) + (parseFloat(periodDays) * (parseFloat(charges/100))));
        finalBill = parseFloat(noVatTotal) + parseFloat(noVatTotal) * vat/100;

        
            document.getElementById('no-vat-total').textContent = "€ " + parseFloat(noVatTotal).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('total-pay').textContent = "€ " + parseFloat(finalBill).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('va-totalt').textContent = "€ " + parseFloat(parseFloat(noVatTotal)* vat/100).toLocaleString("en-US", { style: "decimal", maximumFractionDigits: 2 })
            document.getElementById('table-title').style.display = 'block';
            document.getElementById('result').style.display = 'table';
            document.getElementById('reset-btn').style.display = 'block';

    })
    billForm.addEventListener('reset', function(e) {
      
            document.getElementById('no-vat-total').textContent = "";
            document.getElementById('total-pay').textContent = "";
            document.getElementById('vat-total').textContent = "";
            document.getElementById('table-title').style.display = 'none';
            document.getElementById('result').style.display = 'none';
            document.getElementById('reset-btn').style.display = 'none';

        })
}
