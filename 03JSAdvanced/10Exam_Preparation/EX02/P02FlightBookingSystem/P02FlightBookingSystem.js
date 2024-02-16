class FlightBookingSystem {
    bookingsCount = 0;

    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
    }

    addFlight(flightNumber, destination, departureTime, price) {
        if (this.flights.find(f => f.flightNumber === flightNumber) !== undefined) {
            return `Flight ${flightNumber} to ${destination} is already available.`;
        }

        this.flights.push({ flightNumber, destination, departureTime, price });

        return `Flight ${flightNumber} to ${destination} has been added to the system.`;
    }

    bookFlight(passengerName, flightNumber) {
        if (this.flights.find(f => f.flightNumber === flightNumber) === undefined) {
            return `Flight ${flightNumber} is not available for booking.`;
        }

        this.bookings.push({ passengerName, flightNumber });
        this.bookingsCount++;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`;
    }

    cancelBooking(passengerName, flightNumber) {
        const bookingIndex = this.bookings.findIndex(b => b.passengerName === passengerName && b.flightNumber === flightNumber);

        if (bookingIndex === -1) {
            throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
        }

        this.bookings.splice(bookingIndex, 1);
        this.bookingsCount--;

        return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
    }

    showBookings(criteria) {
        if (this.bookings.length === 0) {
            throw new Error('No bookings have been made yet.');
        }

        switch (criteria) {
            case 'all':
                return `All bookings(${this.bookingsCount}):\n${this.bookings
                    .map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`).join('\n')}`;
            case 'cheap':
                const cheapBookings = this.bookings.filter(b => this.flights.find(f => f.flightNumber === b.flightNumber).price <= 100);

                if (cheapBookings.length === 0) {
                    return 'No cheap bookings found.';
                }

                return `Cheap bookings:\n${cheapBookings
                    .map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`).join('\n')}`;
            case 'expensive':
                const expensiveBookings = this.bookings.filter(b => this.flights.find(f => f.flightNumber === b.flightNumber).price > 100);

                if (expensiveBookings.length === 0) {
                    return 'No expensive bookings found.';
                }

                return `Expensive bookings:\n${expensiveBookings
                    .map(b => `${b.passengerName} booked for flight ${b.flightNumber}.`).join('\n')}`;
        }
    }
}

// Input 1
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// Input 2
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// Input 3
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// Input 4
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

// Input 5
// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("expensive"));
// console.log(system.showBookings("cheap"));