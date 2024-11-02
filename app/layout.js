import "./globals.css";

export const metadata = {
  title: "Akinleye Joshua",
  description:
    "The Creative Software Developer, I will help craft you a full stack web application and also build and deploy machine learning algorithms for your business. As a Lead full-stack developer and ML Engineer, I possess a diverse skill set, proficient in both front-end and back-end and data-science technologies.",
  icons: {
    icon: ["https://akinleyejoshua.vercel.app/icon.jpg"]
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
