import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

interface Menu {
  id?: number;
  name: string;
  route?: string;
  items?: MenuItem[];
}

interface MenuItem {
  id?: number;
  name?: string;
  route?: string;
  empty?: boolean;
}

export default function Menu() {
  const [menus, setMenus] = useState<Menu[]>([]);

  useEffect(() => {
    var t: Menu[] = [
      { name: "Home", route: "/home" },
      { name: "About-App", route: "/about/application" },
      { name: "About-Dev", route: "/about/developer" },
      {
        name: "Examples",
        items: [
          { name: "Counter", route: "/examples/counter" },
          { empty: true },
          { name: "Heroes", route: "/examples/heroes" },
          { empty: true },
          { name: "Gifs", route: "/examples/gifs" },
        ],
      },
      {
        name: "Basic",
        items: [
          { name: "Binding", route: "/components/binding" },
          { name: "Render", route: "/components/render" },
          { name: "Components", route: "/components/components" },
          { name: "Events", route: "/components/events" },
          { name: "Composition", route: "/components/composition" },
        ],
      },
      {
        name: "Hooks",
        items: [
          { name: "useState", route: "/hooks/useState" },
          { name: "useEffect", route: "/hooks/useEffect" },
          { name: "useRef", route: "/hooks/useRef" },
          { name: "useMemo", route: "/hooks/useMemo" },
          { name: "useCallback", route: "/hooks/useCallback" },
          { name: "useReducer", route: "/hooks/useReducer" },
          { name: "useContext", route: "/hooks/useContext" },
        ],
      },
      {
        name: "Http",
        items: [{ name: "basic", route: "/http/basic" }],
      },
    ];

    let id = 0;
    for (const menu of t) {
      menu.id = id++;
      if (menu.items) {
        for (const menuItem of menu.items) {
          menuItem.id = id++;
        }
      }
    }

    setMenus(t);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Example React
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menus.map((menu: Menu) =>
              !!!menu.items ? (
                <li key={menu.id!} className="nav-item">
                  <Link to={menu.route!} className="nav-link">
                    {menu.name}
                  </Link>
                </li>
              ) : (
                <li key={menu.id!} className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {menu.name}
                  </a>
                  <ul className="dropdown-menu">
                    {menu.items.map((item: MenuItem) =>
                      !item.empty ? (
                        <li key={item.id!}>
                          <Link to={item.route!} className="dropdown-item">
                            {item.name}
                          </Link>
                        </li>
                      ) : (
                        <li key={item.id!}>
                          <hr className="dropdown-divider" />
                        </li>
                      )
                    )}
                  </ul>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
