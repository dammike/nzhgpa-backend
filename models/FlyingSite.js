const mongoose = require('mongoose');

const flyingSiteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true,
        minlength: 5,
        maxlength: 155,
        index: true
    },
    region: {
        type: String,
        required: true,
        enum: [
            'auckland',
            'waikato',
            'wellington',
            'northland',
            'manawatu - wanganui',
            'tauranga',
            'rotorua - taupo',
            'hawkes bay',
            'christchurch',
            'taranaki',
            'nelson - malborough',
            'queenstown - wananka',
            'dunedin - invercargill'
        ],
        index: true
    },
    coords: {
        latitude: {
            type: String,
            minlength: 12
        },
        longitude: {
            type: String,
            minlength: 12
        }
    },
    description: {
        type: String,
        required: true,
        minlength: [55, "Description needs to be atleast 55 characters long"]
    },
    imageURI: {
        type: String
    },
    siteInformation: {
        siteType: {
            type: String,
            required: true,
            lowercase: true,
            enum: ['coastal', 'in-land', 'dunes']
        },
        landing: {
            type: String,
            required: true,
            lowercase: true,
        },
    },
    weatherAndWindDirection: {
        windDirections: [
            {
                label: {
                    type: String
                },
                direction: {
                    type: String,
                    required: true,
                    lowercase: true,
                }
            }
        ],
        notes: {
            type: String,
            lowercase: true,
        },
    },
    mandatoryNotices: {
        type: String,
        minlength: 10,
        required: true,
        lowercase: true,
    },
    siteRadio: {
        channel: {
            type: Number,
            minlength: 1,
            maxlength: 10
        },
        frequency: {
            type: Number,
            minlength: 1,
            maxlength: 10
        },
    },
    restrictions: {
        HG: {
            type: String,
            lowercase: true
        },
        PG: {
            type: String,
            lowercase: true
        }
    },
    cautions: {
        HG: {
            type: String,
            lowercase: true
        },
        PG: {
            type: String,
            lowercase: true
        },
    },
    airspace: {
        type: String,
        lowercase: true
    },
    accessConditions: {
        type: String,
        lowercase: true
    },
    siteRecord: {
        type: Number,
        lowercase: true
    },
    isActive: {
        type: Boolean,
    },
    siteMonitor: {
        name: {
            type: String,
            lowercase: true,
            minlength: 10
        },
        contact: {
            phone: {
                type: String,
                lowercase: true,
                minlength: 10
            },
            mobile: {
                type: String,
                lowercase: true,
                minlength: 10
            }
        }
    },
    notes: {
        type: String,
        lowercase: true,
        minlength: 10
    },
    achievements: {
        type: String,
        lowercase: true,
        minlength: 10
    }
}, { timestamp: true });

module.exports = mongoose.model('FlyingSite', flyingSiteSchema);