const squarev1 = function(x) {
    return x * x;
}

const squarev2 = (x) => {
    return x * x;
}

const squarev3 = (x) => x * x;

const eventv1 = {
    name: 'Bithday party',
    printGuestList: function() {
        console.log('Guest list for: ', this.name);
    }
};

const eventv2 = {
    name: 'Bithday party',
    //don't bind the property
    printGuestList: () => {
        console.log('Guest list for: ', this.name);
    }
};

const eventv3 = {
    name: 'Bithday party',
    //don't bind the property
    printGuestList: () => console.log('Guest list for: ', this.name)
};

const eventv4 = {
    name: 'Bithday party',
    guestList:['Werison, Ana, Bia'],
    printGuestList() {
        const _this = this;
        console.log('Guest list for: ', this.name);

        this.guestList.forEach(function(guest) {
            console.log(guest, ' is attending ' + _this.name);
        });

        this.guestList.forEach((guest) => {
            console.log(guest, ' is attending ' + this.name);
        });
    }
};

console.log(squarev1(8));
console.log(squarev2(9));
console.log(squarev3(10));
eventv1.printGuestList();
eventv2.printGuestList();
eventv3.printGuestList();
eventv4.printGuestList();