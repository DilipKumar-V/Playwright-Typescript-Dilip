function getBilling(foodBill: number, tax?: number, vat?: number): void {

    if (tax && vat) {
        console.log(foodBill + tax + vat);
    }
    else if (tax) {
        console.log(foodBill + tax);
    }
    else {
        console.log(foodBill);
    }
}

getBilling(1000);
getBilling(1000, 20);
getBilling(1000, 20, 5);
