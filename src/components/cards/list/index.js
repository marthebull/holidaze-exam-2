import React from "react";
import { Link } from "react-router-dom";

const ListCard = () => {
  return (
    <>
      <Link>
        <div class="full-w rounded overflow-hidden shadow-sm">
          <img
            class="w-full"
            src="/images/placeholder-image.svg"
            alt="Sunset in the mountains"
          ></img>
          <div className="px-3 py-4">
            <h3 class="mb-2 h3">Placencia Village, Belize</h3>
            <div className="flex flex-row gap-3">
              <img
                classname="icon"
                src="/images/moon-sea-icon.svg"
                alt="Night icon"
              ></img>
              <p>48 668 NOK</p>
            </div>
            <div className="flex flex-row gap-3">
              <img
                classname="icon"
                src="/images/people-icon.svg"
                alt="Guests"
              ></img>
              <p>2</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListCard;
