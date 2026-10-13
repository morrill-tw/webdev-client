import { FaCheckCircle } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { FaWandMagicSparkles } from "react-icons/fa6";

export default function CourseStatus() {
  return (
    <div id="wd-course-status" className="ps-4">
      <h2>Course Status</h2>
      <div className="grid grid-cols-2 gap-1">
        <button className="appearance-none border border-gray-400 rounded w-full p-2 bg-white">
          <FcCancel className="inline-block text-sm text-black mr-1" />
          Unpublish
        </button>
        <button className="rounded w-full p-2 bg-green-600 text-white">
          <span>
            <FaCheckCircle className="inline-block text-sm text-white mr-1" />
          </span>
          Publish
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          Import Existing Content
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          Import from Commons
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          Choose Home Page
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          View Course Stream
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          New Announcement
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          New Analytics
        </button>
        <button className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white">
          View Course Notifications
        </button>
        <button
          id="wd-ai-status"
          className="appearance-none border border-gray-400 col-span-2 rounded w-full p-2 bg-white"
        >
          <FaWandMagicSparkles className="inline-block text-sm text-black mr-1" />
          Sample action
        </button>
      </div>
    </div>
  );
}
