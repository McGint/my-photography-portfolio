export interface Photograph {
    id: number;
    name: string;
    url: string;
    price: number;
    country: string;
    county: string;
    location: string;
    description: string;
  }
  
  export const photographs = [
    {
      id: 1,
      name: 'Herd',
      url: 'https://live.staticflickr.com/65535/52826103027_5d6b9ea293_b.png',
      price: 12.99,
      country: 'Ireland',
      county: 'Dublin',
      location: 'Phoenix Park',
      description: 'A herd of deer at Phoenix Park',
      cols: 2,
      rows: 1 ,
      border: '3px double white'
    },
    {
      id: 2,
      name: 'White Mane',
      url: 'https://live.staticflickr.com/65535/52826101532_cc2b38b022_b.png',
      price: 12.99,
      country: 'Ireland',
      county: 'Dublin',
      location: 'Smithfield Square',
      description: 'A horse at the Smitfield Horse Market',
      cols: 2,
      rows: 1 ,
      border: '3px double white'
    },
    {
      id: 3,
      name: 'Pairing',
      url: 'https://live.staticflickr.com/65535/52826861174_680d23dfc9_b.png',
      price: 12.99,
      country: 'Ireland',
      county: 'Dublin',
      location: 'Smithfield Square',
      description: 'Horses at the Smithfield Horse Market',
      cols: 2,
      rows: 1,
      border: '3px double white'
    },
    {
      id: 4,
      name: 'Deer 1',
      url: 'https://live.staticflickr.com/65535/52827117978_ff24c66777_b.png',
      price: 12.99,
      country: 'Ireland',
      county: 'Dublin',
      location: 'Phoenix Park',
      description: 'Deer and Horses at Phoenix Park',
      cols:2,
      rows: 1,
      border: '3px double white'
    },
    {
      id: 5,
      name: 'Closer Inspection',
      url: 'https://live.staticflickr.com/65535/52826678051_f4ab72dc95_b.png',
      price: 12.99,
      country: 'Ireland',
      county: 'Dublin',
      location: 'Phoenix Park',
      description: 'Deer at Pheonix Park',
      cols:2,
      rows: 1,
      border: '3px double white'
    },
    {
      id: 6,
      name: 'Closer Inspection',
      url: 'https://live.staticflickr.com/65535/52826678051_7bb9040c47_b.png',
      price: 12.99,
      country: 'Ireland',
      county: 'Dublin',
      location: 'Phoenix Park',
      description: 'Deer at Pheonix Park',
      cols:2,
      rows: 1,
      border: '3px double white'
    }
  ];