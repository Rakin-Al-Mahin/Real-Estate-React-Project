import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import AuthButtons from "./AuthButtons";

export default function Navbar() {
  return (
    <>
      {/* ====== Navbar Section Start ====== */}
      <div className="ud-header absolute left-0 top-0 z-40 flex w-full items-center bg-transparent">
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="flex w-full items-center justify-between px-4 py-3">
              <NavbarLogo />
              <NavLinks />
              <AuthButtons />
            </div>
          </div>
        </div>
      </div>
      {/* ====== Navbar Section End ====== */}
    </>
  );
}
