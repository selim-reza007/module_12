export default function Contact() {

  return (
    <section>

        <form className="pt-5 flex flex-col items-center gap-5 min-h-[500px]">
          <div className="flex gap-3 mt-2 w-[60%]">
            <div className="text-2xl min-w-[30%]">Name</div>
            <input type="text" placeholder="Enter your name" className="input input-bordered input-md w-full max-w-lg min-w-[70%]" />
          </div>

          <div className="flex gap-3 mt-2 w-[60%]">
            <div className="text-2xl min-w-[30%]">Email</div>
            <input type="text" placeholder="Enter your email" className="input input-bordered input-md w-full max-w-lg min-w-[70%]" />
          </div>

          <div className="flex gap-3 mt-2 w-[60%]">
            <div className="text-2xl min-w-[30%]">Website</div>
            <input type="text" placeholder="Your website" className="input input-bordered input-md w-full max-w-lg min-w-[70%]" />
          </div>

          <div className="flex gap-3 mt-2 w-[60%]">
            <div className="text-2xl min-w-[30%]">Message</div>
            <textarea className="textarea textarea-bordered min-w-[70%]" placeholder="Your message"></textarea>
          </div>
          <button className="btn btn-active btn-accent w-[60%] mt-5 ">Submit</button>
        </form>

    </section>
  );
}