const Message = () => {
  return (
    <>
      <div className="flex justify-end">
        <p className="w-max rounded-full rounded-br-none bg-[#392fc6] py-2 px-4 text-white">
          Hello there
        </p>
      </div>
      <div className="flex justify-start">
        <p className="w-max rounded-full rounded-bl-none bg-slate-200 py-2 px-4">
          Hello there
        </p>
      </div>
    </>
  );
};

export default Message;
