export default function ProfilePage() {
  return (
    <div className="grid place-items-center py-16 min-h-screen bg-slate-100">
      <div className="bg-white p-8 rounded-md w-full max-w-[60rem]">
        <h1 className="text-3xl font-semibold">Profile</h1>
        <p className="text-slate-700 mb-4 mt-2">
          View your user profile and edit them
        </p>
        <div className="h-[1px] w-full bg-slate-300 mt-8"></div>
        <div className="flex gap-8 items-center mt-8 mb-8">
          <div className="h-16 w-16 rounded-full  bg-slate-200 "></div>
          <div>
            <p className="text-lg font-semibold">Joseph Yusmita</p>
            <p className="text-slate-500">josephyusmita@gmail.com</p>
          </div>
        </div>
        <p className="mt-6">My Skills</p>
        <div className="flex flex-wrap mt-4 gap-4 mb-4">
          <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
            Design
          </div>
          <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
            Programming
          </div>
          <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
            Drawing
          </div>
          <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
            Engineering
          </div>
          <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
            Video Editing
          </div>
          <div className="text-slate-800 bg-slate-100 px-4 py-2 rounded-md flex items-center gap-2">
            Film Making
          </div>
        </div>
        <button className="bg-slate-200 text-slate-900 rounded-md px-6 py-3 mt-6 hover:bg-slate-100 transition-all duration-200 cursor-pointer">
          Logout
        </button>
      </div>
    </div>
  );
}
