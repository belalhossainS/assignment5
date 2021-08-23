function handleRam(size) {
    if (size == 8) {
        document.getElementById('memory-cost').innerText = '0';
        calculateSubTotal();
    }
    else {
        document.getElementById('memory-cost').innerText = '180';
        calculateSubTotal();
    }
}

function handleMemory(size) {
    if (size == 256) {
        document.getElementById('storage-cost').innerText = '0';
        calculateSubTotal();
    }
    else if (size == 512) {
        document.getElementById('storage-cost').innerText = '100';
        calculateSubTotal();
    }
    else {
        document.getElementById('storage-cost').innerText = '180';
        calculateSubTotal();
    }
}

function handleDelivery(type) {
    if (type == 'free') {
        document.getElementById('delivery-cost').innerText = '0';
        calculateSubTotal();
    }
    else {
        document.getElementById('delivery-cost').innerText = '20';
        calculateSubTotal();
    }
}

function getInnerText(idText) {
    return parseFloat(document.getElementById(idText).innerText);
}

function calculateSubTotal() {
    let bestPrice = getInnerText('best-price');
    let ramPrice = getInnerText('memory-cost');
    let memoryPrice = getInnerText('storage-cost');
    let deliveryPrice = getInnerText('delivery-cost');

    let subTotal = bestPrice + ramPrice + memoryPrice + deliveryPrice;

    document.getElementById('total-price').innerText = subTotal;
    document.getElementById('final-total-price').innerText = subTotal;
}


document.getElementById('coupon-button').addEventListener('click', function () {
    let couponInput = document.getElementById('coupon-text');
    let couponText = couponInput.value;

    if (couponText == 'stevekaku') {
        let subtotal = parseFloat(document.getElementById('total-price').innerText);
        let finaltotal = subtotal - (subtotal * 0.2);
        document.getElementById('final-total-price').innerText = finaltotal;
    }
    couponInput.value = '';
})