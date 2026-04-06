import { InfoList1 } from "../../constants/Data";
import photo from "../../assets/about.png";
import bg from "../../assets/Hero Imgs/bg.png";

export default function Hero() {
  return (
    <>
      <div className="bg-[#020a18] py-20">
        <div className="container flex flex-wrap justify-center gap-10 items-center">
          <div>
            <img src={photo} alt="img" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">
              Apply AI, Deep Learning <br /> and Data Sciece to solve
            </h1>
            <p className="text-gray-300 mt-10">
              Lorem ipsum is placeholder text commonly used in the <br />{" "}
              graphic, print, and publishing industries for previewing <br />{" "}
              layouts and visual mockups.
            </p>
            <button className="mt-10 bg-blue-400 px-5 py-3 text-white rounded-sm">
              Learn More
            </button>
          </div>
        </div>

        <div className="bg-[#020a18]">
          <div className="container mx-auto mt-30 space-y-30">
            <div className="flex justify-center items-center">
              <div className="w-full">
                <div className="flex justify-center md:justify-around lg:justify-baseline xl:justify-between flex-wrap space-y-5">
                  {InfoList1.map((i) => (
                    <div
                      className="w-70 bg-[#0f1624] text-white space-y-5 text-center p-5 rounded-2xl"
                      key={i.id}
                    >
                      <div className="flex justify-center">
                        <img src={i.img} className="w-15" alt={i.title} />
                      </div>
                      <h1 className="font-bold text-2xl leading-[125%] font-Sans">
                        {i.title}
                      </h1>
                      <p className="font-semibold leading-[160%] text-[16px] font-Sans">
                        {i.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center text-white">
              <div className="p-5 block md:flex md:justify-between space-y-20">
                <div className="w-full block md:w-6/12 text-start">
                  <h1 className="font-Sans font-bold text-4xl leading-[130%]">
                    What our clients say about <br /> our awesome solutions
                  </h1>
                  <br />
                  <br />
                  <p className="HeroText">
                    To take a trivial example, which of us ever undertakes{" "}
                    <br /> laborious physical exercise, except to obtain some{" "}
                    <br />
                    advantage from it who do not know.
                  </p>
                  <br />
                  <p className="HeroText">
                    Lorem ipsum is placeholder text commonly used in the <br />{" "}
                    graphic, print, and publishing .
                  </p>
                  <br />
                  <p className="HeroText">
                    Lorem ipsum is placeholder previewing layouts and visual{" "}
                    <br />
                    {""}
                    mockups.
                  </p>
                  <br />
                  <p className="HeroText">
                    Lorem ipsum is placeholder text commonly used in the <br />{" "}
                    graphic, print, and publishing industries for previewing{" "}
                    <br />
                    layouts and visual mockups.
                  </p>
                </div>

                <div className="w-full flex items-center md:w-6/12">
                  <img src={bg} alt="Graphic" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
