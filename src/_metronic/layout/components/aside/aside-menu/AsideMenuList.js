/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl, checkIsActive } from "../../../../_helpers";
import { TestLL1 } from '../../../../../app/pages/TestLL1'
import { TestLC1 } from '../../../../../app/pages/TestLC1'

export function AsideMenuList({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : "";
  };

  return (
      <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>

        {/*begin::1 Level*/}
        <li
          className={`menu-item ${getMenuItemActive("/testll1")}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/testll1">
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
            </span>
            <span className="menu-text">Test LL1</span>
          </NavLink>
        </li>
        {/*end::1 Level*/}

          {/*begin::1 Level*/}
          <li
            className={`menu-item ${getMenuItemActive("/testlc1")}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to="/testlc1">
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")} />
              </span>
              <span className="menu-text">Test LC1</span>
            </NavLink>
          </li>
          {/*end::1 Level*/}

        </ul>
      </>
  );
}
