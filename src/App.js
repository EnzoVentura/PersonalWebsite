import './App.css';
import {Suspense} from "react";
import {useTranslation} from "react-i18next";
import i18n from "i18next";

function App() {
    const {t} = useTranslation();
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    }

    return (
        <div className="w-full">
            <div className="w-full h-screen flex flex-col justify-center items-center">
                <h1 className="text-7xl font-Exo2-SemiBold">{t("Wait.awaiting")}</h1>
                <div className="spinner">
                    <div className="rect1 mx-1"/>
                    <div className="rect2"/>
                    <div className="rect3 mx-1"/>
                    <div className="rect4"/>
                    <div className="rect5 mx-1"/>
                </div>
            </div>
        </div>
    );
}
export default function WrappedApp() {
    return (
        <Suspense fallback="Loading">
                <App/>
        </Suspense>
    );
}
