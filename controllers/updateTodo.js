const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params; // Correct the destructuring here
        const { title, description } = req.body;
        const todos = await Todo.findByIdAndUpdate(
            { _id: id }, // Use the extracted id
            { title, description, updatedAt: Date.now() },
           
        );

        if (!todos) {
            return res.status(404).json({
                success: false,
                data: null,
                message: 'Todo not found',
            });
        }

        res.status(200).json({
            success: true,
            data: todos,
            message: 'Updated successfully',
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
