function santasSecretHelper(input) {
    const key = Number(input[0]);
    const decodedMessages = [];
    let index = 1;

    while (input[index] != 'end') {
        const decodedMessage = input[index].split('').reduce((acc, curr) => {
            const newCharCode = curr.charCodeAt(0) - key;
            acc += String.fromCharCode(newCharCode);
            return acc;
        }, '');

        decodedMessages.push(decodedMessage);

        index++;
    }

    const regexp = /@(?<name>[A-Za-z]+)[^@!:>-]*!(?<behaviour>[GN])!/gm;
    const children = [];

    for (const match of decodedMessages.join('\n').matchAll(regexp)) {
        const name = match.groups.name;
        const behaviour = match.groups.behaviour;

        if (behaviour == 'G') {
            children.push(name);
        }

    }

    console.log(children.join('\n'));
}

// santasSecretHelper([
//     "3",
//     "CNdwhamigyenumje$J$",
//     "CEreelh-nmguuejnW$J$",
//     "CVwdq&gnmjkvng$Q$",
//     "end"
// ]);
// santasSecretHelper([
//     "3",
//     "N}eideidmk$'(mnyenmCNlpamnin$J$",
//     "ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge",
//     "ppqmkkkmnolmnnCEhq/vkievk$Q$",
//     "yyegiivoguCYdohqwlqh/kguimhk$J$",
//     "end"
// ]);
// santasSecretHelper([
//     "4",
//     "~lwzjkl~jenlymfDFsffmiCwozwlzjln%K%",
//     "0zfjrl}xnrlDWeqqmi/wnznlwzjnn%K%onhfhnf",
//     ";:<lyiljz{onzDPere=;=9<;8=rhknlf%K%",
//     "Wonvfkmwzkmpwvzkm'lhjnlDWeqerxle0wlnzj{nz%K%nohwn",
//     "DReh}e=<4lhzj1%K%",
//     "end"
// ]);