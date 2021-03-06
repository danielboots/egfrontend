import Link from "next/link";

const FeatureTitle = () => {
  return (
    <div className="   container mx-auto text-lg text-gray-500 text-justify grid  grid-cols-1 p-4 m-10 sm:grid-cols-2">
      <div className="p-4  flex items-center ">
        <img
          src="/images/ed.png"
          className="hover:shadow-2xl transition duration-300 ease-in-out relative border-1"
          alt=""
        />
      </div>
      <div className=" px-4 mb-6 flex">
        <div className=" pt-4">
          <div className="text-3xl font-bold pb-4 tracking-wide text-gray-900 text-s">
            Introduction
          </div>
          "There are certain things, events, companies and especially people who
          have shaped the dance music world that we DJs (and the music listening
          public) know and love. Without these historical contributing factors,
          the importance of dance music in our lives may not be as profound, the
          radio we listen to could be lacklustre at best and the current digital
          dynamic for music distribution and sales would not be as elevated. I
          could list contributing individuals on just two hands - and one of
          those people is Eddie Gordon."
        </div>
      </div>

      {/* <Link href="/about">
        <button
          type="button"
          className=" m-3 py-3 px-4  uppercase  text-xs  rounded-sm font-bold  text-white  bg-rose-700 hover:bg-coolgray-800 justify-end"
        >
          Learn More ...
        </button>
      </Link> */}
    </div>
  );
};

export default FeatureTitle;
