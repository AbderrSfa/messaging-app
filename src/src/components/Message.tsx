import MessageT from "../typings/MessageT";

const Message = ({ text, mine }: MessageT) => {
  return (
    <article className="my-2">
      {mine ? (
        <div className="flex justify-end">
          <p className="w-max rounded-full rounded-br-none bg-[#392fc6] py-2 px-4 text-white">
            {text}
          </p>
        </div>
      ) : (
        <div className="flex justify-start">
          <p className="w-max rounded-full rounded-bl-none bg-slate-200 py-2 px-4">
            {text}
          </p>
        </div>
      )}
    </article>
  );
};

export default Message;
