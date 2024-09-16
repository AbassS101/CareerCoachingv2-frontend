// components/Layout.js
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main>{children}</main>
      {/* You can add a Footer component here if you have one */}
    </div>
  );
}