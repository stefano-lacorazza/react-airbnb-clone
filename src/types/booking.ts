

export class Booking {
    id: string;
    userId: string;
    tripId: string;
    guests: number;
    date: string;

  
    constructor(id: string, userId: string, guests: number, date: string, tripid: string) {
      this.id = id;
      this.userId = userId;
      this.tripId = tripid;
      this.guests = guests;
      this.date = date;

    }
  }