import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="Menu">
            <Link to="/">Usuarios</Link>
            <Link to="/tasks">Tareas</Link>
        </nav>
    );
};

Menu.propTypes = {};

export default Menu;
