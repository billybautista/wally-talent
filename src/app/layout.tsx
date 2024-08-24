import RootContainer from "./components/RootLayout/RootContainer";
import { fonts } from "./fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts.raleway.className}>
        <RootContainer>{children}</RootContainer>
      </body>
    </html>
  );
}
