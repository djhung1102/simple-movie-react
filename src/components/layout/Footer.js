import React from "react";

const Footer = () => {
    return (
        <footer className="mt-10 border-t border-t-gray-200 pb-2">
            <div className="grid grid-cols-7 gap-x-[2rem] pt-6">
                <div className="col-span-3">
                    <p className="text-gray-500 text-base">
                        There are quite a lot of fascinating topics such as the best horror movies
                        today, the best philosophical films in history, the best films depicting
                        human psychology, or a list of featured films by a director, performer,…
                    </p>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Resources</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer text-gray-500">
                        <span>Movie News</span>
                        <span>Movie API</span>
                        <span>Movie Heatmap</span>
                        <span>Movie Treasury</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Support</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer text-gray-500">
                        <span>Request Form</span>
                        <span>Help Center</span>
                        <span>FAQ</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Donations</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer  text-gray-500">
                        <span>The MovieDB</span>
                        <span>MovieDB API</span>
                    </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-y-5 text-sm">
                    <span className="font-semibold">Community</span>
                    <div className="flex flex-col gap-y-5 cursor-pointer text-gray-500">
                        <span>Twitter</span>
                        <span>Instagram</span>
                        <span>Reddit</span>
                        <span>Facebook</span>
                        <span>Youtube</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
