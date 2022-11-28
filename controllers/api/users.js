module.exports = {
    create,
}

function create(req, res){
    console.log(req.body);
    res.json({
        user: {
          name: req.body.name,
          email: req.body.email
        }
      });
    }