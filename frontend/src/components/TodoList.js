// import module with object literal {}
import React from "react";

const Todolist = () => {
  return (
    <div className="component-home flex flex-col">
      <div className="card-note">
        <span className="text-note">
          Belajar dasar JavaScript, Belajar Dasar ReactJS, Belajar Dasar
          Tailwindcss, Belajar Dasar NodeJS
        </span>
        <div className="button m-1 basis-1/5 flex justify-center">
          <button className=" w-7 h-7 m-1 mr-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">✏️</span>
          </button>
          <button className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">❌</span>
          </button>
        </div>
      </div>
      <div className="card-note">
        <span className="text-note">Belajar membuat frontend dan backend</span>
        <div className="button m-1 basis-1/5 flex justify-center">
          <button className=" w-7 h-7 m-1 mr-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">✏️</span>
          </button>
          <button className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">❌</span>
          </button>
        </div>
      </div>
      <div className="card-note">
        <span className="text-note">
          Integrasi database dari MySQL ke database PostgreSQL
        </span>
        <div className="button m-1 basis-1/5 flex justify-center">
          <button className=" w-7 h-7 m-1 mr-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">✏️</span>
          </button>
          <button className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">❌</span>
          </button>
        </div>
      </div>
      <div className="card-note">
        <span className="text-note">
          Belajar menggunakan framework Andromedia
        </span>
        <div className="button m-1 basis-1/5 flex justify-center">
          <button className=" w-7 h-7 m-1 mr-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">✏️</span>
          </button>
          <button className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">❌</span>
          </button>
        </div>
      </div>
      <div className="card-note">
        <span className="text-note">
          Integrasi database PostgreSQL ke Prisma.IO
        </span>
        <div className="button m-1 basis-1/5 flex justify-center">
          <button className=" w-7 h-7 m-1 mr-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">✏️</span>
          </button>
          <button className="w-7 h-7 m-1 ml-[0.5px] p-0 bg-slate-800 rounded-md cursor-pointer hover:bg-slate-900 hover:scale-105 group">
            <span className="m-auto text-sm group-hover:scale-105">❌</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Todolist;
