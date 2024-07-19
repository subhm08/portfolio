import React, { Fragment, useState } from "react";
const MainBox = ({Pages}) => {
    return (
        <div className=" bg-gray-100 ml-6 mt-24 p-3 flex flex-col h-[calc(100vh-6rem)] rounded-xl overflow-x-hidden min-w-96 no-scrollbar w-[calc(100vw)] ">
            {Pages}
        </div>
    )
}

export default MainBox