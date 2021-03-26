const mongoose = require('mongoose')
const Schema = mongoose.Schema
const campaignSchema = new Schema({
    whatsapp_no: {
        type: Number,
        required: true,
        trim: true
    },
    company_name: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    website: {
        type: String,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    facebook_marketing: {
        type: Number,
        trim: true,
        required: true,
        default:0
    },
    instagram_marketing: {
        type: Number,
        trim: true,
        required: true,
        default:0
    },
    email_marketing: {
        type: Number,
        trim: true,
        required: true,
        default:0
    },
    seo: {
        type: Number,
        trim: true,
        required: true,
        default:0
    },
    smo: {
        type: Number,
        trim: true,
        required: true,
        default:0
    },

    linkedin_marketing: {
        type:Number,
        trim: true,
        required: true,
        default: 0
    },

    image_url: {
        type: String,
        trim: true
    },
    clientId: {
        type: Schema.Types.ObjectId,
        ref: 'Client',
        required: true
    },
    payment_done: {
        type: String,
        enum: ['no', 'yes'],
        default: 'no',
        required: true
    },
    total: {
        type: Number,
        trim: true,
        required: true
    }
}, 
{
    timestamps: true
}
)

const Campaign = mongoose.model('Campaign', campaignSchema);

module.exports = Campaign

