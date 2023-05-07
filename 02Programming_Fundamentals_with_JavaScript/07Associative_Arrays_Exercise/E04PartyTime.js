function partyTime(input) {

    let index = input.indexOf('PARTY');

    let invitedGuests = input.slice(0, index);

    let guestsWhoWereOnParty = input.slice(index + 1);

    let guestsThatDidntCome = invitedGuests.slice();

    for (let guest of guestsWhoWereOnParty) {

        if (guestsThatDidntCome.includes(guest)) {

            let index = guestsThatDidntCome.indexOf(guest);

            guestsThatDidntCome.splice(index, 1);

        }

    }

    console.log(guestsThatDidntCome.length);

    let vipGuests = guestsThatDidntCome.filter(guest => guest.charCodeAt(0) >= 48 && guest.charCodeAt(0) <= 57);
    let regularGuests = guestsThatDidntCome.filter(guest => guest.charCodeAt(0) < 48 || guest.charCodeAt(0) > 57);

    if (vipGuests.length > 0) {

        console.log(vipGuests.join('\n'));

    }

    if (regularGuests.length > 0) {

        console.log(regularGuests.join('\n'));

    }

}

/*
partyTime([
    '7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);
partyTime([
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'xys2FYzn',
    'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC',
    'dziNz78I',
    'mdSGyQCJ',
    'LjcVpmDL',
    'fPXNHpm1',
    'HTTbwRmM',
    'B5yTkMQi',
    '8N0FThqG',
    'm8rfQBvl',
    'fc1oZCE0',
    'UgffRkOn',
    '7ugX7bm0',
    '9CQBGUeJ'
]);
*/