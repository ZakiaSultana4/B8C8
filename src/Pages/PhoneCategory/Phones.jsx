import PhonesCard from "./PhonesCard";

const Phones = ({ phones }) => {
  return (
    <div>
      <h1 className=" text-5xl text-center text-[#143063] font-bold my-10">
        All Categoris Phones
      </h1>

      <div
        className="
       grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5  max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-24 my-8 "
      >
        {phones?.map((phone) => (
          <PhonesCard key={phone.id} phone={phone}></PhonesCard>
        ))}
      </div>
    </div>
  );
};

export default Phones;
