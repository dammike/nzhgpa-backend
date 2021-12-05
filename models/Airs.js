const mongoose = require('mongoose');

const airsSchema = new mongoose.Schema({
    aircraftType: {
        type: String,
        lowercase: true,
        required: true
    },
    pilotCertificate: {
        type: String,
        lowercase: true,
        required: true
    },
    otherInfo: {
        type: String,
        lowercase: true,
        required: true
    },

    // BASIC INFORMATION
    date: {
        type: Date,
        required: true
    },
    time: {
        type: Date,
        required: true
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
    pilotExperience: {
        type: String,
        lowercase: true
    },
    siteLocation: {
        type: String,
        lowercase: true,
        required: true
    },
    siteFamiliarity: {
        type: String,
        lowercase: true,
        required: true
    },

    // REPORT SUMMARY
    whatHappened: {
        type: String,
        minlength: 20,
        lowercase: true,
        required: true
    },
    typeOfOccurance: {
        type: String,
        lowercase: true,
        required: true
    },
    degreeOfInjury: {
        type: String,
        lowercase: true,
        required: true
    },
    locationOfMainInjury: {
        type: String,
        lowercase: true,
        required: true
    },
    otherInjuryDetails: {
        type: String,
        lowercase: true,
        required: true
    },
    gliderDamage: {
        type: String,
        lowercase: true,
        required: true
    },

    // FLIGHT STAGE
    purposeOfFlight: {
        type: String,
        lowercase: true,
        required: true
    },
    phaseOfFlight: {
        type: String,
        lowercase: true,
        required: true
    },

    //EQUIPMENT
    helmet: {
        type: String,
        lowercase: true,
        required: true
    },
    harness: {
        type: String,
        lowercase: true,
        minlength: 3,
        required: true
    },
    reserve: {
        type: String,
        lowercase: true,
        minlength: 3,
        required: true
    },

    //WEATHER
    windSpeed: {
        type: String,
        lowercase: true,
        required: true
    },
    windDirection: {
        type: String,
        lowercase: true,
        required: true
    },
    windConditions: {
        type: String,
        lowercase: true,
        required: true
    },
}, { timestamps: true });

module.exports = mongoose.model('Airs', airsSchema);