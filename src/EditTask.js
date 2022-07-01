import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    studentName: yup.string().required(),
    class: yup.number().positive().integer().min(1).max(12).required(),
    score: yup.number().positive().integer().min(0).max(100).required()
})

const EditTask = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ resolver: yupResolver(schema)});
    
     const submitForm = (data) => {console.log(data);}
    
      return (
        <div>
          <input type="checkbox" id="editTask" class="modal-toggle" />
          <div class="modal">
            <div class="modal-box h-[500px]">
              <h3 class="text-lg font-bold my-2">Edit Student</h3>
              <hr className=" border-[#D3D6DB] border-solid w-full mb-4" />
    
              { /* ADDStudent  */}
              <form onSubmit={handleSubmit(submitForm)}>
    
                {/* Name */}
                <label className="uppercase text-gray-400">Student Name*</label> 
                <input className="border w-full rounded-lg" type="text" name="studentName"  
                {...register("studentName")}/>
              {errors.studentName && <p className="text-red-500 mb-4">Error: Name field cannot be left blank</p> }
    
                {/* Class  */}
                <label className="uppercase text-gray-400">Class*</label>
                <input className="border w-full rounded-lg" type="text" name="class" 
                {...register("class")} />
                {errors.class && <p className="text-red-500 mb-4">Error: Please input values between 1 {"&"} 12</p> }
    
                {/* Score  */}
                <label className="uppercase text-gray-400">Score*</label>
                <input className="border w-full rounded-lg" type="text" name="score" 
                {...register("score")} />
                {errors.score && <p className="text-red-500 mb-4">Error: Score field cannot be left blank</p> }
    
                {/* Result  */}
                <label className="uppercase text-gray-400">Result</label>
                <p>-</p>
    
                {/* Grade  */}
                <label className="uppercase text-gray-400">Grade</label>
                <p>-</p>
    
                <hr className=" border-[#D3D6DB] border-solid w-full " />
    
                <label className="absolute right-28 my-4 text-[#2CA4D8] border border-[#2CA4D8] px-5 py-1 rounded-xl mr-6 uppercase" htmlFor="editTask">Cancel</label>
                <input className="absolute right-4 my-4 my-4 text-white border bg-gray-400 px-5 py-1 rounded-xl uppercase" type="submit" value="Confirm" id="submit" />
              </form>
    
            </div>
          </div>
        </div>
      );
};

export default EditTask;