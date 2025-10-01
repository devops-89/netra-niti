import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = localFont({
  src: "../assets/fonts/poppins.ttf",
});

export const fancake = localFont({
  src: "../assets/fonts/Fancake.ttf",
  variable: "--cake",
});

export const din = localFont({
  src: "../assets/fonts/dinpro.otf",
  variable: "--font-din",
});
