function fromJSONToHTMLTable(input) {

    const rowsData = JSON.parse(input);

    let table = '<table>\n';

    const escapeHtml = (str) => {

        const entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            " ": "&nbsp;"
        };

        return str.replace(/[&<>" ]/g, (s) => entityMap[s]);
    }

    const createKeysRow = (objKeys) => {

        return '<tr>' + `${objKeys.map(k => `<th>${typeof k === 'number' ? k : escapeHtml(k)}</th>`).join('')}` + '</tr>\n';

    }

    const createValuesRow = (objValues) => {

        return '<tr>' + `${objValues.map(v => `<td>${typeof v === 'number' ? v : escapeHtml(v)}</td>`).join('')}` + '</tr>\n';

    }

    table += createKeysRow(Object.keys(rowsData[0]));

    for (let i = 0; i < rowsData.length; i++) {

        table += createValuesRow(Object.values(rowsData[i]));

    }

    table += '</table>';

    return table;

}

// console.log(fromJSONToHTMLTable(`[{"Name":"Stamat","Score":5.5},{"Name":"Rumen","Score":6}]`));
// console.log(fromJSONToHTMLTable(`[{"Name":"Pesho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]`));