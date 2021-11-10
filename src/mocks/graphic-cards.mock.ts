import { GraphicCardsI } from "../models/graphicsCards.model";

let index=5;

const baseCards:GraphicCardsI[] =[
  {
    id:1,
    name: "Asus ROG Strix GeForce RTX 3090",
    model: "Asus ROG Strix",
    manufacturer: "Asus",
    assembler: "Asus",
    price: "300,55",
    img: "https://med.greatecno.com/185302-large_default/asus-rog-strix-geforce-rtx-3090-oc-gaming-24gb-gddr6x-tarjeta-grafica.jpg",
  },
  {
    id:2,
    name: "MSI AMD Radeon RX 6900 XT",
    model: "MSI AMD Radeon",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "856,58",
    img: "https://media.stockinthechannel.com/pic/YLVCpNatUEC-ci01QlF_4A.c-r.jpg",
  },
  {
    id:3,
    name: "MSI AMD Radeon RX 8200 XT",
    model: "MSI AMD Radeon",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "300,58",
    img: "https://media.stockinthechannel.com/pic/YLVCpNatUEC-ci01QlF_4A.c-r.jpg",
  },
  {
    id:4,
    name: "PNY TCSM60M-R2L-PB graphics card NVIDIA 16 GB GDDR5",
    model: "PNY TCSM60M-R2L",
    manufacturer: "PNY",
    assembler: "PNY",
    price: "256,58",
    img: "https://media.stockinthechannel.com/pic/hN2X8KHtvk-c0hAz7iCx4A.c-r.jpg",
  },
  {
    id:5,
    name: "MSI N730K-2GD3H/LP Graphics Card NVIDIA GeForce GT 730 2 GB GDDR3",
    model: "PNY TCSM60M-R2L",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "589,33",
    img: "https://media.stockinthechannel.com/pic/sGA8w_JC1k2HvzUEMkErJw.c-r.jpg",
  },
  {
    id:6,
    name: "PowerColor Red Dragon AXRX 580 8GBD5-3DHDV2/OC",
    model: "Red Dragon AXRX",
    manufacturer: "PowerColor",
    assembler: "PowerColor",
    price: "885,78",
    img: "https://media.stockinthechannel.com/pic/cUByZhAxp0qeeryLJLGR5g.c-r.jpg",
  },
  {
    id:7,
    name: "PNY SUPER NVIDIA 16 GB GDDR4",
    model: "PNY SUPER",
    manufacturer: "PNY",
    assembler: "PNY",
    price: "600,24",
    img: "https://media.stockinthechannel.com/pic/hN2X8KHtvk-c0hAz7iCx4A.c-r.jpg",
  },
  {
    id:8,
    name: "Asus ROG Strix GeForce RTX 3090",
    model: "Asus ROG Strix",
    manufacturer: "Asus",
    assembler: "Asus",
    price: "300,55",
    img: "https://med.greatecno.com/185302-large_default/asus-rog-strix-geforce-rtx-3090-oc-gaming-24gb-gddr6x-tarjeta-grafica.jpg",
  },
  {
    id:9,
    name: "MSI AMD Radeon RX 6900 XT",
    model: "MSI AMD Radeon",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "856,58",
    img: "https://media.stockinthechannel.com/pic/YLVCpNatUEC-ci01QlF_4A.c-r.jpg",
  },
  {
    id:10,
    name: "MSI AMD Radeon RX 8200 XT",
    model: "MSI AMD Radeon",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "300,58",
    img: "https://media.stockinthechannel.com/pic/YLVCpNatUEC-ci01QlF_4A.c-r.jpg",
  },
  {
    id:11,
    name: "PNY TCSM60M-R2L-PB graphics card NVIDIA 16 GB GDDR5",
    model: "PNY TCSM60M-R2L",
    manufacturer: "PNY",
    assembler: "PNY",
    price: "256,58",
    img: "https://media.stockinthechannel.com/pic/hN2X8KHtvk-c0hAz7iCx4A.c-r.jpg",
  },
  {
    id:12,
    name: "MSI N730K-2GD3H/LP Graphics Card NVIDIA GeForce GT 730 2 GB GDDR3",
    model: "PNY TCSM60M-R2L",
    manufacturer: "MSI",
    assembler: "MSI",
    price: "589,33",
    img: "https://media.stockinthechannel.com/pic/sGA8w_JC1k2HvzUEMkErJw.c-r.jpg",
  },
  {
    id:13,
    name: "PowerColor Red Dragon AXRX 580 8GBD5-3DHDV2/OC",
    model: "Red Dragon AXRX",
    manufacturer: "PowerColor",
    assembler: "PowerColor",
    price: "885,78",
    img: "https://media.stockinthechannel.com/pic/cUByZhAxp0qeeryLJLGR5g.c-r.jpg",
  },
  {
    id:14,
    name: "PNY SUPER NVIDIA 16 GB GDDR4",
    model: "PNY SUPER",
    manufacturer: "PNY",
    assembler: "PNY",
    price: "600,24",
    img: "https://media.stockinthechannel.com/pic/hN2X8KHtvk-c0hAz7iCx4A.c-r.jpg",
  },
];

export const graphicCards = (): GraphicCardsI[] => {
  baseCards.map((card:GraphicCardsI)=>{
    card.id=index;
    index++;
  })
  return baseCards;
};


