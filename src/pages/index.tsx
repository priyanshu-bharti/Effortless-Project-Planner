import ToggleTheme from "@/components/buttons/toggleTheme";
import Link from "next/link";
import React from "react";

const Home = () => {
    return (
        <div className="min-h-screen grid place-items-center">
            <div className="flex flex-col items-center justify-center gap-4">
                <h1 className="text-3xl font-bold">This is the landing page</h1>
                <p className="">Click on the link below to get started.</p>
                <Link href="/resources" replace className="btn btn-primary">
                    Take me to the app
                </Link>
                <ToggleTheme />
            </div>
        </div>
    );
};

export default Home;
