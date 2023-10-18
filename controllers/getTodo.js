const Todo = require("../models/Todo");

exports.getTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
 
        res.status(200).json({
            success: true,
            data:todos,
            message: 'Fetched successfully'
        });
    } catch (error) {
        console.error(error);

        res.status(500).json({
            success: false,
            data: "Internal server error",
            message: error.message
        });
    }
}

 exports.getTodoById=async(req,res)=>{
    try{
        const id=req.params.id;
    const todo=await Todo.find({_id:id});
    res.status(200).json(
        {
            sucess:true,
            data:todo,
            message:'Fetched successfully'
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