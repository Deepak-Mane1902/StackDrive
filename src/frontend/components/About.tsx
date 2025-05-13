import Image from 'next/image'
import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const FeaturesSection = () => {
  return (
    <section className="bg-[#101010] text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-start">
          We offer a range of advanced features to help you manage your files with precision and efficiency
        </h2>
        <p className="text-gray-300 mb-12 text-base sm:text-lg text-start max-w-4xl">
          Our platform is designed to make it easy for you to access your files from anywhere, at any time. With features like automatic backup, remote access, and easy file sharing, you can be confident that your data is always available when you need it.
        </p>

        <div className="flex flex-col gap-8">
          {/* Block 1 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#1a1a1a] w-full md:w-1/2 rounded-xl p-6 flex flex-col  items-center md:items-start text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                Share and collaborate — all in one place
              </h3>
              <p className="text-gray-400 mb-4">
                Try StackDrive today and experience the convenience and efficiency.
              </p>
              <Image
                src="/fire.png"
                alt="File collaboration"
                width={800}
                height={800}
                className="w-80 max-w-sm rounded-xl pl-30"
              />
            </div>

            <div className="bg-[#1a1a1a] w-full md:w-1/2 rounded-xl flex flex-col md:flex-row p-6 gap-4">
              <div className="flex-1 flex flex-col justify-center">
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Your files, always safe and accessible
                </h3>
                <p className="text-gray-400 mb-4">
                  With our cloud platform, you can rest assured that your files are always safe and protected.
                </p>
                <p className="text-[#ff6913] hover:text-[#d45710] cursor-pointer flex items-center gap-2">
                  Learn more <FaArrowRight />
                </p>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <Image
                  src="/rocket.png"
                  alt="Cloud security"
                  width={500}
                  height={400}
                  className="max-w-xs rounded-xl"
                />
              </div>
            </div>
          </div>

          {/* Block 2 */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="bg-[#1a1a1a] w-full md:w-1/2 rounded-xl flex flex-col justify-between p-6">
              <div>
                <h3 className="text-lg md:text-xl font-semibold mb-2">
                  Store more, worry less with StackDrive
                </h3>
                <p className="text-gray-400">
                  Our platform offers bigger storage space, so you can store all your files without worrying about running out of space.
                </p>
              </div>
              <div className="flex justify-center  mt-6">
                <Image
                  src="/drive.png"
                  alt="Cloud storage"
                  width={800}
                  height={800}
                  className="w-80 pl-10 max-w-xs"
                />
              </div>
            </div>

            <div className="bg-[#1a1a1a] w-full md:w-1/2 rounded-xl p-6 flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-semibold mb-2">
                The easy way to stay organized
              </h3>
              <p className="text-gray-400 mb-4">
                Our intuitive user interface allows you to easily store and sort all your files.
              </p>
              <Image
                src="/laptop.png"
                alt="File organization"
                width={800}
                height={800}
                className="w-80 max-w-sm rounded-xl ml-25 "
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection;
