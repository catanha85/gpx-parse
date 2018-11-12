/**
 * Constructs a gpx waypoint extensions.
 * @class
 * @classdesc Represents the extensions for a waypoing, according to Garmin specs
 * @param {number} hr Heart rate at the waypoint.
 * @param {number} cad Cadence at the waypoint.
 **/
function GpxWaypointExtensions(hr, cad) {
	hr = parseFloat(hr) || -1;
	cad = parseFloat(cad) || -1;

	/**
	* Cadence at the Waypoint
	* @name lat
	* @memberOf GpxWaypointExtensions
	* @instance
	* @type {Number}
	**/
	this.__defineGetter__("cad", function() {
		return cad;
	});

	/**
	* Heart rate at the Waypoint
	* @name hr
	* @memberOf GpxWaypointExtensions
	* @instance
	* @type {Number}
	**/
	this.__defineGetter__("hr", function() {
		return hr;
	});
}

module.exports = GpxWaypointExtensions;
