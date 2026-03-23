exports.createPost = (req, res) => {
    const {content} = req.body

    console.log("User: ", req.user);

    res.json ({
        message: "Post Created",
        content
    })
}