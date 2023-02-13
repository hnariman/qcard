import { Form, Card, Navbar, Main, Footer } from "../../components";
import { Route, Routes, HashRouter } from "react-router-dom";

export const App = () => {

    // TODO: implement adding custom fields
    // TODO: add tailwind for better looks (no time for UI styling)
    // TODO: test if can use tailwind with styled components
    // https://www.npmjs.com/package/tailwind-styled-components

    // TODO: POST/PUT/PATCH to json-server


    return (
        <section className="app">
            <HashRouter>
                <Navbar />
                <section className="container">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/qcard/form" element={<Form />} />
                        <Route path="/qcard/:id" element={<Card />} />
                    </Routes>
                </section>
                <Footer />
            </HashRouter>

        </section>
    )
}