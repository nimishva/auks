

module.exports = (err, req, res, next) => {

    console.error('inside err handler**********************', '\n', err, '\n', '*************************');

    if (err) res.json({ error: err });
};