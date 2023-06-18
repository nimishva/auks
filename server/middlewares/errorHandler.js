

module.exports = (err, req, res, next) => {
    console.error('inside err handler**********************', '\n', err, '\n', '*************************');
    res.json(`from err handlr${err}`);


};