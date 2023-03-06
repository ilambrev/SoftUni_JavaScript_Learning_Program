function gladiatorExpenses(lostFightsCount, helmetPrice, swordPrice, shieldPrice, armorPrice) {

    let helmetDamageCount = Math.floor(lostFightsCount / 2);
    let swordDamageCount = Math.floor(lostFightsCount / 3);
    let shieldDamageCount = Math.floor(lostFightsCount / 6);
    let armorDamageCount = Math.floor(shieldDamageCount / 2);


    let totalExpenses = helmetDamageCount * helmetPrice + swordDamageCount * swordPrice + shieldDamageCount * shieldPrice + armorDamageCount * armorPrice;


    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);

}

// gladiatorExpenses(7, 2, 3, 4, 5);
// gladiatorExpenses(23, 12.50, 21.50, 40, 200);