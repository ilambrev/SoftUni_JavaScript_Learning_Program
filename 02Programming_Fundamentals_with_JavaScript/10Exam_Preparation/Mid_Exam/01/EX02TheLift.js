function theLift(input) {

    const sitsPerCabin = 4;
    let peopleInTheQueue = Number(input[0]);
    let liftCabins = input[1].split(' ').map(c => { return Number(c) });
    let maxLiftCapacity = liftCabins.length * sitsPerCabin;

    if (peopleInTheQueue > 0) {

        for (let i = 0; i < liftCabins.length; i++) {

            let cabinTakenSits = liftCabins[i];

            if (cabinTakenSits < sitsPerCabin) {

                let freeSitsInCabin = sitsPerCabin - cabinTakenSits;

                if (peopleInTheQueue > freeSitsInCabin) {

                    liftCabins[i] = sitsPerCabin;
                    peopleInTheQueue -= freeSitsInCabin;

                } else {

                    liftCabins[i] += peopleInTheQueue;
                    peopleInTheQueue = 0;

                }

            }

            if (peopleInTheQueue === 0) {

                break;

            }

        }
    }

    let freeLiftSits = ((maxLiftCapacity, liftCabins) => {

        let usedSits = 0;

        for (let cabin of liftCabins) {

            usedSits += Number(cabin);

        }

        return maxLiftCapacity - usedSits;

    })

    let freeSeats = freeLiftSits(maxLiftCapacity, liftCabins);

    if (peopleInTheQueue === 0 && freeSeats > 0) {

        console.log("The lift has empty spots!\n" + liftCabins.join(' '));

    } else if (peopleInTheQueue > 0 && freeSeats === 0) {

        console.log(`There isn't enough space! ${peopleInTheQueue} people in a queue!\n` + liftCabins.join(' '));

    } else {

        console.log(liftCabins.join(' '));

    }

}

// theLift(["15", "0 0 0 0 0"]);
// theLift(["20", "0 2 0"]);