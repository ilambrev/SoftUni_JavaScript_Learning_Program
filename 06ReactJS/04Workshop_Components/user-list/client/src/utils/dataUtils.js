export const formatDate = (isoDate) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(isoDate).toLocaleDateString('en-US', options);
};

export const formatDateWithDayName = (isoDate) => {
    const options = { weekday: "long", year: 'numeric', month: 'long', day: 'numeric' };

    return new Date(isoDate).toLocaleDateString('en-US', options);
};