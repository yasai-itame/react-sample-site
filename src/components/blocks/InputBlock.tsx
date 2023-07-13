type Props = {
  type: string;
  labelText: string;
  id: string;
  name: string;
}

const InputBlock: React.FC<Props> = ({ type, labelText, id, name }) => {
  return (
    <>
      <div>
        <label htmlFor={id} className="mb-2 inline-block text-sm text-gray-800 sm:text-base">{labelText}</label>
        <input type={type} id={id} name={name} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
      </div>
    </>
  )
};

export default InputBlock;