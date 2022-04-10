const router = require('express').Router();
const circuitController = require('./circuits.controller');

/**
 * @swagger
 *   /api/Circuits:
 *     get:
 *       tags:
 *       - Circuits
 *       description: Get all Circuits
 *       responses:
 *         200:
 *           description: Array with a list of channels
 */

router.get('/Circuits',circuitController.getAll);
 /**
  * @swagger
  *   /api/Circuits/{id}:
  *     get:
  *       tags:
  *       - Circuits
  *       description: Get one channel by ID
  *       parameters:
  *         - in: path
  *           name: id
  *           required: true
  *           description: Circuit's unique ID
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */
router.get('/Circuits/:id',circuitController.getOne);
  /**
  * @swagger
  *   /api/Circuits/:
  *     post:
  *       tags:
  *       - Circuits
  *       description: Create a Circuit
  *       parameters:
  *         - in: header
  *           name: name
  *           required: true
  *           description: Name of the circuit
  *         - in: header
  *           name: address
  *           required: true
  *           description: The real address of the circuit
  *         - in: header
  *           name: phone
  *           required: true
  *           description: a phone number to contact with the circuit managers
  *         - in: header
  *           name: distance
  *           required: true
  *           description: The circuit distance, measured in kilometers
  *       responses:
  *         200:
  *           description: An object with a single message's data
  */

router.post('/Circuits',circuitController.create);
//router.delete('./users',userController.delete);
module.exports = router;