const create = (req, res, next) => {
    res.json({message: "POST new room"});
};

module.exports = {create};
