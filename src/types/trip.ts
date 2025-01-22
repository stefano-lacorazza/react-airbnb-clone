export class Trip {
    id: string;
    title: string;
    description: string;
    level: string;
    duration: number; // Assuming duration is in hours or some unit of time
    price: number; // Assuming price is in a currency unit
    image: string; // Assuming image is a URL or path to an image file
  
    constructor(id: string, title: string, description: string, level: string, duration: number, price: number, image: string) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.level = level;
      this.duration = duration;
      this.price = price;
      this.image = image;
    }


    



  }

