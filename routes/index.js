module.exports = function(app, user)
{
    app.get('/login', (req, res) => {
      res.render('login.html'); // login.ejs 랜더링
    });

    app.post('/login', (req, res) => {
      const body = req.body; // body-parser 사용
      var result = {};
      var sess = req.session;
      user.findOne({_id: req.body._id}, function(err, user){
          if(err) return res.status(500).json({error: err});
          if(!user){
              result["success"] = 0;
              result["error"] = "ID not found"
              return res.json(result);
          }

          if (user["_pw"] == req.body._pw)
          {
            result["success"] = 1;
            sess.first_name = user["first_name"];
            sess.last_name = user["last_name"];
            sess.data = user;
            res.json(result);
          }
          else{
            result["success"] = 0;
            result["error"] = "incorrect";
            res.json(result);
          }

      })

    });

    app.get('/logout', function(req, res){
        var sess = req.session;
        if(sess.first_name){
            req.session.destroy(function(err){
                if(err){
                    console.log(err);
                }else{
                    res.redirect('/');
                }
            })
        }else{
            res.redirect('/');
        }
    })

    app.post('/join', (req, res) => {
      const body = req.body;
      var result = {};
      user.findOne({_id: req.body._id}, function(err, user){
          if(err) return res.status(500).json({error: err});
          if(user){
            result["success"] = 0;
            result["error"] = "ID중복"
            return res.json(result);
        }
      })

      var new_user = new user();
      new_user._id = req.body._id;
      new_user._pw = req.body._pw;
      new_user.first_name = req.body.first_name;
      new_user.last_name = req.body.last_name;
      new_user.birth_date = req.body.birth_date;
      new_user.checkup_data = new Date(req.body.checkup_data);
      new_user.pressure = req.body.pressure;
      new_user.creatinine = req.body.creatinine;
      new_user.glucose = req.body.glucose;
      new_user.hb = req.body.hb;
      new_user.CA = req.body.CA;
      new_user.ph = req.body.ph;
      new_user.plt = req.body.plt;
      new_user.rbc = req.body.rbc;
      new_user.tsh = req.body.tsh;
      new_user.wbc = req.body.wbc;

      new_user.save(function(err){
          if(err){
              console.error(err);
              res.json({result: 0});
              return;
          }

          res.json({result: 1});
        });
    });

    app.get('/',function(req,res){
        var sess = req.session;
        res.render('index', {
            first_name: sess.first_name,
            last_name: sess.last_name
        })
    });

    app.get('/generalCheckup',function(req,res){
      var sess = req.session;
      res.render('general_Checkup', {
          first_name: sess.first_name,
          last_name: sess.last_name,
          data: sess.data
      })
    });

    app.get('/preciseCheckup',function(req,res){
      var sess = req.session;
      res.render('precise_Checkup', {
          first_name: sess.first_name,
          last_name: sess.last_name,
          data: sess.data
      })
    });

    app.get('/detailCheckup',function(req,res){
      var sess = req.session;
      res.render('detail_figure', {
          first_name: sess.first_name,
          last_name: sess.last_name,
          data: sess.data
      })
    });

    app.get('/solution',function(req,res){
      var sess = req.session;
      res.render('solution', {
          first_name: sess.first_name,
          last_name: sess.last_name,
          data: sess.data
      })
    });

    // GET ALL USERS
    app.get('/api/users', function(req,res){
        user.find(function(err, users){
            if(err) return res.status(500).send({error: 'database failure'});
            res.json(users);
        })
    });

    // GET SINGLE USER
    app.get('/api/users/:user_id', function(req, res){
        user.findOne({_id: req.params.user_id}, function(err, user){
            if(err) return res.status(500).json({error: err});
            if(!user) return res.status(404).json({error: 'user not found'});
            res.json(user);
        })
    });

    // UPDATE THE USER
    app.put('/api/users/:user_id', function(req, res){
        user.findById(req.params.user_id, function(err, user){
            if(err) return res.status(500).json({ error: 'database failure' });
            if(!user) return res.status(404).json({ error: 'user not found' });

            if(req.body._id) user._id = req.body._id;
            if(req.body._pw) user._pw = req.body._pw;
            if(req.body.first_name) user.first_name = req.body.first_name;
            if(req.body.last_name) user.last_name = req.body.last_name;
            if(req.body.checkup_data) user.checkup_data = new Date(req.body.checkup_data);
            if(req.body.pressure) user.pressure = req.body.pressure;
            if(req.body.creatinine) user.creatinine = req.body.creatinine;
            if(req.body.glucose) user.glucose = req.body.glucose;
            if(req.body.hb) user.hb = req.body.hb;
            if(req.body.CA) user.CA = req.body.CA;
            if(req.body.ph) user.ph = req.body.ph;
            if(req.body.plt) user.plt = req.body.plt;
            if(req.body.rbc) user.rbc = req.body.rbc;
            if(req.body.tsh) user.tsh = req.body.tsh;
            if(req.body.wbc) user.wbc = req.body.wbc;
            user.save(function(err){
                if(err) res.status(500).json({error: 'failed to update'});
                res.json({message: 'user updated'});
            });

        });

    });

    // DELETE USER
    app.delete('/api/users/:user_id', function(req, res){
        user.remove({ _id: req.params.user_id }, function(err, output){
            if(err) return res.status(500).json({ error: "database failure" });

            /* ( SINCE DELETE OPERATION IS IDEMPOTENT, NO NEED TO SPECIFY )
            if(!output.result.n) return res.status(404).json({ error: "book not found" });
            res.json({ message: "book deleted" });
            */

            res.status(204).end();
        })
    });

}
