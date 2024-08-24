import {
  Inter,
  Noto_Sans,
  Poppins,
  Raleway,
  Roboto,
  Rubik,
  Ubuntu,
} from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"], weight: "600" });

const poppins = Poppins({ subsets: ["latin"], weight: "400" });

const rubik = Rubik({
  subsets: ["latin"],
});

const ubuntu = Ubuntu({
  subsets: ["latin"],
  weight: "400",
});

const notoSans = Noto_Sans({
  subsets: ["latin"],
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: "700",
});

export const fonts = {
  rubik,
  roboto,
  inter,
  poppins,
  ubuntu,
  notoSans,
  raleway,
};
