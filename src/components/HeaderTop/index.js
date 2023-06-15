import React from "react";
import { Link } from "react-router-dom";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiInstagramFill } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlinePhone } from "react-icons/ai";

import "./styles.css";

export default function HeaderTop() {
  return (
    <section className="header_superior container-fluid p-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12 content">
            <div className="rrss">
              <Link className="transition" to="#" target="_blank">
                <MdFacebook />
              </Link>
              <Link className="transition" to="#" target="_blank">
                <AiFillTwitterCircle />
              </Link>
              <Link className="transition" to="#" target="_blank">
                <RiInstagramFill />
              </Link>
            </div>
            <div className="phone">
              <Link className="transition" to="#" target="_blank">
                <BsWhatsapp />
                (+54 9 11) 2117 4201
              </Link>
              <Link className="transition" to="#" target="_blank">
                <AiOutlinePhone />
                (+54 11) 3866 2077
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
