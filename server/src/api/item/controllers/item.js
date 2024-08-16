// import Stripe from "stripe";
'use strict';
// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
/**
// /**
 * item controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::item.item');
