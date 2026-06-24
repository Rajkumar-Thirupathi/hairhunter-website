// HairHunter Booking Logic

const barbers = [
  {
    id: 1,
    name: "Ravi Kumar",
    role: "Senior Barber",
    phone: "+919840011111",
    status: "free",
  },
  {
    id: 2,
    name: "Arjun James",
    role: "Fade Specialist",
    phone: "+919840022222",
    status: "free",
  },
  {
    id: 3,
    name: "Manoj S",
    role: "Kids Stylist",
    phone: "+919840033333",
    status: "free",
  },
  {
    id: 4,
    name: "Vikram R",
    role: "Beard Expert",
    phone: "+919840044444",
    status: "free",
  },
  {
    id: 5,
    name: "Karthik P",
    role: "Junior Barber",
    phone: "+919840055555",
    status: "free",
  },
];

const services = [
  { id: 1, name: "Haircut (Men)", duration: 30, price: 100 },
  { id: 2, name: "Haircut (Kids)", duration: 20, price: 80 },
  { id: 3, name: "Facial - Basic", duration: 45, price: 299 },
  { id: 4, name: "Facial - Gold", duration: 60, price: 499 },
  { id: 5, name: "Facial - Charcoal", duration: 60, price: 449 },
  { id: 6, name: "Facial - D-Tan", duration: 60, price: 399 },
  { id: 7, name: "Shaving", duration: 20, price: 80 },
  { id: 8, name: "Beard Trim", duration: 15, price: 60 },
  { id: 9, name: "Groom Package", duration: 90, price: 499 },
];

module.exports = { barbers, services };
