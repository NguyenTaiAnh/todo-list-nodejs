function responseAPI(response, res) {
    if (response.status === 200) {
        res.status(200).json(response.data);
    }
    else res.status(response.status).json({ message: response.errorMessage });
};

module.exports = {
    responseAPI
}