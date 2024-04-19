import React from 'react'
import MainImg from "../images/photos/hero-photo.svg"
import Arrowimg from "../images/icons/arrow.svg"

const HeroCourses = () => {
  return (
    <div>
      <div className="container mx-auto px-[130px]">
        <div className="">
          <img src={MainImg} alt="" />
        </div>

        <div className="benifits mt-32">
          <h1 className="text-gray-700 text-6xl">Benefits</h1>
          <div className="flex justify-between">
            <p className="w-4/5 mt-2 text-gray-700 text-base">
              Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam
              eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac
              cum eget habitasse in velit fringilla feugiat senectus in.
            </p>

            <button className="px-5 py-2 border border-gray-200 rounded-md">
              Viwe All
            </button>
          </div>

          <div className="courses mt-10 flex gap-4">
            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">01</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and
                obligations.
              </h3>
              <img className="mt-3 ml-40" src={Arrowimg} alt="" />
            </div>

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">02</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and
                obligations.
              </h3>
              <img className="mt-3 ml-40" src={Arrowimg} alt="" />
            </div>

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">03</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and
                obligations.
              </h3>
              <img className="mt-3 ml-40" src={Arrowimg} alt="" />
            </div>
          </div>

          <div className="courses mt-5 flex gap-4">
            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">04</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and
                obligations.
              </h3>
              <img className="mt-3 ml-40" src={Arrowimg} alt="" />
            </div>

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">05</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and
                obligations.
              </h3>
              <img className="mt-3 ml-40" src={Arrowimg} alt="" />
            </div>

            <div className="course px-12 py-9 bg-white w-2/6 rounded-lg">
              <h1 className="text-end text-5xl font-bold">06</h1>
              <h2 className="text-gray-800 text-xl font-semibold">
                Flexible Learning Schedule
              </h2>
              <h3 className="text-gray-600 text-base font-normal mt-3">
                Fit your coursework around your existing commitments and
                obligations.
              </h3>
              <img className="mt-3 ml-40" src={Arrowimg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCourses