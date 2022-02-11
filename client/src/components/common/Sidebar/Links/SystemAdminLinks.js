// import installed packages
// import styles
// import material ui items
// import shared/global items
// import components/pages
// import redux API

const SysAdminLinks = ({ Link, pathname, toggleSubmenu, openSubMenu }) => {
  return (
    <>
      <Link
        to="/system-admin/meetings/"
        className={
          `${pathname}` === "/system-admin/meetings/"
            ? "nav__link active"
            : "nav__link"
        }
      >
        <i className="bx bx-book"></i>
        <span className="nav__name">Meetings</span>
      </Link>
    </>
  );
};

export default SysAdminLinks;
