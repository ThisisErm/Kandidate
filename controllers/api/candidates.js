const Candidate = require("../../models/candidates")

async function index(req, res) {
    const user = req.user._id
    const candidates = await Candidate.find({user})
    res.json(candidates)
}

async function show(req, res) {
    try {
        const candidate = await Candidate.findById(req.params.id)
        res.json(candidate)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function create(req, res) {
    try{
        req.body.user = req.user._id
        const candidate = await Candidate.create(req.body)
        res.json(candidate)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function updateCandidate(req, res) {
    try{
            //find by Id 
        const candidate = await Candidate.findById(req.params.id)
        candidate.set(req.body)
        await candidate.save()
        res.json(candidate)
    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}

async function deleteCandidate(req, res) {
    try{
        const candidate = await Candidate.findById(req.params.id)
        candidate.deleteOne()

    } catch (error) {
        console.log(error)
        res.status(400).json(error)
    }
}


module.exports = {
    index,
    show,
    create,
    updateCandidate,
    deleteCandidate
}