const Tugas = require("../models/Tugas")

module.exports = {
    getAllTugas: async (req, res) => {
        const tugas = await Tugas.find().populate("user", "name")

        res.json({
        message: "managed to get data",
        data: tugas
        })
    },

    getTugasByID: async(req, res) => {
        const id = req.params

        try{
            const tugas = await Tugas.findById(id);
            res.status(200).json({
                message:"managed to get data",
                data:tugas
            })
            } catch (error) {
            res.status(400).json({
                message:"failed to get data"
            })
            }
    },

    addTugas: (req, res) => {
        const data = req.body;
        const tugas = new Tugas(data);
        tugas.save();

        res.json({
        message: "successfully added data",
        });
    },

    deleteTugasByID: async (req, res) => {
        const id = req.params

        try{
            const tugas = await Tugas.deleteOne(id);
            res.status(200).json({
                message:"successfully deleted data",
                data:tugas
            })
            } catch (error) {
            res.status(400).json({
                message:"failed deleted data"
            })
            }
    },

    deleteAllTugas: async (req, res) => {
        const id = req.params

        try{
            const tugas = await Tugas.deleteMany(id);
            res.status(200).json({
                message:"successfully deleted data",
                data:tugas
            })
            } catch (error) {
            res.status(400).json({
                message:"failed deleted data"
            })
            }
    },

    updateTugasByID: async(req, res) => {
        try {
        const id = req.params
        const update=req.body
        const option = {new :true};
        const tugas = await Tugas.findByIdAndUpdate(id, update,option);
        res.status(201).send({
            message : "Succes updated tugas",
        })
        } catch (error) { 
            res.status(501).json({ message: "Server Error" })
        }
        }
    };