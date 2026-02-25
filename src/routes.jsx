// Import necessary components and functions from react-router-dom.

import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import { AddContact } from "./pages/AddContact";
import { EditContact } from "./pages/EditContact";

export const router = createBrowserRouter(
    createRoutesFromElements(

      <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>} >

        <Route path="/" element={<Home />} />
        <Route path="/single/:theId" element={<Single />} />
        <Route path="/demo" element={<Demo />} />

        {/* NUEVAS RUTAS PARA LA AGENDA */}
        <Route path="/add" element={<AddContact />} />
        <Route path="/edit/:id" element={<EditContact />} />

      </Route>
    )
);