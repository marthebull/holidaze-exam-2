import React from "react";

const ListCard = () => {
  return (
    <>
      <div classname="max-w-sm rounded overflow-hidden shadow-lg">
        <img
          classname="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        ></img>
        <div className="px-6 py-4">
          <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
        </div>
        <div classname="px-6 pt-4 pb-2"></div>
      </div>
    </>
  );
};

export default ListCard;
