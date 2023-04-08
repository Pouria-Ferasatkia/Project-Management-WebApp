import Link from "next/link";

export default function Note(props) {
  const { _id, title, describe, createdAt } = props.note;
  return (
    // <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mx-auto my-10">
    //   <p class="mb-3 text-2xl font-bold  text-gray-900 text-center">{title}</p>
    //   <p class="mb-2 font-normal text-gray-700 dark:text-gray-600 text-center">{describe}</p>
    //   <p class=" text-sm text-gray-700 dark:text-gray-300 text-right">{createdAt}</p>
    // </div>

    <div  class="group relative block h-32 sm:h-40 lg:h-48 mx-10 mb-10">
      <span class="absolute inset-0 border-2 border-dashed border-black"></span>

      <div class="relative flex h-full transform items-end border-2 border-black bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div class="p-4 !pt-0 transition-opacity group-hover:absolute group-hover:opacity-0 sm:p-6 lg:p-8">


          <h2 class="mt-4 text-xl font-medium sm:text-2xl">
             {title}
          </h2>
        </div>

        <div class="absolute p-4 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 sm:p-6 lg:p-8">
          <h3 class="mt-4 text-xl font-medium sm:text-2xl">
            {title}
          </h3>

          <p class="mt-4 text-sm sm:text-base">
             {describe}
          </p>

          <p class="mt-8 font-bold">Read more</p>
        </div>
      </div>
    </div>
  );
}
