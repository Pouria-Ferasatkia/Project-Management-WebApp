import Link from "next/link";

export default function Note(props) {
  const { _id, title, describe, createdAt } = props.note;
  return (
    <Link href={`/notes/${_id}`} >
      <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow mx-auto my-10">
        <p class="mb-3 text-2xl font-bold  text-gray-900 text-center">{title}</p>
        <p class="mb-2 font-normal text-gray-700 dark:text-gray-600 text-center">{describe}</p>
        <p class=" text-sm text-gray-700 dark:text-gray-300 text-right">{createdAt}</p>
      </div>
    </Link>
  );
}
