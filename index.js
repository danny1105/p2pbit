"use strict";
const fs = require("fs");
const bencode = require("bencode");

(async () => {
	const torrent = fs.readFileSync(
		"60.Minutes.S51E35.480p.x264-mSD[eztv].mkv.torrent"
	);
	try {
		const resp = bencode.decode(torrent);
		console.log(resp.announce);
	} catch (e) {
		console.log(e);
	}
})();
