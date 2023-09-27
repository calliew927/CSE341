const awesomeFunction = (req, res, next) => {
    res.json('Matthew Smith');
};

module.exports = {awesomeFunction}

const getSingle = (req, res, next) => {
    const userId = new ObjectId(req.parans.id);
    const result = await mongodb
}