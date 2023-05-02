import React from "react";
import { Link } from "react-router-dom";
import { ButtonOutlineWhite } from "../../../styles/GlobalStyles";

const ListCard = () => {
  return (
    <>
      <Link>
        <div class="full-w rounded overflow-hidden shadow-md ">
          <div className="relative overflow-hidden bg-cover bg-no-repeat max-h-md">
            <img
              class="w-full"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-51257102/original/110df613-4152-4aaf-975d-a5787fb1b4a5.jpeg?im_w=1200"
              alt="Sunset in the mountains"
            ></img>
            <div class="flex flex-col justify-center align-middle absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-dark bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100">
              <Link to="/venue/:id">
                <ButtonOutlineWhite className="opacity-1">
                  view venue
                </ButtonOutlineWhite>
              </Link>
            </div>
          </div>
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
