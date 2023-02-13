import { Fragment } from "react";
import { Form, Card, Navbar, Main, Footer } from "../../components";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {

    // TODO: implement adding custom fields
    // TODO: add some free data storage(firebase / aws S3)
    // TODO: add tailwind for better looks (no time for UI styling)
    // TODO: test if can use tailwind with styled components
    // https://www.npmjs.com/package/tailwind-styled-components

    // TODO: some storage for data persistence
    // https://react-supabase.vercel.app/recipes/use-auth

    // TODO: HACK for an easy json server for github
    // https://my-json-server.typicode.com/
    // https://dev.to/nikita_guliaev/deploying-create-react-app-with-json-server-as-backend-to-github-3pp9
    return (
        <Fragment className="app">
            <BrowserRouter>
                <Navbar />
                <section className="container">
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/form" element={<Form />} />
                        <Route path="/:id" element={<Card />} />
                    </Routes>
                </section>
                <Footer />
            </BrowserRouter>

        </Fragment>
    )
}