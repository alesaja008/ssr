import React, { useRef, useEffect } from "react";
import iconCS from "../../../assets/IconButton/callCenter.svg";
import iconAppointment from "../../../assets/IconButton/appointment.svg";
import iconOP from "../../../assets/IconButton/iconOp.svg";
import iconSales from "../../../assets/IconButton/sales.svg";
import Image from "next/image";

const ButtonChat = () => {
  const fabRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (fabRef.current && !fabRef.current.contains(event.target)) {
        // Klik di luar elemen, tutup komponen
        const fabCheckbox = document.getElementById("fabCheckbox");
        if (fabCheckbox) {
          fabCheckbox.checked = false;
        }
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <section>
        <div className="fab-wrapper" ref={fabRef}>
          <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
          <label className="fabButton" htmlFor="fabCheckbox">
            <span className="fab-dots fab-dots-1" />
            <span className="fab-dots fab-dots-2" />
            <span className="fab-dots fab-dots-3" />
          </label>
          <div className="fab-wheel">
            <a className="fab-action fab-action-1" data-tooltip="Email">
              <Image src={iconCS} alt="customer service" />
            </a>
            <a
              href="https://bintangsempurna.co.id/appointment/"
              className="fab-action fab-action-2"
              data-tooltip="appointment"
            >
              <Image src={iconAppointment} alt="appointment" />
            </a>
            <a
              href="https://onlineprint.co.id/"
              className="fab-action fab-action-3"
              data-tooltip="onlineprint.co.id"
            >
              <Image src={iconOP} alt="onlineprint" />
            </a>
            <a className="fab-action fab-action-4" data-tooltip="Sales">
              <Image src={iconSales} alt="sales" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ButtonChat;
