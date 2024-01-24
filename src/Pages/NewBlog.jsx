// import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
// const NewBlog = () => {
//   return (
//     <form className="my-10 mx-20 bg-[#AED1B2] rounded-lg">
//       <div className="space-y-12 p-20">
//         <div className="pb-12">
//           <h2 className="text-base font-semibold leading-7 text-gray-900">
//             Profile
//           </h2>
//           <p className="mt-1 text-sm leading-6 text-gray-600">
//             This information will be displayed publicly so be careful what you
//             share.
//           </p>
//           <div className="sm:col-span-2 sm:col-start-1">
//             <label
//               htmlFor="title"
//               className="block text-sm font-medium leading-6 text-gray-900"
//             >
//               Title
//             </label>
//             <div className="mt-2">
//               <input
//                 type="text"
//                 name="title"
//                 id="title"
//                 placeholder="Enter your title"
//                 autoComplete="address-level2"
//                 className="block w-[50%] rounded-md border-0 px-5 py-3 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
//               />
//             </div>
//           </div>
//           <div className="pb-12">
//             <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//               <div className="sm:col-span-3">
//                 <label
//                   htmlFor="category"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Category
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     id="category"
//                     name="category"
//                     className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6"
//                   >
//                     <option>Category</option>
//                     <option>world</option>
//                     <option>culture</option>
//                     <option>health</option>
//                   </select>
//                 </div>
//               </div>
//               <div className="sm:col-span-3">
//                 <label
//                   htmlFor="category"
//                   className="block text-sm font-medium leading-6 text-gray-900"
//                 >
//                   Category
//                 </label>
//                 <div className="mt-2">
//                   <select
//                     id="category"
//                     name="category"
//                     className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm  sm:max-w-xs sm:text-sm sm:leading-6"
//                   >
//                     <option>Category</option>
//                     <option>world</option>
//                     <option>culture</option>
//                     <option>health</option>
//                   </select>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
//             <div className="col-span-full">
//               <label
//                 htmlFor="content"
//                 className="block text-sm font-medium leading-6 text-gray-900"
//               >
//                 Content
//               </label>
//               <div className="mt-2">
//                 <textarea
//                   id="content"
//                   name="about"
//                   rows={3}
//                   className="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6 p-5"
//                   placeholder="Enter your content"
//                 />
//               </div>
//               <p className="mt-3 text-sm leading-6 text-gray-600">
//                 Write a few sentences about yourself.
//               </p>
//             </div>

//           </div>
//         </div>
//       </div>

//       <div className="mt-6 flex items-center justify-end gap-x-6">
//         <button
//           type="button"
//           className="text-sm font-semibold leading-6 text-gray-900"
//         >
//           Cancel
//         </button>
//         <button
//           type="submit"
//           className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
//         >
//           Save
//         </button>
//       </div>
//     </form>
//   );
// };
// export default NewBlog;

import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { InputText } from "primereact/inputtext";
import { PhotoIcon, UserCircleIcon } from "@heroicons/react/24/solid";
import { CascadeSelect } from "primereact/cascadeselect";
const NewBlog = () => {
  const [text, setText] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className=" mx-20 my-10 bg-[#AED1B2] p-10">
      <div className="card flex mb-5">
        <InputText
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full p-5"
          placeholder="Enter a title"
        />
      </div>
      <div className="flex items-center gap-4 mb-3">
        <div className="w-[50%]">
          <input
            type="url"
            name="title"
            id="image"
            placeholder="Enter image url"
            autoComplete="address-level2"
            className="w-[100%] rounded-md border-0 p-5 text-gray-900 shadow-sm placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
        </div>

        <div className="flex justify-center rounded-lg border border-dashed border-white w-[50%]">
          <div className="text-center">
            <PhotoIcon
              className="mx-auto h-12 w-12 text-gray-300"
              aria-hidden="true"
            />
            <div className="flex text-md leading-6 text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer rounded-md font-semibold text-indigo-700 focus-within:outline-none hover:text-indigo-500"
              >
                <span>Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                />
              </label>
              <p className="pl-1">or drag and drop</p>
            </div>
            <p className="text-xs leading-5 text-gray-600">
              PNG, JPG, GIF up to 10MB
            </p>
          </div>
        </div>
      </div>

      <div className="p-2 bg-white my-4 rounded-lg">
        <select
          name="HeadlineAct"
          id="HeadlineAct"
          className="w-full text-gray-700 sm:text-sm p-4 outline-none"
        >
          <option value="">Please select</option>
          <option value="JM">John Mayer</option>
          <option value="SRV">Stevie Ray Vaughn</option>
          <option value="JH">Jimi Hendrix</option>
          <option value="BBK">B.B King</option>
          <option value="AK">Albert King</option>
          <option value="BG">Buddy Guy</option>
          <option value="EC">Eric Clapton</option>
        </select>
      </div>

      <div className="card">
        <Editor
          value={text}
          onTextChange={(e) => setText(e.htmlValue)}
          style={{ height: "320px" }}
        />
      </div>

      <div className="w-[100%] flex gap-3 mt-10 items-end justify-end">
        <button className="w-[10%]  bg-[#4B7755] hover:bg-[#C6D4C2] text-white font-bold p-2 rounded-full">
          Save as Draft
        </button>
        <button className="w-[10%]  tracking-widest bg-[#85B486] hover:bg-[#C6D4C2] text-white font-bold p-2 rounded-full">
          Publish
        </button>
      </div>
    </div>
  );
};
export default NewBlog;
