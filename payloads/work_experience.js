// url: /api/doctors/

/**
 * Creating an experience record
 * method: POST
 * url: /api/experiences
 * {
 *     "doctor": "664f6dca66fbf3ae1097895b",
        "employer": "Kenyatta Hospital",
        "position": "Chief Surgeon",
        "start_date": "2017-10-10",
        "end_date": "2020-10-10", (This value should not contain a value if the person still works there)
        "works_here": false (if the person still works here, the value should be true)
 * }
 */

/**
 * Getting All experience records
 * method: GET
 * url: /api/experiences
 */

/**
 * Get experience records for a specific doctor
 * method: GET
 * url: /api/experiences/doctor-experiences/{id}
 * Note: The id indicated above, is doctor id, the unique identifier for a doctor
 */


/**
 * Get Experience Record By ID
 * method: GET
 * /api/experiences/{id}
 */

/**
 * Updating experience record
 * method: PUT
 * url: /api/experiences/{id}
 * {
 *      "doctor": "664f6dca66fbf3ae1097895b",
        "employer": "Kenyatta Hospital",
        "position": "Chief Surgeon",
        "start_date": "2017-10-10",
        "end_date": "2020-10-10", (This value should not contain a value if the person still works there)
        "works_here": false (if the person still works here, the value should be true)
 * }
 */

/**
 * Deleting an experience record
 * method: DELETE
 * url: /api/experiences/{id}
 */