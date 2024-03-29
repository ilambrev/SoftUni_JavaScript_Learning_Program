function matchDates(input) {

    let regexp = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/gm;

    let match = regexp.exec(input);

    while (match !== null) {

        console.log(`Day: ${match.groups.day}, Month: ${match.groups.month}, Year: ${match.groups.year}`);

        match = regexp.exec(input);
    }

}

// matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016']);
// matchDates(['1/Jan-1951 23/october/197 11-Dec-2010 18.Jan.2014']);