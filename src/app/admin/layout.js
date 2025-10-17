import { Public_Sans } from "next/font/google";
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../../../public/admin/sass/helper/reset.scss';
import '../../../public/admin/sass/helper/base.scss';
import '../../../public/admin/sass/helper/helper.scss';
import "../../../public/admin/sass/globals.scss";
import { ToastContainer } from "react-toastify";


const public_sans = Public_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-public_sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Saynt AI Admin",
  description: "",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" />
      </head>
      <body id="pb_scroll" className={`${public_sans.variable}`}>
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}





