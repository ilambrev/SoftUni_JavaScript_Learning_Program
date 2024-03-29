import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./contexts/AuthContext";
import Path from "./paths";

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import GameList from "./components/game-list/GameList";
import GameCreate from "./components/game-create/GameCreate";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
// import GameDetails from "./components/game-details/GameDatails";
import Logout from "./components/logout/Logout";
import GameEdit from "./components/game-edit/GameEdit";
import ErrorBoundary from "./components/ErrorBoundary";
import AuthGuard from "./components/guards/AuthGuard";
import AuthGuardOutlet from "./components/guards/AuthGuardOutlet";
const GameDetails = lazy(() => import("./components/game-details/GameDatails"));

function App() {

    return (
        <ErrorBoundary>
            <AuthProvider>
                <div id="box">
                    <Header />

                    <Suspense fallback={<h1>Loading...</h1>}>

                        <Routes>

                            <Route path={Path.Home} element={<Home />} />
                            <Route path={Path.Games} element={<GameList />} />
                            <Route path={Path.Game} element={<GameDetails />} />
                            <Route path={Path.GameCreate} element={<AuthGuard><GameCreate /></AuthGuard>} />

                            <Route path={Path.Register} element={<Register />} />
                            <Route path={Path.Login} element={<Login />} />


                            <Route element={<AuthGuardOutlet />}>
                                <Route path={Path.GameEdit} element={<GameEdit />} />
                                <Route path={Path.Logout} element={<Logout />} />
                            </Route>

                        </Routes>

                    </Suspense>

                </div>
            </AuthProvider>
        </ErrorBoundary>
    );
};

export default App;