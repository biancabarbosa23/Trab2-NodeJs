const Todo = require("../model/Todo");

module.exports = {
    async getAll(req, res){
        try{
            const todoData = await Todo.find()
         
            res.json(todoData)
        }catch(err){
            res.json({ error: "Não foi possível Listar as tarefas" });
        }
    },
    async getId(req,res){
        try{
            const {id} = req.params
            const todoData = await Todo.findById(id)

            res.json(todoData)
        }catch(err){
            res.json({ error: "Não foi possível Listar a tarefa" });
        }
    },
  async create(req, res) {
    try {
      const todo = req.body

      await Todo.create(todo)

      res.json({ message: "Cadastrado com sucesso" });
    } catch (err) {
      res.json({ error: "Não foi possível cadastrar" });
    }
  },
  async update(req, res) {
    try {
      const todo = req.body;
      const { id } = req.params;

      const todoData = await Todo.findByIdAndUpdate(id, todo, {
        new: true,
      });
      await todoData.save();

      res.json({ message: "Atualizado com sucesso" });
    } catch (err) {
      res.json({ error: "Não foi possível realizar a atualização" });
    }
  },
  async destroy(req, res) {
    try {
        const {id} = req.params

        await Todo.findByIdAndDelete(id)

        res.json({ message: "Tarefa deletada com sucesso" });
    } catch (err) {
      res.json({ error: "Não foi possível excluir" });
    }
  },
};
