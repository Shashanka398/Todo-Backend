const Todo=require("../models/Todo");

exports.createTodo=async(req,res)=>{
   try{
       //extract from titl and description from request body
       const {title,description}=req.body;
       const respose=await Todo.create({title,description});

       res.status(200).json(
        {
            sucess:true,
            data:respose,
            message:'Entery created success!!'
        }
       )

    }
    catch(error)
    {
      console.error(error);

      console.log(error);
      res.status(500)
      .json({
        successs:false,
        data:"Interal server error",
        message:error.message
      })
    }

}