import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";

const Phone = () => {
  const [phone, setPhone] = useState();

  const { id } = useParams();
  const phones = useLoaderData();
  useEffect(() => {
    const findPhone = phones.find((phone) => phone.id === id);
    setPhone(findPhone);
  }, [id, phones]);

  return (
    <div className="max-w-screen-xl mx-auto px-8 md:px-16 lg:px-24 flex  justyfy-center  items-center h-[70vh]">
      <PhoneCard phone={phone}></PhoneCard>
    </div>
  );
};

export default Phone;
