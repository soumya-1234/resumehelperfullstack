const express= require('express');
const mongoose=require('mongoose');
const mogoString="mongodb+srv://soumya:soumya1234@resumehelper.0w2v0ok.mongodb.net/resumeDB"


mongoose.connect(mogoString,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>{console.log('Connection has been established');})
.catch((e)=>{console.log('Connection Lost');})

const Student = require("./models/Student");
const Basicdet= require("./models/Basicdet");
const Academicdet= require("./models/Academicdet");
const Skilldet=require("./models/Skilldet");
const Projectdet=require("./models/Projectdet");
const Recruiter= require("./models/Recruiter");
const Jobdet=require("./models/Jobdet");


const app=express();

app.use("/",(req,res,next)=>{
  res.setHeader('Access-Control-Allow-Origin','*');
  res.setHeader('Access-Control-Allow-Methods','GET, POST , PUT , DELETE');
  res.setHeader('Access-Control-Allow-Headers','Content-type, Authorization');
  next();
});


app.use(express.json());


//students

app.get("/health",async(req,res)=>{
  try{
    res.status(200).json("OK")
  }
  catch(err){
    res.status(500).json(err)
  }
})

app.post("/students/create",async(req,res)=>{
    const newStud= new Student(req.body);

    try {
        const savedStud = await newStud.save();
        res.status(200).json(savedStud);
    } 
    catch (err) {
        res.status(500).json(err);
    } 
})

app.get("/students/get",async(req,res)=>{
    try{
        const students=await Student.find({});
        res.status(200).json(students);
    }
    catch(err){
        res.status(500).json(err)
    }
})

//basic details

app.post("/students/basicdetcreate",async(req,res)=>{
    const newBasic=new Basicdet(req.body);
    try{
        const savedBasic = await newBasic.save();
        res.status(200).json(savedBasic);
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.get("/students/basicdetget",async(req,res)=>{
    try{
        const basicdets=await Basicdet.find({});
        res.status(200).json(basicdets);
    }
    catch(err){
        res.status(500).json(err)
    }
})

app.put("/students/basicupdate/:id", async (req, res) => {
    try {
      const updatedBasicdet = await Basicdet.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedBasicdet);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//academic details

app.post("/students/academicdetcreate",async(req,res)=>{
    const newAcademic=new Academicdet(req.body);
    try{
        const savedAcademic = await newAcademic.save();
        res.status(200).json(savedAcademic);
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.get("/students/academicdetget",async(req,res)=>{
    try{
        const academicdets=await Academicdet.find({});
        res.status(200).json(academicdets);
    }
    catch(err){
        res.status(500).json(err)
    }
})

app.put("/students/academicupdate/:id", async (req, res) => {
    try {
      const updatedAcademicdet = await Academicdet.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedAcademicdet);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//skill details


app.post("/students/skilldetcreate",async(req,res)=>{
    const newSkill=new Skilldet(req.body);
    try{
        const savedSkill = await newSkill.save();
        res.status(200).json(savedSkill);
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.get("/students/skilldetget",async(req,res)=>{
    try{
        const skilldets=await Skilldet.find({});
        res.status(200).json(skilldets);
    }
    catch(err){
        res.status(500).json(err)
    }
})

app.put("/students/skillupdate/:id", async (req, res) => {
    try {
      const updatedSkilldet = await Skilldet.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedSkilldet);
    } catch (err) {
      res.status(500).json(err);
    }
  });

//project details

app.post("/students/projectdetcreate",async(req,res)=>{
    const newProject=new Projectdet(req.body);
    try{
        const savedProject = await newProject.save();
        res.status(200).json(savedProject);
    }
    catch(err){
        res.status(500).json(err);
    }
})

app.get("/students/projectdetget",async(req,res)=>{
    try{
        const projectdets=await Projectdet.find({});
        res.status(200).json(projectdets);
    }
    catch(err){
        res.status(500).json(err)
    }
})

app.put("/students/projectupdate/:id", async (req, res) => {
    try {
      const updatedProjectdet = await Projectdet.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedProjectdet);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  //recruiter

app.post("/recruiters/create",async(req,res)=>{
    const newRecr= new Recruiter(req.body);

    try {
        const savedRecr = await newRecr.save();
        res.status(200).json(savedRecr);
    } 
    catch (err) {
        res.status(500).json(err);
    } 
})


app.get("/recruiters/get",async(req,res)=>{
  try{
      const recruiters=await Recruiter.find({});
      res.status(200).json(recruiters);
  }
  catch(err){
      res.status(500).json(err)
  }
})

// Job Details

app.post("/recruiters/jobdet",async(req,res)=>{
  const newJobdet= new Jobdet(req.body);

  try {
      const savedJobdet = await newJobdet.save();
      res.status(200).json(savedJobdet);
  } 
  catch (err) {
      res.status(500).json(err);
  } 
})

app.get("/recruiters/jobdetget",async(req,res)=>{
  try{
      const jobdets=await Jobdet.find({});
      res.status(200).json(jobdets);
  }
  catch(err){
      res.status(500).json(err)
  }
})

app.delete("/recruiters/deletejob/:id",async(req,res)=>{
  try{
    await Jobdet.findByIdAndDelete(req.params.id);
    res.status(200).json("Job has been deleted...");
  }
  catch(err){
    res.status(500).json(err)
  }
});

app.put("/recruiters/jobupdate/:id", async (req, res) => {
  try {
    const updatedJobdet = await Jobdet.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedJobdet);
  } catch (err) {
    res.status(500).json(err);
  }
});


app.listen(3000,()=>{
    console.log(`server started at ${3000}`)
})