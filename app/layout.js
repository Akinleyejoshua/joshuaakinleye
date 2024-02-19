import "./globals.css";
// import "@fontsource/poppins/100.css";

export const metadata = {
  title: "Akinleye Joshua",
  description:
    "Akinleye Joshua, Software Developer, I will help craft you a full stack web application and also build and deploy machine learning algorithms for your business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
