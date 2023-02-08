"use strict";
const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    
    auctionId: {
        type: Number,
        required: true,
    },
    userAddrs: {
        type: String,
        required: true,
    },
    nftId: {
        type: Number,
        required: true,
    },
    txHash: {
        type: String,
        required: true,
        unique:true,
    },
    amount: {
        type: Number,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: () => new Date()
    }

})

const auctionModel = mongoose.model('auctionevent', schema);

module.exports = auctionModel;