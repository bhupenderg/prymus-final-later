const Campaign = require('../models/campaignModel')

// states and cities

const area = {
    country: "India",
    zone: ["East", "West", "North", "South"],
    states: {
      East:["Chattisgarh", "Jharkhand", "Odisha", "Sikkim", "West Bengal"],
      West:["Goa", "Gujrat", "Maharashtra", "Rajasthan"],
      North:["Delhi", "HAryana", "Jammu & Kashmir", "Himachal Pradesh", "Uttar Pradesh", "Punjab", "Uttarakhand"],
      South:["Andhra Pardesh", "Karnataka", "Kerala", "Lakshadweep", "Tamil Nadu", "Telangana"]
    }
}
  

  // area ends

exports.createCampaign = async (req, res) => {
    try{

        const whatsapp_no = req.body.whatsapp_no
        const company_name = req.body.company_name
        const website = req.body.website
        const position = req.body.position
        const category = req.body.category
        const facebook_marketing = req.body.facebook_marketing
        const linkedin_marketing = req.body.linkedin_marketing
        const instagram_marketing = req.body.instagram_marketing
        const email_marketing = req.body.email_marketing
        const seo = req.body.seo
        const smo = req.body.smo
        const image = req.file
        const image_url = image.path
        const clientId = req.session.user.id
        let total = parseInt(facebook_marketing)  + parseInt(linkedin_marketing)  + parseInt(instagram_marketing)  + parseInt(email_marketing)  + parseInt(seo)  + parseInt(smo) 
    
        const newCampaign =  await Campaign.create({
            whatsapp_no,
            company_name,
            website,
            position,
            category,
            facebook_marketing,
            linkedin_marketing,
            instagram_marketing,
            email_marketing,
            seo,
            smo,
            image_url,
            clientId,
            total
        })
        console.log(image)
        console.log(req.body)
        console.log(newCampaign)
        res.send("<h1>Campaign created successfully. Go and see your plan <a href = '/myplan'>here.</h1>")
        
    }

    catch(err) {
        res.status(400).json({
            status: "Fail",
            msg: err
        })
    }

}

exports.getCampaign = async(req, res) => {
    try{
        const campaigns = await Campaign.find()
        res.render('campaign-register', {
            area: area
        })
    }
    

    catch(err) {
        console.log(err)
    }

}
